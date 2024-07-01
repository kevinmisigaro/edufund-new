import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../utils";
export function Faqs() {
  return (
    <section className="">
      <h1 className="text-center font-kingshare text-3xl mt-4 md:mt-8">Frequently asked questions</h1>
      <Accordion
        type="single"
        collapsible
        className="w-[90%] mx-[5%] md:w-[70%] md:mx-[14%] md:px-[1%] my-8 backdrop-blur-lg bg-blue-100/5"
      >
        {faqs.map((faq) => (
          <AccordionItem value={faq.question} key={faq.id}>
            <AccordionTrigger className="text-start">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
