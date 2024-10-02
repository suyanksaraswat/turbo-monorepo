import { notFound } from "next/navigation";
import { SanityDocument } from "next-sanity";
import {
  ComingSoonLandingPage,
  ComingSoonLandingPageProps,
} from "../../../components";
import { sanityFetch } from "../../../sanity/client";
import { submitInterest } from "../../actions/submit-interest";

export default async function PreviewComingSoonPage({
  params,
}: {
  params: { documentId: string };
}) {
  if (process.env.VERCEL_ENV === "production") {
    notFound();
  }

  const DATA_QUERY = `*[_type == 'cSLandingPage' && _id == '${params.documentId}'] | order(_updatedAt desc)[0] {
  heroSection{announcementText, title, description, ctaText, ctaButtonText, introVideoLink, 'introVideoPlaceholderImgSrc': introVideoPlaceholderImg.asset->url}, 
  featuresSection{features[]{materialIcon, title, description, imgAlt, 'imgSrc': feature->image.asset->url}},
  ctaSection{title, description, primaryCtaText, primaryCtaLink},
  teamSection{title, description, teamMembers[]->{name, role, xUrl, linkedinUrl, 'imgSrc':img.asset->url}},
}`;

  const data = (await sanityFetch<SanityDocument>({
    query: DATA_QUERY,
  })) as unknown as ComingSoonLandingPageProps;

  if (!data) {
    notFound();
  }

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
