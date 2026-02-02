import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  Clock,
  MapPin,
  Phone,
  Star,
  StarHalf,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/site/Footer";
import { Navigation } from "@/components/site/Navigation";
import { TopBar } from "@/components/site/TopBar";
import { CONTACT, LOGOS } from "@/lib/siteData";

const SERVICES_CARDS = [
  {
    category: "Preventive Care",
    title: "Maintenance",
    description: "Fluid services and routine maintenance to keep your vehicle running.",
    image: "https://www.carko.ca/images/services/maintenance.webp",
    alt: "Car lifted in a shop for maintenance",
    items: [
      "Oil & Filter Change",
      "Coolant & Fluid Flushes",
      "Brake & Transmission Fluid",
      "Belts & Hoses Inspection",
    ],
    href: "/maintenance",
  },
  {
    category: "Restore Performance",
    title: "Repairs",
    description: "Mechanical repairs for brakes, suspension, tires, and other components.",
    image: "https://www.carko.ca/images/services/repairs.webp",
    alt: "Brake rotors and repair service",
    items: [
      "Brake Pads & Rotors",
      "Suspension & Steering",
      "Tire Swaps & Balancing",
      "Spark Plugs & Filters",
    ],
    href: "/repairs",
  },
  {
    category: "Know What's Wrong",
    title: "Inspections & Towing",
    description: "Diagnostics, safety certificates, and towing services.",
    image: "https://www.carko.ca/images/services/diagnostics.webp",
    alt: "Mechanic performing engine diagnostics",
    items: [
      "Electrical Diagnostics",
      "Safety Certificates",
      "Mechanical Check-ups",
      "Local Ottawa Towing",
    ],
    href: "/inspections",
  },
];

const REVIEWS = [
  {
    name: "Anna G.",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "I had issues with my suspension and the mechanics here handled it perfectly. The car drives so much smoother now. I also changed the oil and tires several times. Guys are always fast and friendly. Most important - prices are fair enough.",
  },
  {
    name: "Faizaan C.",
    avatar: "https://i.pravatar.cc/150?img=11",
    content:
      "This mechanic is very friendly and the experience was amazing. They ensure that you understand what needs to happen and how much it is going to cost. The price was very affordable and is much better than other mechanics in the area.",
  },
  {
    name: "Omar E.",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "Had my oil change there and the customer service was great. Was able to do 3 cars in 2 hours same day appointment. Would definitely go back again.",
  },
  {
    name: "Jessica L.",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "I had car issues last week and had to find the closest shop to safely bring my vehicle to. I'm so lucky Merivale Auto was nearby and still open, because my experience with them was excellent. They communicated clearly, quickly identified the problem, and handled everything professionally.",
  },
  {
    name: "Mark M.",
    avatar: "https://i.pravatar.cc/150?img=13",
    content:
      "They are efficient, communicative, and honest. I came in one day needing a quick simple task rushed to save a trip. They helped with no rush fee, and when I came back several months later not only did they remember me, but they even offered a discount.",
  },
  {
    name: "Kevin P.",
    avatar: "https://i.pravatar.cc/150?img=14",
    content:
      "Amazing service, stumbled upon them on accident and they were the only ones who was able to diagnose my ABS issues after thousands spent at other mechanics and after 3 other mechanics could not figure out what's wrong, they identified the issue quickly and gave me a fair price.",
  },
  {
    name: "Asil E.",
    avatar: "https://i.pravatar.cc/150?img=15",
    content:
      "Excellent service. They made a mistake but took responsibility and fixed it for no additional charge. They give good advice and are very clear about billing.",
  },
  {
    name: "KingPin",
    avatar: "https://i.pravatar.cc/150?img=8",
    content:
      "Best mechanic I have ever been to. Came here 3 years ago and have been coming here ever since. Best prices and the staff genuinely will tell you what doesn't need replacing and what does. Definitely recommend you talk to Abdul.",
  },
  {
    name: "Uju B.",
    avatar: "https://i.pravatar.cc/150?img=9",
    content:
      "Exceptional service! The team went above and beyond to support me through a stressful and inconvenient situation with my car. Their quick response and friendly approach made all the difference. I'll definitely return if I ever need their help again.",
  },
  {
    name: "Cathy G.",
    avatar: "https://i.pravatar.cc/150?img=10",
    content:
      "Beyond amazing service. Friendly, quick and knowledgeable. You won't be disappointed!",
  },
];

const FAQS = [
  {
    question: "Do I need an appointment for an oil change?",
    answer:
      "Walk-ins are welcome for oil changes. Appointments are recommended for larger repairs or diagnostics.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept cash, debit, Visa, Mastercard, and e-Transfer.",
  },
  {
    question: "How long does a safety certificate inspection take?",
    answer: "A standard safety inspection typically takes 30-60 minutes.",
  },
  {
    question: "Do you work on all makes and models?",
    answer:
      "Yes. Our licensed mechanics service all domestic and import vehicles, including cars, trucks, SUVs, and minivans.",
  },
  {
    question: "Do you offer towing services?",
    answer: "Yes, in-house towing is available for the Ottawa area. Call us to arrange a pickup.",
  },
];

const RatingStars = () => (
  <span className="flex items-center gap-1.5">
    <span className="flex items-center text-warning-100">
      <Star className="size-4 fill-current" />
      <Star className="size-4 fill-current" />
      <Star className="size-4 fill-current" />
      <Star className="size-4 fill-current" />
      <span className="relative">
        <Star className="size-4 text-gray-100" />
        <StarHalf className="absolute inset-0 size-4 fill-current" />
      </span>
    </span>
    <span className="text-body-sm-medium text-foreground">4.7</span>
  </span>
);

const ReviewStars = () => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="absolute -inset-40 z-0 [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
        <svg width="32" height="32" className="text-black/5 h-full w-full">
          <defs>
            <pattern
              id="plus-pattern"
              x="0"
              y="0"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <line x1="8" y1="5" x2="8" y2="11" stroke="currentColor" strokeWidth="1" />
              <line x1="5" y1="8" x2="11" y2="8" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plus-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start text-left">
            <div className="mb-8">
              <a
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white px-4 py-2.5 shadow-[0_1px_2px_0_rgba(13,13,18,0.06)] transition-colors hover:border-gray-200 hover:bg-gray-25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <img src={LOGOS.googleIcon} alt="Google" className="size-5" />
                <RatingStars />
                <span className="text-body-sm text-gray-400">300+ Reviews</span>
              </a>
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Licensed Mechanics in Ottawa
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg text-gray-500">
              <span>Oil Changes</span>
              <span className="text-primary-100">•</span>
              <span>Brakes</span>
              <span className="text-primary-100">•</span>
              <span>Diagnostics</span>
              <span className="text-primary-100">•</span>
              <span>Safety Certificates</span>
              <span className="text-primary-100">•</span>
              <span>Towing</span>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4">
              <a href={CONTACT.phoneHref}>
                <span className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-secondary px-4 text-body-md font-semibold text-white transition-colors hover:bg-secondary-200 sm:w-auto sm:px-8">
                  <Phone className="size-5" />
                  <span className="hidden sm:inline">Call {CONTACT.phone}</span>
                  <span className="sm:hidden">Call</span>
                </span>
              </a>
              <a href={CONTACT.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] border border-gray-200 bg-background px-4 text-body-md font-semibold sm:w-auto sm:px-8">
                  <MapPin className="size-5" />
                  <span>Directions</span>
                </span>
              </a>
            </div>
            <div className="mt-12 space-y-4">
              {[
                "Licensed Ontario Mechanics",
                "All Makes & Models",
                "In-House Towing Available",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-success-25 text-success-100">
                    <BadgeCheck className="size-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:ml-auto lg:max-w-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src="https://www.carko.ca/images/services/maintenance.webp"
                    alt="Auto Maintenance"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src="https://www.carko.ca/images/homepage/hero-shop.jpeg"
                    alt="Merivale Auto Centre Shop"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src="https://www.carko.ca/images/services/diagnostics.webp"
                    alt="Vehicle Diagnostics"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                  <img
                    src="https://www.carko.ca/images/services/repairs.webp"
                    alt="Expert Car Repair"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 size-32 rounded-full bg-primary-25 blur-3xl" />
            <div className="absolute -top-6 -left-6 -z-10 size-32 rounded-full bg-secondary-25 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-6 py-10 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="text-body-xs-medium bg-gray-0 inline-flex h-8 items-center gap-2 rounded-[10px] border border-gray-100 px-3 py-0 leading-none shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
            <img
              src={LOGOS.ellipse}
              alt="elipse"
              width={6}
              height={6}
              className="h-[6px] w-[6px]"
            />
            What We Do
          </span>
          <h2 className="text-foreground text-heading-1 mt-4 tracking-tight lg:text-[52px]">
            Our Services
          </h2>
          <p className="text-body-md sm:text-body-lg mx-auto mt-4 max-w-2xl text-gray-400">
            Maintenance, repairs, and diagnostics for all makes and models.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES_CARDS.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-[24px] border border-gray-50 bg-gray-0 p-3 shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)] transition-all hover:border-gray-100 hover:shadow-[0_12px_24px_-4px_rgba(10,10,10,0.08)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[20px]">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 pt-6">
                <span className="text-body-xs-medium text-primary-100 mb-2 uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-heading-4 text-foreground mb-3">{service.title}</h3>
                <p className="text-body-sm text-gray-400 mb-6 flex-1">{service.description}</p>
                <ul className="mb-8 space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-body-sm text-gray-600">
                      <CircleCheck className="size-4 shrink-0 text-success-100" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="group/btn inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] border border-[#DFE1E6] bg-background p-4 text-body-md font-semibold transition-colors"
                >
                  View {service.title}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="px-6 py-10 lg:py-24">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
          <span className="text-body-xs-medium bg-gray-0 inline-flex h-8 items-center gap-2 rounded-[10px] border border-gray-100 px-3 py-0 leading-none shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
            <img src={LOGOS.ellipse} alt="status" width={6} height={6} className="h-[6px] w-[6px]" />
            Reviews
          </span>
          <h2 className="text-foreground text-heading-1 mt-4 tracking-tight lg:text-[52px]">
            Customer Reviews
          </h2>
          <p className="text-body-md sm:text-body-lg mt-4 max-w-[568px] text-gray-400">
            Feedback from drivers in the Ottawa area.
          </p>
          <a
            href={CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white px-4 py-2.5 shadow-[0_1px_2px_0_rgba(13,13,18,0.06)] transition-colors hover:border-gray-200 hover:bg-gray-25"
          >
            <img src={LOGOS.googleFull} alt="Google" className="h-5 w-auto" />
            <RatingStars />
            <span className="text-body-sm text-gray-400">300+ Reviews</span>
          </a>
        </div>
      </div>

      <div className="mt-8 lg:mt-12">
        <div className="relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-12 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-12 after:bg-gradient-to-l after:from-background after:to-transparent sm:before:w-24 sm:after:w-24 lg:before:w-36 lg:after:w-36">
          <div className="reviews-scroll flex items-stretch gap-4 overflow-x-auto pb-4 pl-4">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)] sm:w-[380px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-gray-100">
                      <img src={review.avatar} alt={review.name} className="size-full object-cover" />
                    </div>
                    <p className="font-medium text-foreground">{review.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LOGOS.googleIcon} alt="Google" className="size-5" />
                    <ReviewStars />
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 overflow-hidden text-gray-500 leading-relaxed">
                  &quot;{review.content}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="px-6 py-10 lg:py-24 bg-gray-25">
      <div className="container">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 items-center">
          <div className="lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
            <span className="text-body-xs-medium bg-gray-0 inline-flex h-8 items-center gap-2 rounded-[10px] border border-gray-100 px-3 py-0 leading-none shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
              <img src={LOGOS.ellipse} alt="status" width={6} height={6} className="h-[6px] w-[6px]" />
              Location
            </span>
            <h2 className="text-foreground text-heading-1 mt-4 tracking-tight lg:text-[52px]">
              Find Us in Ottawa
            </h2>
            <p className="text-body-md sm:text-body-lg mt-4 max-w-[568px] text-gray-400">
              Located on Merivale Road for all your automotive needs.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-8 w-full">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-[10px] bg-white border border-gray-100 flex items-center justify-center shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
                    <MapPin className="size-5 text-primary-100" />
                  </div>
                  <h3 className="text-heading-5">Our Address</h3>
                </div>
                <div className="text-body-sm sm:text-body-md text-gray-600">
                  <p>{CONTACT.address.street}</p>
                  <p>
                    {CONTACT.address.city}, {CONTACT.address.province} {CONTACT.address.postalCode}
                  </p>
                  <a
                    href={CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-primary-100 hover:text-primary-200 font-medium transition-colors group"
                  >
                    Get Directions
                    <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-[10px] bg-white border border-gray-100 flex items-center justify-center shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
                    <Clock className="size-5 text-primary-100" />
                  </div>
                  <h3 className="text-heading-5">Business Hours</h3>
                </div>
                <div className="text-body-sm text-gray-600 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-gray-400">Mon—Fri:</span>
                    <span className="text-gray-700 font-medium">{CONTACT.hours.monday}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-gray-400">Saturday:</span>
                    <span className="text-gray-700 font-medium">{CONTACT.hours.saturday}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-gray-400">Sunday:</span>
                    <span className="text-secondary-100 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 w-full">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex h-[52px] items-center gap-2 rounded-[16px] bg-secondary px-6 text-body-md font-semibold text-white"
              >
                <Phone className="size-5" />
                Call {CONTACT.phone}
              </a>
              <a
                href="/book"
                className="inline-flex h-[52px] items-center gap-2 rounded-[16px] border border-gray-200 bg-background px-6 text-body-md font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="bg-gray-0 p-2 lg:p-3 rounded-[20px] border border-gray-50 shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]">
              <div className="aspect-[4/3] w-full rounded-[14px] overflow-hidden border border-gray-100">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=${CONTACT.googleMapsEmbedPb}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Merivale Auto Centre Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="px-6 py-10 lg:py-24 bg-gray-25">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <span className="text-body-xs-medium bg-gray-0 inline-flex h-8 w-fit items-center gap-2 rounded-[10px] border border-gray-100 px-3 py-0 leading-none shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
                <img src={LOGOS.ellipse} alt="status" width={6} height={6} className="h-[6px] w-[6px]" />
                FAQ
              </span>
              <h2 className="text-foreground text-heading-1 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-body-md sm:text-body-lg text-gray-400">
                Answers to common questions about services and pricing.
              </p>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[16px] border border-gray-200 bg-background px-5 text-body-md font-semibold"
                >
                  <span className="mr-2">Still have questions? Contact us</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-[18px]">
              {FAQS.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-b-0">
                  <div className="rounded-2xl border border-gray-50 bg-gray-0">
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left sm:px-6 sm:py-5 hover:no-underline [&>svg]:hidden">
                      <span className="text-body-md-medium text-foreground">{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="text-foreground text-xl group-data-[state=open]:hidden"
                      >
                        +
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-foreground hidden text-xl group-data-[state=open]:block"
                      >
                        −
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5">
                      <p className="text-body-md text-gray-400">{faq.answer}</p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <LocationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
