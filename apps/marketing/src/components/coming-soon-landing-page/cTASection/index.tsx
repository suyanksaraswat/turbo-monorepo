import React from "react";
import Link from "next/link";

export interface CTASectionProps {
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
}

export function CTASection({
  title,
  description,
  primaryCtaText,
  primaryCtaLink,
}: CTASectionProps) {
  return (
    <section className="bg-secondary mb-16" id="cta-section">
      <div className="px-6 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={primaryCtaLink}
              className="bg-primary hover:bg-primary/90 focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {primaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
