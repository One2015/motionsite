import { Link } from "react-router-dom";
import { GradientButton } from "@/components/GradientButton";
import { products } from "@/lib/data";

export default function ProductsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Our Meds
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Medication Made Affordable Without The Insurance
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.handle} className="flex flex-col">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">{product.title}</h3>
            <p className="mt-1 text-lg">
              <span className="font-semibold">{product.price}</span>{" "}
              <span className="text-muted-foreground">per month</span>
            </p>
            <Link
              to={`/product/${product.handle}`}
              className="mt-4 block"
            >
              <GradientButton fullWidth innerClassName="py-3">
                Get Started
              </GradientButton>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
