import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="1">
            <AccordionTrigger>Is this safe?</AccordionTrigger>
            <AccordionContent>
              Landing copy: we don’t store passwords, we don’t do auto-actions. (Real app must enforce this.)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Do you store my data?</AccordionTrigger>
            <AccordionContent>
              For landing: session-only. If you build backend later, implement delete policy + transparent docs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Is it affiliated with Instagram?</AccordionTrigger>
            <AccordionContent>
              No—include a disclaimer. Use “Instagram” as descriptive reference only.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
