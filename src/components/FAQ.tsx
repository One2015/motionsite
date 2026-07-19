import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the GLP-1 program work?",
    a: "After a quick online visit, a licensed provider reviews your health history and, if appropriate, prescribes a compounded GLP-1 medication. Your medication ships directly to your door, and your care team supports you every step of the way.",
  },
  {
    q: "Do I need insurance to get started?",
    a: "No. Our program is entirely cash-pay with one transparent monthly price. There are no insurance claims, prior authorizations, or surprise bills to deal with.",
  },
  {
    q: "What medications are available?",
    a: "We offer compounded Semaglutide and Tirzepatide, along with a range of supportive supplements. Your provider will recommend the option best suited to your goals and medical history.",
  },
  {
    q: "Is the price really guaranteed?",
    a: "Yes. You pay the same flat monthly rate no matter your dose. As your provider adjusts your treatment over time, your price stays exactly the same.",
  },
  {
    q: "What's included in my plan?",
    a: "Your plan includes provider visits, your prescribed medication, all supplies, free shipping, and unlimited messaging with your care team — bundled into one simple monthly membership.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-3xl border-none bg-white px-14 py-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]"
            >
              <AccordionTrigger className="text-2xl font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
