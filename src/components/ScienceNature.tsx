import { Rabbit, TreePine, Leaf, FlaskConical, Atom, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/GradientButton";

const badges = [
  { icon: Rabbit, label: ["Cruelty", "Free"] },
  { icon: TreePine, label: ["Naturally", "Sourced"] },
  { icon: Leaf, label: ["Plant", "Based"] },
  { icon: FlaskConical, label: ["Lab", "Tested"] },
  { icon: Atom, label: ["Science", "Backed"] },
  { icon: Wheat, label: ["Gluten", "Free"] },
];

export default function ScienceNature() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Discover the harmony of science and nature.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">Get started</Button>
            <GradientButton innerClassName="px-8 py-3">
              Learn more
            </GradientButton>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label.join(" ")}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[2px_4px_12px_rgba(0,0,0,0.08)]"
            >
              <Icon className="h-20 w-20" strokeWidth={1.5} />
              <p className="mt-4 text-sm font-medium leading-tight">
                {label.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
