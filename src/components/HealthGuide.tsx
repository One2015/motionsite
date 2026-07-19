import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/GradientButton";
import { guides } from "@/lib/data";

export default function HealthGuide() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Your guide to health and wellness starts here.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">Explore articles</Button>
            <GradientButton innerClassName="px-8 py-3">
              Subscribe
            </GradientButton>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <div
              key={guide.category}
              className="flex flex-col rounded-3xl bg-white p-4 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]"
            >
              <img
                src={guide.image}
                alt={guide.category}
                className="h-48 w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <p className="mt-5 flex-1 px-2 text-muted-foreground">
                {guide.description}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center justify-between gap-2 self-start rounded-full border-2 border-zinc-900/[0.13] px-5 py-2.5 text-sm font-medium transition-colors hover:border-zinc-900/30"
              >
                {guide.category}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
