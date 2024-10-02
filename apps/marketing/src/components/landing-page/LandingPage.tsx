import Link from "next/link";
import dataNotFoundBackgroundImage from "../../images/background-auth.jpg";
import call2ActionBackgroundImage from "../../images/background-call-to-action.jpg";
import faqsBackgroundImage from "../../images/background-faqs.jpg";
import primaryFeaturesBackgroundImage from "../../images/background-features.jpg";
import { Header, Footer } from "../index";
import { Logo } from "../logo/Logo";
import { ResourceCardData } from "../resource-card/ResourceCard";
import { SlimLayout } from "../slim-layout/SlimLayout";
import { CallToActionProps, CallToAction } from "./call-to-action/CallToAction";
import { FaqsProps, Faqs, Faq } from "./faqs/Faqs";
import { HeroProps, Hero, ClientInfo } from "./hero/Hero";
import { PricingProps, Pricing } from "./pricing/Pricing";
import {
  PrimaryFeaturesProps,
  PrimaryFeatures,
} from "./primary-features/PrimaryFeatures";
import {
  ResourcePreviewProps,
  ResourcePreview,
} from "./resource-preview/ResourcePreview";
import {
  SecondaryFeatureProps,
  SecondaryFeatureInfo,
  SecondaryFeatures,
} from "./secondary-features/SecondaryFeatures";
import { formatDateTime } from "../../app/utils/formatDateTime";

export interface LandingPageData {
  heroSection: Omit<HeroProps, "clients"> & {
    clients: {
      name: string;
      logoUrl: string;
    }[];
  };
  primaryFeaturesSection: Omit<
    PrimaryFeaturesProps,
    "backgroundImage features"
  > & {
    features: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  secondaryFeaturesSection: Omit<SecondaryFeatureProps, "features"> & {
    features: (Omit<SecondaryFeatureInfo, "image icon"> & {
      image: string;
      iconImage: string;
    })[];
  };
  ctaSection: Omit<CallToActionProps, "backgroundImage">;
  resourcesSection: Omit<ResourcePreviewProps, "posts"> & {
    resources: Omit<ResourceCardData, "categoryLink" | "resourceLink">[];
  };
  pricingSection: PricingProps;
  faqsSection: Omit<FaqsProps, "backgroundImage" | "faqs"> & {
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

function convertDataInto2dArray<T>(
  data: T[],
  rowCount: number,
  colCount: number
): T[][] {
  if (!data || data.length < rowCount * colCount) {
    return [];
  }

  const result: T[][] = [];

  // We require [rowCount] rows with [colCount] items in each
  for (let i = 0; i < rowCount; i++) {
    const subArray: T[] = [];

    for (let j = colCount * i; j < colCount * i + colCount; j++) {
      subArray.push(data[j] as any);
    }

    if (subArray.length > 0) {
      result.push(subArray);
    }
  }

  return result;
}

export function LandingPage({ data }: { data: LandingPageData }) {
  if (!data) {
    return (
      <SlimLayout backgroundImage={dataNotFoundBackgroundImage}>
        <div className="flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <p className="mt-20 text-sm font-medium text-gray-700">500</p>
        <h1 className="mt-3 text-lg font-semibold text-gray-900">
          Data not found.
        </h1>
        <p className="mt-3 text-sm text-gray-700">
          Sorry, we are unable to fetch the data at the moment.
        </p>
      </SlimLayout>
    );
  }

  try {
    return (
      <>
        <Header />
        <main className="mt-20">
          <Hero
            clients={convertDataInto2dArray<ClientInfo>(
              data.heroSection.clients,
              2,
              3
            )}
            title={data.heroSection.title}
            subtitle={data.heroSection.subtitle}
            primaryActionButtonText={data.heroSection.primaryActionButtonText}
            primaryActionButtonLink={data.heroSection.primaryActionButtonLink}
            secondaryActionButtonText={
              data.heroSection.secondaryActionButtonText
            }
            secondaryActionButtonLink={
              data.heroSection.secondaryActionButtonLink
            }
            trustStatementText={data.heroSection.trustStatementText}
            secondaryActionButtonIcon={
              data.heroSection.secondaryActionButtonIcon
            }
          />
          <PrimaryFeatures
            title={data.primaryFeaturesSection.title}
            subtitle={data.primaryFeaturesSection.subtitle}
            features={data.primaryFeaturesSection.features}
            backgroundImage={primaryFeaturesBackgroundImage}
          />
          <SecondaryFeatures
            title={data.secondaryFeaturesSection.title}
            subtitle={data.secondaryFeaturesSection.subtitle}
            features={data.secondaryFeaturesSection.features}
          />
          <CallToAction
            backgroundImage={call2ActionBackgroundImage}
            title={data.ctaSection.title}
            subtitle={data.ctaSection.subtitle}
            actionButtonText={data.ctaSection.actionButtonText}
            actionButtonLink={data.ctaSection.actionButtonLink}
          />
          <ResourcePreview
            title={data.resourcesSection.title}
            subtitle={data.resourcesSection.subtitle}
            posts={data.resourcesSection.resources.map((resource) => ({
              ...resource,
              publishedAt: formatDateTime({
                dateTime: resource.publishedAt,
                format: "MMMM d, yyyy",
              }),
              categoryLink: `/resources?category=${resource.category.name}`,
              resourceLink: `/resources/${resource.category.name}/${resource.slug}`,
            }))}
          />
          <Pricing
            plans={data.pricingSection.plans}
            title={data.pricingSection.title}
            subtitle={data.pricingSection.subtitle}
            ctaBasePath={data.pricingSection.ctaBasePath}
          />

          <Faqs
            title={data.faqsSection.title}
            subtitle={data.faqsSection.subtitle}
            faqs={convertDataInto2dArray<Faq>(data.faqsSection.faqs, 3, 3)}
            backgroundImage={faqsBackgroundImage}
          />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    return (
      <SlimLayout backgroundImage={dataNotFoundBackgroundImage}>
        <div className="flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <p className="mt-20 text-sm font-medium text-gray-700">500</p>
        <h1 className="mt-3 text-lg font-semibold text-gray-900">
          Invalid Data.
        </h1>
        <p className="mt-3 text-sm text-gray-700">
          Data received is not valid.
        </p>
      </SlimLayout>
    );
  }
}

export default LandingPage;
