import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { InterestCaptureForm } from "./InterestCaptureForm";

export interface HeroSectionProps {
  announcementText: string;
  title: any[];
  description: string;
  ctaText: string;
  ctaButtonText: string;
  introVideoLink?: string;
  introVideoPlaceholderImgSrc: string;
  onInterestSubmission: (
    prevState: any,
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => {
      return <span className="block text-gray-900">{children}</span>;
    },
  },
  marks: {
    em: ({ children }) => <span className="text-primary block">{children}</span>,
  },
};

export function HeroSection({
  announcementText,
  title,
  description,
  ctaText,
  ctaButtonText,
  introVideoLink,
  introVideoPlaceholderImgSrc,
  onInterestSubmission,
}: HeroSectionProps) {
  return (
    <section className="relative left-0 right-0 bg-white" id="hero-section">
      <div className="absolute h-[784px] w-full overflow-hidden">
        <div aria-hidden="true" className="hidden lg:absolute lg:inset-0 lg:block">
          <svg
            fill="none"
            width={640}
            height={784}
            viewBox="0 0 640 784"
            className="absolute left-1/2 top-0 -translate-y-16 translate-x-64 transform"
          >
            <defs>
              <pattern
                x={118}
                y={0}
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  fill="currentColor"
                  width={4}
                  height={4}
                  className="text-gray-200"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              fill="currentColor"
              width={640}
              height={640}
              className="text-gray-50"
            />
            <rect
              x={118}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
              width={404}
              height={784}
            />
          </svg>
        </div>
      </div>

      <div className="relative flex justify-center pb-8 pt-6 sm:pb-24 lg:pb-48">
        <main className="mx-auto mt-16 px-6 sm:mt-24 md:max-w-7xl lg:mt-32">
          <div className=" lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
                  {announcementText}
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <PortableText
                    value={title}
                    components={portableTextComponents}
                    onMissingComponent={false}
                  />
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {description}
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <InterestCaptureForm
                  ctaText={ctaText}
                  ctaButtonText={ctaButtonText}
                  onInterestSubmission={onInterestSubmission}
                />
              </div>
            </div>
            <div className="relative mt-12 w-full sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                fill="none"
                width="100%"
                height="250"
                viewBox="0 0 640 784"
                aria-hidden="true"
                className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-10 scale-75 transform sm:scale-100 lg:hidden"
              >
                <defs>
                  <pattern
                    x={118}
                    y={0}
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-gray-200"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  fill="currentColor"
                  width={640}
                  height={640}
                  className="text-gray-50"
                />
                <rect
                  x={118}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  width={404}
                  height={784}
                />
              </svg>

              <div className="relative mx-auto w-full overflow-hidden rounded-lg shadow-lg lg:max-w-md">
                {introVideoLink ? (
                  <Link
                    href={introVideoLink}
                    target="_blank"
                    type="button"
                    className="focus:ring-primary relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    <span className="sr-only">Watch our video to learn more</span>
                    <Image
                      alt=""
                      src={introVideoPlaceholderImgSrc}
                      className="w-full"
                      height={500}
                      width={700}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex h-full w-full items-center justify-center"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 84 84"
                        className="text-primary h-20 w-20"
                      >
                        <circle r={42} cx={42} cy={42} fill="white" opacity="0.9" />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                      </svg>
                    </span>
                  </Link>
                ) : (
                  <Image
                    alt=""
                    src={introVideoPlaceholderImgSrc}
                    className="w-full"
                    height={500}
                    width={700}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
