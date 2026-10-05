"use client";

import { useEffect } from "react";
import { adsterra } from "@/config/adsterra";

export function SocialBar() {
  useEffect(() => {
    const pending = requestAnimationFrame(() => {
      if (document.getElementById("adsterra-social-bar")) return;
      const script = document.createElement("script");
      script.id = "adsterra-social-bar";
      script.src = adsterra.socialBarScriptUrl;
      document.body.appendChild(script);
    });
    // The script belongs to this document, not a route or effect lifetime.
    return () => cancelAnimationFrame(pending);
  }, []);
  return null;
}
