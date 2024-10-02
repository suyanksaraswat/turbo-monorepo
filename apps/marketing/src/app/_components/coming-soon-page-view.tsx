import { SanityDocument } from "next-sanity";
import { ComingSoonLandingPage, ComingSoonLandingPageProps } from "../../components";
import { sanityFetch } from "../../sanity/client";
import { submitInterest } from "../actions/submit-interest";
import { getBootstrapData } from "../posthog/utils/bootstrap";

const DATA_QUERY = `*[_type == 'cSLandingPage' && isActive == true] | order(_updatedAt desc)[0] {
  heroSection{announcementText, title, description, ctaText, ctaButtonText, introVideoLink, 'introVideoPlaceholderImgSrc': introVideoPlaceholderImg.asset->url}, 
  featuresSection{features[]{materialIcon, title, description, imgAlt, 'imgSrc': feature->image.asset->url}},
  ctaSection{title, description, primaryCtaText, primaryCtaLink},
  teamSection{title, description, teamMembers[]->{name, role, xUrl, linkedinUrl, 'imgSrc':img.asset->url}},
}`;

const EXPERIMENTAL_DATA_QUERY = `*[_type == 'cSLandingPage' && isExperimental == true] | order(_updatedAt desc)[0] {
  heroSection{announcementText, title, description, ctaText, ctaButtonText, introVideoLink, 'introVideoPlaceholderImgSrc': introVideoPlaceholderImg.asset->url}, 
  featuresSection{features[]{materialIcon, title, description, imgAlt, 'imgSrc': feature->image.asset->url}},
  ctaSection{title, description, primaryCtaText, primaryCtaLink},
  teamSection{title, description, teamMembers[]->{name, role, xUrl, linkedinUrl, 'imgSrc':img.asset->url}},
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
  })) as unknown as ComingSoonLandingPageProps;

  if (data === null && query === EXPERIMENTAL_DATA_QUERY) {
    data = (await sanityFetch<SanityDocument>({
      query: DATA_QUERY,
    })) as unknown as ComingSoonLandingPageProps;
  }

  return data;
}

export async function ComingSoonPageView() {
  const data = await getSanityData();

  data.heroSection.onInterestSubmission = submitInterest;

  return (
    <ComingSoonLandingPage
      heroSection={data.heroSection}
      ctaSection={data.ctaSection}
      featuresSection={data.featuresSection}
      teamSection={data.teamSection}
    />
  );
}
