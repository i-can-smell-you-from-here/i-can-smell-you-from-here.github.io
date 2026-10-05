"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/urls";

type AdFrameProps =
  | { kind: "banner"; desktopDocument: string; mobileDocument: string }
  | { kind: "native"; documentUrl: string };

/** Separate documents preserve the official snippets and contain their
 * document.write/global state. Removing a frame also removes its ad instance. */
export function AdFrame(props: AdFrameProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const kind = props.kind;
  const desktopDocument = props.kind === "banner" ? props.desktopDocument : "";
  const mobileDocument = props.kind === "banner" ? props.mobileDocument : "";
  const nativeDocument = props.kind === "native" ? props.documentUrl : "";

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let observer: ResizeObserver | undefined;
    let frame: HTMLIFrameElement | undefined;

    // Deferring creation lets Strict Mode's rehearsal clean up without executing
    // third-party scripts twice. Device selection stays fixed until navigation.
    const pending = requestAnimationFrame(() => {
      if (document.querySelector(`[data-adsterra-frame="${kind}"]`)) return;
      const mobile = !window.matchMedia("(min-width: 768px)").matches;
      frame = document.createElement("iframe");
      frame.title = kind === "banner" ? "Banner advertisement" : "Native advertisement";
      frame.dataset.adsterraFrame = kind;
      frame.className = "adsterra-frame";
      frame.width = kind === "banner" ? String(mobile ? 320 : 728) : "100%";
      frame.height = kind === "banner" ? String(mobile ? 50 : 90) : "180";
      if (kind === "native") {
        frame.addEventListener("load", () => {
          const body = frame?.contentDocument?.body;
          if (!body || !frame?.isConnected) return;
          const resize = () => {
            if (frame?.isConnected) {
              frame.height = String(Math.max(180, Math.ceil(body.getBoundingClientRect().height)));
            }
          };
          observer = new ResizeObserver(resize);
          observer.observe(body);
          resize();
        }, { once: true });
      }
      frame.src = assetPath(kind === "banner" ? (mobile ? mobileDocument : desktopDocument) : nativeDocument);
      host.appendChild(frame);
    });

    return () => {
      cancelAnimationFrame(pending);
      observer?.disconnect();
      frame?.remove();
    };
  }, [pathname, kind, desktopDocument, mobileDocument, nativeDocument]);

  return <div ref={hostRef} className={`adsterra-host adsterra-host-${kind}`} />;
}
