import Script from "next/script";
import { MapPin, Phone } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navigation } from "@/components/site/Navigation";
import { TopBar } from "@/components/site/TopBar";
import { CONTACT, LOGOS } from "@/lib/siteData";

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navigation />

      <section className="relative overflow-hidden bg-white px-6 py-16 lg:py-24">
        <div className="pointer-events-none absolute -top-24 right-[-120px] size-72 rounded-full bg-primary-25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-[-120px] size-72 rounded-full bg-secondary-25 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-body-xs-medium bg-gray-0 inline-flex h-8 items-center gap-2 rounded-[10px] border border-gray-100 px-3 py-0 leading-none shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
              <img src={LOGOS.ellipse} alt="status" width={6} height={6} className="h-[6px] w-[6px]" />
              Book
            </span>
            <h1 className="text-foreground text-heading-1 mt-4 tracking-tight lg:text-[56px]">
              Book an Appointment
            </h1>
            <p className="text-body-md sm:text-body-lg mt-4 text-gray-400">
              Choose a time that works for you. Our team will confirm and get your vehicle taken care
              of.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={CONTACT.phoneHref} className="w-full sm:w-auto">
                <span className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-secondary px-6 text-body-md font-semibold text-white transition-colors hover:bg-secondary-200">
                  <Phone className="size-5" />
                  Call {CONTACT.phone}
                </span>
              </a>
              <a href={CONTACT.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <span className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] border border-gray-200 bg-background px-6 text-body-md font-semibold">
                  <MapPin className="size-5" />
                  Get Directions
                </span>
              </a>
            </div>
          </div>

          <div className="mt-12 rounded-[24px] border border-gray-100 bg-white p-4 shadow-[0_12px_24px_-4px_rgba(10,10,10,0.08)] sm:p-6">
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div
              className="elfsight-app-9ae09b83-37d4-4f4d-975c-41d7a313788d min-h-[520px]"
              data-elfsight-app-lazy
            />
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Prefer to talk to us? Call{" "}
            <a href={CONTACT.phoneHref} className="font-medium text-primary-100 hover:text-primary-200">
              {CONTACT.phone}
            </a>{" "}
            or email{" "}
            <a href={CONTACT.emailHref} className="font-medium text-primary-100 hover:text-primary-200">
              {CONTACT.email}
            </a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
