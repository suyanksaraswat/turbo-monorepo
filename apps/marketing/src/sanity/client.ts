import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient, type QueryParams } from "next-sanity";
import "server-only";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: process.env.SANITY_DATASET ?? "",
  apiVersion: "2024-01-01",
  useCdn: false,

  token: process.env.SANITY_ACCESS_TOKEN,
  perspective: process.env.VERCEL_ENV === "production" ? "published" : "previewDrafts",
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.VERCEL_ENV === "production" ? 3600 : 30,
      tags,
    },
  });
}

const builder = imageUrlBuilder(client);

export function getUrlFor(source: SanityImageSource): string {
  return builder.image(source).toString();
}
