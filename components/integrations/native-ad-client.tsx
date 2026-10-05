"use client";

import { AdFrame } from "./ad-frame";

export function NativeAdClient({ documentUrl }: { documentUrl: string }) {
  return <AdFrame kind="native" documentUrl={documentUrl} />;
}
