import { notFound } from "next/navigation";
import { SanityDocument } from "next-sanity";
import { LandingPage, LandingPageData } from "../../../../components";
import { sanityFetch } from "../../../../sanity/client";

export default async function Preview({ params }: { params: { documentId: string } }) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const DATA_QUERY = `*[_type == 'landingPage' && _id == '${params.documentId}'] | order(_updatedAt desc)[0]`;

  const data = (await sanityFetch<SanityDocument>({
    query: DATA_QUERY,
  })) as unknown as LandingPageData;

  return <LandingPage data={data} />;
}
