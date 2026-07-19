import { Star, Syringe, DollarSign, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productImages } from "@/lib/data";

const features = [
  {
    icon: Syringe,
    title: "Doctor-prescribed",
    text: "Compounded medication prescribed by licensed providers.",
  },
  {
    icon: DollarSign,
    title: "One flat price",
    text: "No insurance headaches — transparent monthly pricing.",
  },
  {
    icon: Truck,
    title: "Free fast shipping",
    text: "Delivered discreetly to your door, every month.",
  },
];

/** A single vertically-scrolling image column. */
function MarqueeColumn({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  const doubled = [...images, ...images];
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex flex-col gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="aspect-[3/4] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const colA = productImages.slice(0, 4);
  const colB = productImages.slice(4, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          {/* Rating badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
            </span>
            <span className="text-sm font-medium">
              4.5 Average Rating
              <span className="text-muted-foreground"> • 453 Reviews</span>
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Compounded Semaglutide for Weight Loss
          </h1>

          <div className="mt-8 space-y-5">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-8 border-border" />

          {/* Pricing row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <div>
              <p className="text-3xl font-bold">$296/mo</p>
              <p className="text-sm text-muted-foreground">
                *No matter the dose
              </p>
            </div>
            <Button size="lg">Get Started</Button>
          </div>

          {/* Info card */}
          <a
            href="#"
            className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-4 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-lg"
          >
            <img
              src={productImages[3]}
              alt="Program thumbnail"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">Is This Right for You?</p>
              <p className="text-sm text-muted-foreground">
                Take the 2-minute eligibility quiz.
              </p>
            </div>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Right column: dual vertical marquees */}
        <div className="relative hidden h-[38rem] lg:block">
          <div className="grid h-full grid-cols-2 gap-4">
            <MarqueeColumn images={colA} />
            <MarqueeColumn images={colB} reverse />
          </div>
          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
