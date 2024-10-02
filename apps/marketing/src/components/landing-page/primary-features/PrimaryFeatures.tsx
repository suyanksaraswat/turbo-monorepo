"use client";

import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { Container } from "../..";
import { cn } from "@repo/ui";

export interface PrimaryFeaturesProps {
  title: string;
  subtitle: string;
  features: PrimaryFeatureInfo[];
  backgroundImage: ImageProps["src"];
}

export interface PrimaryFeatureInfo {
  title: string;
  description: string;
  image: ImageProps["src"];
}

export function PrimaryFeatures(props: PrimaryFeaturesProps) {
  const [tabOrientation, setTabOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={props.backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            {props.title}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {props.subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <>
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <div className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                {props.features.map((feature, featureIndex) => (
                  <div
                    key={feature.title}
                    className={cn(
                      "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                      selectedIndex === featureIndex
                        ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                        : "hover:bg-white/10 lg:hover:bg-white/5"
                    )}
                    onClick={() => setSelectedIndex(featureIndex)}
                  >
                    <h3>
                      <div
                        className={cn(
                          "font-display ui-not-focus-visible:outline-none text-lg",
                          selectedIndex === featureIndex
                            ? "text-blue-600 lg:text-white"
                            : "text-blue-100 hover:text-white lg:text-white"
                        )}
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        {feature.title}
                      </div>
                    </h3>
                    <p
                      className={cn(
                        "mt-2 hidden text-sm lg:block",
                        selectedIndex === featureIndex
                          ? "text-white"
                          : "text-blue-100 group-hover:text-white"
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div key={props.features?.[selectedIndex]?.title}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {props.features?.[selectedIndex]?.description}
                  </p>
                </div>
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <Image
                    className="w-full object-contain"
                    src={props.features?.[selectedIndex]?.image || ""}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                    width={1085}
                    height={1085}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </Container>
    </section>
  );
}
