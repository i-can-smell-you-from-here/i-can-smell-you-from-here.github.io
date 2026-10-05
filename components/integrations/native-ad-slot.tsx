import { adsterra } from "@/config/adsterra";
import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return (
    <aside className="adsterra-slot adsterra-native" aria-label="Advertisement" data-adsterra-slot="native">
      <p className="adsterra-label">Advertisement</p>
      <NativeAdClient documentUrl={adsterra.nativeDocument} />
    </aside>
  );
}
