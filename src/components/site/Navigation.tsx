"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  ChevronDown,
  Cog,
  Disc,
  MapPin,
  Phone,
  Plug,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

import { CONTACT, LOGOS, NAV_LINKS } from "@/lib/siteData";

const SERVICES_MENU = [
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Oil changes & fluid services",
    href: "/maintenance",
    services: [
      { id: "oil-change", title: "Oil Change", href: "/maintenance#oil-change", icon: Sparkles },
      { id: "coolant-flush", title: "Coolant Flush", href: "/maintenance#coolant-flush", icon: Disc },
      { id: "brake-fluid", title: "Brake Fluid Flush", href: "/maintenance#brake-fluid", icon: Disc },
      { id: "transmission", title: "Transmission Fluid", href: "/maintenance#transmission", icon: Cog },
    ],
  },
  {
    id: "repairs",
    title: "Repairs",
    description: "Brakes, suspension, tires & tune-ups",
    href: "/repairs",
    services: [
      { id: "brakes", title: "Brakes", href: "/repairs#brakes", icon: Disc },
      { id: "suspension", title: "Suspension", href: "/repairs#suspension", icon: Car },
      { id: "tires", title: "Tire Change", href: "/repairs#tires", icon: Zap },
      { id: "filters", title: "Spark Plugs & Filters", href: "/repairs#spark-plugs-filters", icon: Plug },
      { id: "wipers", title: "Wipers", href: "/repairs#wipers", icon: Zap },
    ],
  },
  {
    id: "inspections",
    title: "Inspections & Towing",
    description: "Diagnostics, certifications & towing",
    href: "/inspections",
    services: [
      { id: "electrical", title: "Electrical Diagnostics", href: "/inspections#electrical", icon: Plug },
      { id: "mechanical", title: "Mechanical Diagnostics", href: "/inspections#mechanical", icon: Cog },
      { id: "safety", title: "Safety Certificate", href: "/inspections#safety", icon: Disc },
      { id: "towing", title: "In-House Towing", href: "/inspections#towing", icon: Truck },
    ],
  },
];

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"root" | "services">("root");

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setMobileView("root");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <header className="bg-background relative z-50 border-b border-gray-100">
      <div className="container">
        <div className="flex h-20 items-center justify-between px-4 lg:h-28 lg:px-6">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <img
              src={LOGOS.logoDark}
              alt="Merivale Auto Centre"
              width={240}
              height={64}
              className="h-16 w-auto lg:h-20"
            />
          </a>

          <div
            className="relative hidden lg:flex"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <nav className="flex items-center gap-1">
              <button
                className="text-foreground text-body-sm-medium group inline-flex h-9 items-center px-3 transition-colors hover:text-primary-100"
                onClick={() => setServicesOpen((prev) => !prev)}
                type="button"
              >
                Services
                <ChevronDown className="relative top-px ml-1 size-3 transition duration-300 group-hover:translate-y-0.5" />
              </button>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-body-sm-medium inline-flex h-9 items-center px-3 transition-colors hover:text-primary-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {servicesOpen && (
              <div className="absolute left-0 top-full flex justify-center">
                <div className="relative mt-1.5 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm md:w-[calc(100vw-4rem)]">
                  <div className="rounded-xl bg-white p-8 shadow-lg">
                    <div className="w-full max-w-5xl">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                        {SERVICES_MENU.map((category) => (
                          <div
                            key={category.id}
                            className="rounded-md border border-gray-200 p-5"
                          >
                            <div className="border-b border-gray-200 pb-4">
                              <a href={category.href} className="group flex flex-col text-left">
                                <div className="flex items-center">
                                  <strong className="text-body-sm-medium text-gray-900">
                                    {category.title}
                                  </strong>
                                  <ArrowRight className="ml-1 size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-100" />
                                </div>
                                <p className="mt-1 text-xs text-gray-500">
                                  {category.description}
                                </p>
                              </a>
                            </div>
                            <menu className="mt-4 grid gap-y-3">
                              {category.services.map((service) => (
                                <a
                                  key={service.id}
                                  href={service.href}
                                  className="group flex flex-row items-center space-x-3 text-left hover:text-primary-100"
                                >
                                  <service.icon className="size-4 text-gray-400 group-hover:text-primary-100" />
                                  <div className="flex-1 text-sm font-medium text-gray-600 group-hover:text-primary-100">
                                    {service.title}
                                  </div>
                                </a>
                              ))}
                            </menu>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-gray-50 px-4 py-3">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Quick Contact:</span>
                          <a
                            href={CONTACT.phoneHref}
                            className="flex items-center gap-1.5 hover:text-primary-100"
                          >
                            <Phone className="size-4" />
                            {CONTACT.phone}
                          </a>
                          <span className="hidden text-gray-300 sm:inline">|</span>
                          <span className="hidden sm:inline">{CONTACT.hours.display}</span>
                        </div>
                        <a
                          href={CONTACT.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary-100 hover:text-primary-200"
                        >
                          <MapPin className="size-4" />
                          Get Directions
                          <ArrowRight className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <span className="inline-flex h-10 items-center gap-2 rounded-[16px] border border-gray-200 bg-gray-0 px-4 text-sm font-semibold text-foreground transition-colors hover:bg-gray-25">
                <MapPin className="size-4" />
                <span className="hidden xl:inline">Directions</span>
              </span>
            </a>
            <a href={CONTACT.phoneHref} className="hidden lg:block">
              <span className="inline-flex h-10 items-center gap-2 rounded-[16px] bg-secondary px-4 text-sm font-semibold text-white transition-colors hover:bg-secondary-200">
                <Phone className="size-4" />
                <span>{CONTACT.phone}</span>
              </span>
            </a>
            <a href={CONTACT.phoneHref} className="lg:hidden">
              <span className="inline-flex h-10 items-center gap-1.5 rounded-[16px] bg-secondary px-3 text-sm font-semibold text-white">
                <Phone className="size-4" />
                <span className="text-body-xs">Call</span>
              </span>
            </a>
            <button
              className="text-foreground relative flex size-10 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              type="button"
            >
              <div className="relative h-4 w-5">
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-0 block h-0.5 w-full rounded-full transition-all duration-300 ${
                    mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-0 block h-0.5 w-full rounded-full transition-all duration-300 ${
                    mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="bg-background fixed inset-x-0 top-[120px] z-40 flex h-[calc(100dvh-120px)] w-full flex-col overflow-auto border-t border-gray-100 lg:hidden"
        >
          <div className="container flex h-full flex-col px-4">
            {mobileView !== "root" && (
              <div className="mt-3">
                <button
                  type="button"
                  className="relative -left-4 inline-flex items-center gap-2 text-gray-600"
                  onClick={() => setMobileView("root")}
                >
                  <ArrowLeft className="size-4" />
                  Go back
                </button>
              </div>
            )}
            {mobileView === "root" && (
              <div>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-gray-100 py-6 text-left"
                  onClick={() => setMobileView("services")}
                >
                  <span className="flex-1 text-sm font-medium">Services</span>
                  <ArrowRight className="size-4 text-gray-400" />
                </button>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center border-b border-gray-100 py-6 text-left text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            {mobileView === "services" && (
              <div>
                <h2 className="pb-6 pt-4 text-lg font-medium">Services</h2>
                {SERVICES_MENU.map((category) => (
                  <div key={category.id} className="mb-6 rounded-md border border-gray-200 p-5">
                    <div className="border-b border-gray-200 pb-4">
                      <a
                        href={category.href}
                        className="group flex flex-col text-left"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="flex items-center">
                          <strong className="text-sm font-medium text-gray-900">
                            {category.title}
                          </strong>
                          <ArrowRight className="ml-1 size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-100" />
                        </div>
                        <p className="mt-1 text-xs text-gray-500">{category.description}</p>
                      </a>
                    </div>
                    <menu className="mt-4 grid gap-y-3">
                      {category.services.map((service) => (
                        <a
                          key={service.id}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="group flex flex-row items-center space-x-3 text-left hover:text-primary-100"
                        >
                          <service.icon className="size-4 text-gray-400 group-hover:text-primary-100" />
                          <div className="flex-1 text-sm font-medium text-gray-600 group-hover:text-primary-100">
                            {service.title}
                          </div>
                          <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                        </a>
                      ))}
                    </menu>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-auto flex flex-col items-center gap-4 py-12">
              <a href={CONTACT.phoneHref} className="w-full">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-secondary px-4 py-3 text-sm font-semibold text-white">
                  <Phone className="size-5" />
                  Call {CONTACT.phone}
                </span>
              </a>
              <a
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-[16px] border border-gray-200 bg-gray-0 px-4 py-3 text-sm font-semibold text-foreground">
                  <MapPin className="size-5" />
                  Get Directions
                </span>
              </a>
              <p className="mt-4 text-center text-xs text-gray-500">{CONTACT.address.full}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
