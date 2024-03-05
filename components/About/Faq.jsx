import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const accordionData = [
    {
      id: 'item-1',
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      id: 'item-2',
      question: 'Is it styled?',
      answer: 'Yes. It comes with default styles that match the other components\' aesthetic.',
    },
    {
      id: 'item-3',
      question: 'Is it animated?',
      answer: 'Yes. It\'s animated by default, but you can disable it if you prefer.',
    },
  ];


const Faq = () => {
  return (
  <div class="p-42 w-full sm:w-3/4 ">
    <div className="text-center text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold">
    Frequently Asked Questions
    </div>
    <Accordion type="single" collapsible className="w-full accordian">
        {accordionData.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
        ))}
    </Accordion>
  </div>

  );
};

export default Faq;
