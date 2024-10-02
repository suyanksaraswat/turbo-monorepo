"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@repo/ui";

export interface AccordianMenuProps {
  title: string;
  options: {
    title: string;
    href: string;
  }[];
  onItemClick?: () => void;
}

export function AccordianMenu({ title, options, onItemClick }: AccordianMenuProps) {
  return (
    <>
      <Accordion type="single" collapsible className="-mx-3">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 !no-underline hover:bg-gray-50">
            {title}
          </AccordionTrigger>

          <AccordionContent>
            {options.map((item) => (
              <Link
                onClick={onItemClick}
                key={item.title}
                href={item.href}
                className="block rounded-lg py-1 pl-1 pr-3 text-gray-900 hover:bg-gray-50"
              >
                <Button
                  variant="ghost"
                  key={item.title}
                  className="!bg-transparent text-sm font-semibold leading-7"
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
