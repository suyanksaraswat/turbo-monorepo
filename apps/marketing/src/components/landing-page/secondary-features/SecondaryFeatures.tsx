"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@repo/ui";
import { Container } from "../..";

export interface SecondaryFeatureInfo {
  name: React.ReactNode;
  summary: string;
  description: string;
  image: ImageProps["src"];
  icon: ImageProps["src"];
}

export interface SecondaryFeatureProps {
  title: string;
  subtitle: string;
  features: Array<SecondaryFeatureInfo>;
}

type FeatureProps = Omit<SecondaryFeatureProps, "title" | "subtitle">;

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  feature: SecondaryFeatureInfo;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={cn(
          "w-9 rounded-lg",
          isActive ? "bg-blue-600" : "bg-slate-500"
        )}
      >
        <Image
          className="h-9 w-9 object-contain p-1"
          src={feature.icon}
          alt={feature.name + " icon"}
          width={36}
          height={36}
          unoptimized
        />
      </div>
      <h3
        className={cn(
          "mt-6 text-sm font-medium",
          isActive ? "text-blue-600" : "text-slate-600"
        )}
      >
        {feature.name}
      </h3>
      <p className="font-display mt-2 text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}

function FeaturesMobile({ features }: FeatureProps) {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full object-contain"
                src={feature.image}
                alt=""
                sizes="52.75rem"
                width={844}
                height={844}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop({ features }: FeatureProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="hidden lg:mt-20 lg:block">
      <>
        <div className="grid grid-cols-3 gap-x-8">
          {features.map((feature, featureIndex) => (
            <Feature
              key={feature.summary}
              feature={{
                ...feature,
                name: (
                  <div className="ui-not-focus-visible:outline-none">
                    <span className="absolute inset-0" />
                    {feature.name}
                  </div>
                ),
              }}
              isActive={featureIndex === selectedIndex}
              className="relative"
              onClick={() => setSelectedIndex(featureIndex)}
            />
          ))}
        </div>
        <div className="relative mt-20 overflow-hidden rounded-xl bg-slate-200 px-14 py-16 xl:px-16">
          <div className="-mx-5 flex">
            {features.map((feature, featureIndex) => (
              <div
                key={feature.summary}
                className={cn(
                  "ui-not-focus-visible:outline-none px-5 transition duration-500 ease-in-out",
                  featureIndex !== selectedIndex && "opacity-60"
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={featureIndex !== selectedIndex}
              >
                <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <Image
                    className="w-full object-contain"
                    src={feature.image}
                    alt=""
                    sizes="52.75rem"
                    width={844}
                    height={700}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/10" />
        </div>
      </>
    </div>
  );
}

export function SecondaryFeatures(props: SecondaryFeatureProps) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {props.subtitle}
          </p>
        </div>
        <FeaturesMobile features={props.features} />
        <FeaturesDesktop features={props.features} />
      </Container>
    </section>
  );
}
