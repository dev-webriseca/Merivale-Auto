import Link from "next/link";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { CONTACT, LOGOS } from "@/lib/siteData";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 text-white overflow-hidden">
      <div className="container px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <img
                  src={LOGOS.logoLight}
                  alt="Merivale Auto Centre logo"
                  width={300}
                  height={80}
                  className="h-24 w-auto"
                />
              </Link>
              <p className="text-white/60 leading-relaxed max-w-xs">
                Quality auto service in Ottawa. From oil changes to diagnostics, our expert team
                ensures your vehicle stays safe and reliable.
              </p>
            </div>
            <div className="flex w-full items-center justify-start gap-7">
              <a
                href={CONTACT.social.facebook}
                aria-label="Facebook"
                className="flex size-6 opacity-100 transition-opacity hover:opacity-50"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Facebook className="m-auto size-full" />
              </a>
              <a
                href={CONTACT.social.instagram}
                aria-label="Instagram"
                className="flex size-6 opacity-100 transition-opacity hover:opacity-50"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Instagram className="m-auto size-full" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/maintenance"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/repairs"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/inspections"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  Inspections & Towing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-primary-100 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-100 mr-0 group-hover:mr-2 transition-all duration-200" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="size-5 text-primary-100 shrink-0 mt-0.5" />
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.city}, {CONTACT.address.province} {CONTACT.address.postalCode}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary-100 shrink-0" />
                <a href={CONTACT.phoneHref} className="text-white/60 hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary-100 shrink-0" />
                <a href={CONTACT.emailHref} className="text-white/60 hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3 pt-2 border-t border-white/5">
                <Clock className="size-5 text-primary-100 shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm">
                  <p className="font-medium text-white mb-1">Hours of Operation</p>
                  <p>Mon—Fri: 9:30 AM — 8:00 PM</p>
                  <p>Sat: 10:00 AM — 8:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/30">
        <div className="container px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/40">© 2026 Merivale Auto Centre. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
