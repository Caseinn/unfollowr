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
              You never enter your Instagram password here. You use the official data zip that comes from Instagram.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Do you store my data?</AccordionTrigger>
            <AccordionContent>
              The checker reads your export while you use it. If saving is ever added, it will be stated clearly first.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Is this affiliated with Instagram?</AccordionTrigger>
            <AccordionContent>
              No. Instagram is mentioned only to explain where your export comes from.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
