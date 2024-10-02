"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@repo/ui";
import { Logo } from "../../index";

const navItems = [];

export function Header() {
  const [hideShadow, setHideShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideShadow(false);
      } else {
        setHideShadow(true);
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
        "bg-background fixed left-0 right-0 top-0  z-40 py-5 shadow",
        hideShadow && "bg-transparent shadow-none"
      )}
    >
      <div className="flex items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Logo className="h-9 w-auto sm:h-10" />
          </Link>
        </div>
      </div>
    </header>
  );
}
