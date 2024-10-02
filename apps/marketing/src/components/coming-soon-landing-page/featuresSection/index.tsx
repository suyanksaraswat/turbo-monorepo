import React from "react";
import Link from "next/link";

export interface FeaturesSectionProps {
  features: Feature[];
}

interface Feature {
  materialIcon: string;
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
}

function FeatureInfo({ feature }: { feature: Feature }) {
  return (
    <>
      <div>
        <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl">
          <span className="material-symbols-outlined text-white">
            {feature.materialIcon}
          </span>
        </span>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {feature.title}
        </h2>
        <p className="mt-4 text-lg text-gray-500">{feature.description}</p>
      </div>
    </>
  );
}

function Left2Right({ feature }: { feature: Feature }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="mb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
          <FeatureInfo feature={feature} />
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              alt={feature.imgAlt}
              src={feature.imgSrc}
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightToLeft({ feature }: { feature: Feature }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="mb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
          <FeatureInfo feature={feature} />
        </div>
        <div className="mt-12  sm:mt-16 lg:col-start-1 lg:mt-0">
          <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              alt={feature.imgAlt}
              src={feature.imgSrc}
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="relative bg-white pb-8 pt-16" id="features-section">
      {features.map((feature, index) => {
        if (index % 2 === 0) {
          return <Left2Right feature={feature} key={feature.title} />;
        } else {
          return <RightToLeft feature={feature} key={feature.title} />;
        }
      })}
    </section>
  );
}
