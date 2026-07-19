import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import { carouselCards, type CarouselCard } from "@/lib/data";

/** A tall image card with overlaid pricing text and a CTA. */
function ShowcaseCard({ card }: { card: CarouselCard }) {
  return (
    <div className="group relative h-[32rem] overflow-hidden rounded-3xl sm:h-[40rem] md:h-[48rem]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${card.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 text-white">
        <p className="text-sm font-medium opacity-90">{card.label}</p>
        <p className="mt-1 text-3xl font-bold">{card.price}</p>
        <p className="mt-1 text-lg">{card.title}</p>
        <GradientButton className="mt-5" innerClassName="px-8 py-3">
          Get Started
        </GradientButton>
      </div>
    </div>
  );
}

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const cards = carouselCards;

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Static featured card */}
          <ShowcaseCard card={cards[0]} />

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {cards.map((card) => (
                  <div key={card.title} className="w-full shrink-0">
                    <ShowcaseCard card={card} />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100/80 backdrop-blur transition hover:bg-neutral-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100/80 backdrop-blur transition hover:bg-neutral-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Pagination dots */}
            <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
