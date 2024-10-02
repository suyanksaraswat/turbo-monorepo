import React from "react";
import Link from "next/link";
import { Container, Logo } from "../../";

interface SocialProfile {
  icon: React.ReactNode;
  ariaLabel: string;
  href: string;
}

function SocialConnect({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="group" aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

const socialProfiles: SocialProfile[] = [
  {
    icon: (
      <svg
        className="h-6 w-6 fill-slate-700 group-hover:fill-slate-900"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
      </svg>
    ),
    ariaLabel: "X",
    href: "https://x.com/dealmeridian",
  },
  {
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="h-6 w-6 fill-slate-700 group-hover:fill-slate-900"
      >
        <path
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
    ),
    ariaLabel: "Linkedin",
    href: "https://www.linkedin.com/company/dealmeridian",
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
        </div>
        <div className="flex flex-col items-center border-t border-slate-600/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {socialProfiles.map((item) => (
              <SocialConnect
                key={item.ariaLabel}
                ariaLabel={item.ariaLabel}
                href={item.href}
              >
                {item.icon}
              </SocialConnect>
            ))}
          </div>

          <div className="flex flex-col items-center text-sm text-slate-700 sm:items-start">
            <p className="mt-6 sm:mt-0">
              &copy; {new Date().getFullYear()} Deal Meridian. All rights
              reserved.
            </p>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
