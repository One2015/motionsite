import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/GradientButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";

export default function ProductPage() {
  const { handle } = useParams();
  const product =
    products.find((p) => p.handle === handle) ?? products[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all meds
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-4 text-2xl">
              <span className="font-semibold">{product.price}</span>{" "}
              <span className="text-muted-foreground">per month</span>
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Prescribed by a licensed provider",
                "One flat monthly price, any dose",
                "Free discreet shipping",
                "Unlimited care team messaging",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">Get started</Button>
              <GradientButton innerClassName="px-8 py-3">
                See if you&apos;re eligible
              </GradientButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
