import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./ProductAccordion.css"; // optional if you want extra styles

const items = [
  {
    id: "item-1",
    title: "Smartwatches",
    content: "Explore smartwatches that track fitness, health, and keep you connected in style."
  },
  {
    id: "item-2",
    title: "Wireless Earbuds",
    content: "Experience immersive sound with our top-notch wireless earbuds, built for comfort."
  },
  {
    id: "item-3",
    title: "Sustainable Clothing",
    content: "Our eco-friendly clothing line blends fashion with sustainability."
  }
];

const ProductAccordion = () => (
  <Accordion.Root
    type="single"
    defaultValue="item-1"
    collapsible
    className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4"
  >
    {items.map(({ id, title, content }) => (
      <Accordion.Item
        value={id}
        key={id}
        className="border-b last:border-none"
      >
        <Accordion.Header className="flex">
    <Accordion.Trigger className="flex justify-between items-center  py-4 text-lg font-medium text-gray-800 hover:text-black transition flex-wrap gap-2 text-left">

            {title}
            <ChevronDownIcon
              className="AccordionChevron h-5 w-5 text-gray-500 transition-transform duration-300"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-gray-600 pb-4 px-1">
          {content}
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

export default ProductAccordion;

