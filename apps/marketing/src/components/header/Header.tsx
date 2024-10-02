"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  CalendarDaysIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PaperClipIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleStackIcon,
  SquaresPlusIcon,
  SwatchIcon,
  TableCellsIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@repo/ui";
import { cn } from "@repo/ui";
import { Logo } from "../logo/Logo";
import { AccordianMenu, AccordianMenuProps } from "../menu/AccordianMenu";
import { FlyoutMenu, FlyoutMenuProps } from "../menu/FlyoutMenu";
import { NavLink } from "../navlink/NavLink";

interface HeaderItem {
  title: string;
  href: string;
}

type FlyoutMenuItem = FlyoutMenuProps;
type NavItem = HeaderItem | FlyoutMenuItem;

function containsSubOptions(item: NavItem) {
  return (item as FlyoutMenuItem).options !== undefined;
}

function MobileNavLink({
  href,
  children,
  onItemClick,
}: {
  href: string;
  children: React.ReactNode;
  onItemClick: () => void;
}) {
  return (
    <Link
      onClick={onItemClick}
      href={href}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}

function MobileNavIcon({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}>
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path
          d="M0 1H14M0 7H14M0 13H14"
          className={cn("origin-center transition", open && "scale-90 opacity-0")}
        />
        <path
          d="M2 2L12 12M12 2L2 12"
          className={cn("origin-center transition", !open && "scale-90 opacity-0")}
        />
      </svg>
    </button>
  );
}

function MobileNavigation({ navItems }: { navItems: (HeaderItem | FlyoutMenuItem)[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeDialog() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <MobileNavIcon open={mobileMenuOpen} onClick={() => setMobileMenuOpen((p) => !p)} />

      <div className={mobileMenuOpen ? "" : "hidden"}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 top-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 pt-5 shadow-lg sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo className="h-9 w-auto sm:h-10" />
            </Link>

            <button
              type="button"
              className="-m-4 rounded-md p-2.5 text-gray-700"
              onClick={closeDialog}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => {
                  if (containsSubOptions(item)) {
                    return (
                      <AccordianMenu
                        key={item.title}
                        {...(item as AccordianMenuProps)}
                        onItemClick={closeDialog}
                      />
                    );
                  }

                  return (
                    <MobileNavLink
                      key={item.title}
                      onItemClick={closeDialog}
                      href={(item as HeaderItem).href}
                    >
                      {item.title}
                    </MobileNavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const navItems: NavItem[] = [
  {
    title: "Product",
    options: [
      {
        title: "Leasing CRM",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: (
          <div>
            <TableCellsIcon />
          </div>
        ),
      },
      {
        title: "Digital Marketing",
        description: "Speak directly to your customers",
        href: "#",
        icon: (
          <div>
            <ComputerDesktopIcon />
          </div>
        ),
      },
      {
        title: "Prospect Scheduling",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: (
          <div>
            <CalendarDaysIcon />
          </div>
        ),
      },
      {
        title: "Listing Syndication",
        description: "Publish across multiple platforms with ease",
        href: "#",
        icon: (
          <div>
            <SwatchIcon />
          </div>
        ),
      },
      {
        title: "Tenant Screening",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: (
          <div>
            <FingerPrintIcon />
          </div>
        ),
      },
      {
        title: "Lease Application",
        description: "Simply process with user-friendly tools",
        href: "#",
        icon: (
          <div>
            <RectangleStackIcon />
          </div>
        ),
      },
      {
        title: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: (
          <div>
            <PaperClipIcon />
          </div>
        ),
      },
    ],
  },
  {
    title: "Resources",
    options: [
      {
        title: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: (
          <div>
            <ChartPieIcon />
          </div>
        ),
      },
      {
        title: "Engagement",
        description: "Speak directly to your customers",
        href: "#",
        icon: (
          <div>
            <CursorArrowRaysIcon />
          </div>
        ),
      },
      {
        title: "Security",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: (
          <div>
            <FingerPrintIcon />
          </div>
        ),
      },
      {
        title: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: (
          <div>
            <SquaresPlusIcon />
          </div>
        ),
      },
      {
        title: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: (
          <div>
            <ArrowPathIcon />
          </div>
        ),
      },
    ],
    cta: [
      {
        title: "Watch demo",
        href: "#",
        icon: (
          <div>
            <PlayCircleIcon />
          </div>
        ),
      },
      {
        title: "Contact sales",
        href: "#",
        icon: (
          <div>
            <PhoneIcon />
          </div>
        ),
      },
    ],
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "FAQs",
    href: "/#faq",
  },
];

export function Header() {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // useful when the page reloads

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 py-5",
        showShadow && "bg-white shadow"
      )}
    >
      <div className="px-6 ">
        <nav className="relative z-50 flex justify-between gap-8">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-9 w-auto sm:h-10" />
            </Link>

            <div className="hidden md:flex md:gap-x-6">
              <div className="flex md:gap-x-6">
                {navItems.map((item) => {
                  if (containsSubOptions(item)) {
                    const flyoutItem = item as FlyoutMenuItem;
                    return <FlyoutMenu key={item.title} {...flyoutItem} />;
                  }

                  return (
                    <NavLink key={item.title} href={(item as HeaderItem).href}>
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Link href="/contact-sales">
              <Button variant="outline">Get Started</Button>
            </Link>
            <div className="md:hidden">
              <MobileNavigation navItems={navItems} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
