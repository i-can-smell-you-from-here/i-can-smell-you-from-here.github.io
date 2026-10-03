import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found" },
  description: "The requested game wiki page is not available.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="site-container grid min-h-[65vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1>Page Not Found</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          The page may have moved or the address may be incorrect.
        </p>
        <Link href="/" className="button-primary mt-8"><ArrowLeft size={18} />Return to Home</Link>
        <div className="mt-6 flex flex-wrap justify-center gap-5"><Link href="/endings/">Endings</Link><Link href="/where-to-play/">Where to Play</Link><Link href="/idimya/">Idimya</Link><Link href="/controls/">Controls</Link></div>
      </div>
    </main>
  );
}
