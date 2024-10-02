"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@repo/ui";

export interface FlyoutMenuProps {
  title: string;
  options: {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
  }[];
  cta?: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

export function FlyoutMenu({ title, options, cta = [] }: FlyoutMenuProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <div
        className="flex cursor-pointer items-center gap-x-1 leading-6 outline-none"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </div>

      <div
        className={cn(
          "absolute -left-8 top-full overflow-hidden pt-3",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="z-10 w-screen max-w-md rounded-3xl border border-solid border-gray-900/5 bg-white overflow-auto">
          <div className="p-4">
            {options.map((item) => (
              <div
                key={item.title}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <div
                    className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="flex-auto">
                  <Link href={item.href} className="block font-semibold text-gray-900">
                    {item.title}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-between flex divide-x divide-gray-900/5 bg-gray-50">
            {cta &&
              cta.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <div className="h-5 w-5 flex-none text-gray-400" aria-hidden="true">
                    {item.icon}
                  </div>

                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
