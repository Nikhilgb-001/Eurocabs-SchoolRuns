import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="px-8 py-8 max-w-screen-xl mx-auto flex items-center justify-center">
      <div className="w-full lg:w-2/3 lg:p-3">
        <h1 className="text-xl lg:text-3xl text-center font-semibold">Frequently Asked Questions</h1>
        <div className="p-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                I have lost something in one of your taxis, how do i reclaim my
                property?
              </AccordionTrigger>
              <AccordionContent>
                Call our office on 01462 600 700 to report your lost property.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                I have lost something in one of your taxis, how do i reclaim my
                property?
              </AccordionTrigger>
              <AccordionContent>
                Call our office on 01462 600 700 to report your lost property.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can you send me an invoice?</AccordionTrigger>
              <AccordionContent>
                Yes. Sign up on our website for an account, and you will receive
                an invoice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How will the driver meet me at the airport?
              </AccordionTrigger>
              <AccordionContent>
                Our driver will contact you on the mobile number you provide at
                the time of your booking. You can coordinate with him Or her to
                meet at the pickup and drop off point at no extra charge, Or You
                can request the driver to meet you at arrivals for an extra
                £8.00.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                I have a complaint, how do i contact management?
              </AccordionTrigger>
              <AccordionContent>
                For all complaints, kindly fill our complaints form located on
                our website, where our dedicated complaints department will
                promptly contact you to address and resolve your concerns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                I live in an area outside of Letchworth, Fairfield park, Baldock
                and Hitchin. can you provide taxi services to me?
              </AccordionTrigger>
              <AccordionContent>
                Local taxi services from villages outside Hitchin, Letchworth,
                Baldock or Royston are available at a fixed price either call
                01462 600 700 for a quote or book through our app.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
