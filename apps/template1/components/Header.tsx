"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  data: any;
}

export default function Header({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-20 w-full">
      {data?.notification && (
        <section className="flex items-center justify-center bg-[#f4f4ef] py-3">
          {data?.notification}
        </section>
      )}

      <div className="flex h-14 items-center justify-between bg-black px-4 py-4 md:px-20">
        <div className="hidden items-center md:flex lg:block">
          <Link
            className="text-body1 text-white underline "
            href={`tel:${data?.contact?.phoneNumber}`}
          >
            {data?.contact?.phoneNumber}
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-5 md:flex">
          <Link
            href="/"
            className="text-body1 hover:text-primary cursor-pointer text-white"
          >
            HOME
          </Link>
          <Link
            href="/ameneties"
            className="text-body1 hover:text-primary cursor-pointer text-white"
          >
            AMENITIES
          </Link>
          <Link
            href="/photos"
            className="text-body1 hover:text-primary cursor-pointer text-white"
          >
            PHOTOS
          </Link>
          <Link
            href="availability"
            className="text-body1 hover:text-primary cursor-pointer text-white"
          >
            AVAILABILITY
          </Link>
          <Link
            href="/contact"
            className="text-body1 hover:text-primary cursor-pointer text-white"
          >
            CONTACT
          </Link>
        </nav>

        <div className="md:hidden">
          <div className="text-white focus:outline-none" onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
            <span className="sr-only">Toggle navigation</span>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-14 w-full bg-black p-4 text-white md:hidden ">
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-body1 hover:text-primary cursor-pointer border-0 border-b-[1px] border-b-gray-800 px-4 py-3 text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/ameneties"
                className="text-body1 hover:text-primary cursor-pointer border-0 border-b-[1px] border-b-gray-800 px-4 py-3 text-white"
                onClick={() => setIsOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="/photos"
                className="text-body1 hover:text-primary cursor-pointer border-0 border-b-[1px] border-b-gray-800 px-4 py-3 text-white"
                onClick={() => setIsOpen(false)}
              >
                Photos
              </Link>
              <Link
                href="availability"
                className="text-body1 hover:text-primary cursor-pointer border-0 border-b-[1px] border-b-gray-800 px-4 py-3 text-white"
                onClick={() => setIsOpen(false)}
              >
                Availability
              </Link>
              <Link
                href="/contact"
                className="text-body1 hover:text-primary cursor-pointer border-0 border-b-[1px] border-b-gray-800 px-4 py-3 text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        <div className="flex items-center gap-5">
          <div className="flex items-center lg:hidden">
            <Link
              className="text-body1 text-white underline"
              href="tel:(646) 813-2276"
            >
              <span className="material-symbols-outlined">call</span>
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <Link className="text-body1 text-white underline" href="#">
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>

          <Link
            className="text-body1 text-white underline "
            href="https://artemis.dealmeridian.com"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
