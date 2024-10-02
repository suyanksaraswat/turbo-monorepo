import { SanityDocument } from "next-sanity";
import { LandingPage, LandingPageData } from "../../components";
import { sanityFetch } from "../../sanity/client";
import { getBootstrapData } from "../posthog/utils/bootstrap";

const DATA_QUERY = `*[_type == 'landingPage' && isActive == true] | order(_updatedAt desc)[0] {
    heroSection{title, subtitle, primaryActionButtonText, primaryActionButtonLink, secondaryActionButtonText, secondaryActionButtonLink, 'secondaryActionButtonIcon': secondaryActionButtonIcon.asset->url, trustStatementText, clients[]{name, 'logoUrl': logo.asset->url}},
    primaryFeaturesSection{title, subtitle, features[]->{title, description, 'image': image.asset->url}},
    secondaryFeaturesSection{title, subtitle, features[]{'icon': iconImage.asset->url, summary, 'name': feature->title, 'description': feature->description, 'image': feature->image.asset->url}},
    ctaSection{title, subtitle, actionButtonText, actionButtonLink},
    resourcesSection{title, subtitle, resources[]->{title, 'slug': slug.current, 'coverImage':{'alt': coverImage.alt, 'url': coverImage.asset->url}, excerpt, publishedAt, category->{name}}},
    pricingSection{title, subtitle, plans[]->{name, description, price, featuresOffered}, ctaBasePath},
    faqsSection{title, subtitle, faqs[]->{question, answer}}
  }`;

const EXPERIMENTAL_DATA_QUERY = `*[_type == 'landingPage' && isExperimental == true] | order(_updatedAt desc)[0] {
    heroSection{title, subtitle, primaryActionButtonText, primaryActionButtonLink, secondaryActionButtonText, secondaryActionButtonLink, 'secondaryActionButtonIcon': secondaryActionButtonIcon.asset->url, trustStatementText, clients[]{name, 'logoUrl': logo.asset->url}},
    primaryFeaturesSection{title, subtitle, features[]->{title, description, 'image': image.asset->url}},
    secondaryFeaturesSection{title, subtitle, features[]{'icon': iconImage.asset->url, summary, 'name': feature->title, 'description': feature->description, 'image': feature->image.asset->url}},
    ctaSection{title, subtitle, actionButtonText, actionButtonLink},
    resourcesSection{title, subtitle, resources[]->{title, 'slug': slug.current, 'coverImage':{'alt': coverImage.alt, 'url': coverImage.asset->url}, excerpt, publishedAt, category->{name}}},
    pricingSection{title, subtitle, plans[]->{name, description, price, featuresOffered}, ctaBasePath},
    faqsSection{title, subtitle, faqs[]->{question, answer}}
  }`;

async function getSanityData() {
  const bootstrapData = await getBootstrapData();
  const contentType = bootstrapData.featureFlags["marketing-website-content-type"];

  let query: string = DATA_QUERY;

  if (contentType === "experimental") {
    query = EXPERIMENTAL_DATA_QUERY;
  }

  let data = (await sanityFetch<SanityDocument>({
    query,
  })) as unknown as LandingPageData;

  if (data === null && query === EXPERIMENTAL_DATA_QUERY) {
    data = (await sanityFetch<SanityDocument>({
      query: DATA_QUERY,
    })) as unknown as LandingPageData;
  }

  return data;
}

export async function LandingPageView() {
  const data = await getSanityData();

  return <LandingPage data={data} />;
}
