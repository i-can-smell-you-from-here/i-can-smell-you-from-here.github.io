import { adsterra } from "@/config/adsterra";
import { AdFrame } from "./ad-frame";

export function ResponsiveBanner() {
  return (
    <aside className="adsterra-slot adsterra-banner" aria-label="Advertisement" data-adsterra-slot="banner">
      <p className="adsterra-label">Advertisement</p>
      <AdFrame kind="banner" desktopDocument={adsterra.desktopDocument} mobileDocument={adsterra.mobileDocument} />
    </aside>
  );
}
