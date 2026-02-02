import { Clock, MapPin } from "lucide-react";

import { CONTACT } from "@/lib/siteData";

export function TopBar() {
  return (
    <div className="bg-primary-300">
      <div className="container flex items-center justify-center gap-4 px-4 py-2.5 sm:gap-6 sm:py-2">
        <a
          href={CONTACT.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-white/90 transition-colors hover:text-white sm:text-sm"
        >
          <MapPin className="size-3.5 shrink-0 sm:size-4" />
          <span className="hidden sm:inline">{CONTACT.address.full}</span>
          <span className="sm:hidden">{CONTACT.address.street}</span>
        </a>
        <span className="text-white/40">|</span>
        <span className="flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
          <Clock className="size-3.5 shrink-0 sm:size-4" />
          <span className="hidden sm:inline">{CONTACT.hours.display}</span>
          <span className="sm:hidden">Mon—Sat Open</span>
        </span>
      </div>
    </div>
  );
}
