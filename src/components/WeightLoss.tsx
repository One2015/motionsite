import { Calendar, Pill, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/GradientButton";
import { productImages } from "@/lib/data";

const bullets = [
  {
    icon: Calendar,
    title: "A plan built around you",
    text: "Your provider tailors your dose and schedule to your goals.",
  },
  {
    icon: Pill,
    title: "Medication that works",
    text: "Clinically-studied GLP-1s to curb appetite and cravings.",
  },
  {
    icon: CheckCircle,
    title: "Ongoing support",
    text: "Message your care team any time, adjust as you go.",
  },
];

export default function WeightLoss() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Lose weight with a plan made just for you.
            </h2>

            <div className="mt-10 space-y-6">
              {bullets.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">Get started</Button>
              <GradientButton innerClassName="px-8 py-3">
                See if you&apos;re eligible
              </GradientButton>
            </div>

            <p className="mt-6 max-w-md text-xs text-muted-foreground">
              Compounded medications are prepared for patients with a valid
              prescription. Results vary and are not guaranteed.
            </p>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={productImages[4]}
              alt="Personalized weight loss plan"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
