"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, PanelTop, Menu } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { Sheet, SheetTrigger, SheetContent } from "@repo/ui";

interface Props {
  data: any;
}

const Nav = ({ data }: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const navPlaceholderRef = useRef(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsSticky(true);
      return;
    }

    const navbar: any = navRef.current;
    const navbarPlaceholder: any = navPlaceholderRef.current;
    const navbarHeight = navbar.offsetHeight;
    const initialNavbarTop =
      navbar.getBoundingClientRect().top + window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > initialNavbarTop) {
        if (!isSticky) {
          setIsSticky(true);
          navbarPlaceholder.style.height = `${navbarHeight}px`;
        }
      } else {
        if (isSticky) {
          setIsSticky(false);
          navbarPlaceholder.style.height = "0px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, isHomePage]);

  const navClasses = isHomePage
    ? `bg-foreground z-50 py-4 text-sm text-[#b99f8e] shadow-md transition-all duration-300
       ${isSticky ? "animate-slideDown fixed left-0 right-0 top-0" : ""}`
    : "bg-foreground z-50 py-4 text-sm text-[#b99f8e] shadow-md fixed left-0 right-0 top-0";

  return (
    <>
      {isHomePage && <div ref={navPlaceholderRef} />}
      <nav ref={navRef} className={navClasses}>
        {/* Desktop Navigation */}
        <div className="hidden grid-cols-5 items-center gap-4 px-10 lg:grid">
          <div className="flex gap-2 justify-self-start text-white">
            <a
              href="#"
              className="bg-muted-foreground inline-block rounded-full p-2"
            >
              <PanelTop className="h-4 w-4" />
            </a>

            {data?.contact?.email && (
              <a
                href={`mailto:${data?.contact?.email}`}
                className="bg-muted-foreground inline-block rounded-full p-2"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}

            {data?.contact?.social?.facebook && (
              <a
                href={data?.contact?.social?.facebook}
                className="bg-muted-foreground inline-block rounded-full p-2"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
            )}
          </div>
          <div className="flex gap-3 justify-self-end">
            <Link href="/" className="text-wrap text-center">
              HOME
            </Link>
            <Link href="/floorplans" className="text-wrap text-center">
              FLOOR PLANS
            </Link>
            <Link href="/photos" className="text-wrap text-center">
              PHOTOS & TOUR
            </Link>
          </div>
          <div className="justify-self-center">
            <Image
              src="https://medialibrarycfo.entrata.com/3282/MLv3/9/36/2023/01/26/125046/63d2d9960e7742.32313398214.png"
              width={150}
              height={150}
              alt="Logo"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-self-start">
            <Link href="/amenities">AMENITIES</Link>
            <Link href="/directions">DIRECTIONS</Link>
            <Link href="faq">FAQS</Link>
          </div>
          <div className="flex gap-3 justify-self-end">
            <Link href="/contact">CONTACT US</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between px-4 lg:hidden">
          <Link href="/">
            <Image
              src="https://medialibrarycfo.entrata.com/3282/MLv3/9/36/2023/01/26/125046/63d2d9960e7742.32313398214.png"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
          <div className="flex items-center gap-5">
            <div className="flex gap-3 text-white">
              <a href="#" className="inline-block rounded-full">
                <PanelTop className="h-4 w-4" />
              </a>
              <a href="#" className="inline-block rounded-full">
                <Mail className="h-4 w-4" />
              </a>

              {data?.contact?.email && (
                <a
                  href={`mailto:${data?.contact?.email}`}
                  className="inline-block rounded-full"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}

              {data?.contact?.social?.facebook && (
                <a
                  href={data?.contact?.social?.facebook}
                  className="inline-block rounded-full"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
              )}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-foreground border-foreground w-[300px] text-[#b3a083] sm:w-[400px]"
              >
                <div className="mt-6 flex flex-col items-end gap-4">
                  <Link href="/" className="text-lg">
                    HOME
                  </Link>
                  <Link href="/floorplans" className="text-lg">
                    FLOOR PLANS
                  </Link>
                  <Link href="/photos" className="text-lg">
                    PHOTOS & TOUR
                  </Link>
                  <Link href="/amenities" className="text-lg">
                    AMENITIES
                  </Link>
                  <Link href="/directions" className="text-lg">
                    DIRECTIONS
                  </Link>
                  <Link href="faq" className="text-lg">
                    FAQS
                  </Link>
                  <Link href="/contact" className="text-lg">
                    CONTACT US
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
