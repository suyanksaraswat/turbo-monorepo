import React from "react";
import { SanityDocument } from "next-sanity";
import {
  Header,
  Footer,
  ResourceCard,
  ResourceCardData,
  Container,
} from "../../../../components";
import { sanityFetch } from "../../../../sanity/client";
import { CategoryDropdown } from "./_components/CategoryDropdown";
import { formatDateTime } from "../../../../app/utils/formatDateTime";

async function getCategories() {
  const data = (await sanityFetch<SanityDocument>({
    query: `*[_type == 'category'].name`,
  })) as unknown as string[];

  return data;
}

async function getResources(category?: string): Promise<ResourceCardData[]> {
  let query: string;

  if (category) {
    query = `*[_type == 'post' && category->name match "${category}"]{title, 'slug': slug.current, 'coverImage': {'alt': coverImage.alt, 'url': coverImage.asset->url}, excerpt, publishedAt, category->{name}} | order(publishedAt desc)`;
  } else {
    query = `*[_type == 'post']{title, 'slug': slug.current, 'coverImage': {'alt': coverImage.alt, 'url': coverImage.asset->url}, excerpt, publishedAt, category->{name}} | order(publishedAt desc)`;
  }

  const data = (await sanityFetch<SanityDocument>({
    query,
  })) as unknown as ResourceCardData[];

  return data;
}

async function ResourcesPage({
  searchParams,
}: {
  searchParams?: {
    category?: string;
  };
}) {
  const category = searchParams?.category;
  const categories = await getCategories();
  const resources = await getResources(category);

  return (
    <>
      <Header />
      <main className="mb-16 mt-32">
        <Container>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-5xl">
              Resources
            </h2>

            <CategoryDropdown
              options={categories}
              selectedOption={searchParams?.category}
            />
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {resources.map((post) => (
              <ResourceCard
                key={post.slug}
                post={{
                  ...post,
                  publishedAt: formatDateTime({
                    dateTime: post.publishedAt,
                    format: "MMMM d, yyyy",
                  }),
                  categoryLink: `/resources?category=${post.category.name}`,
                  resourceLink: `/resources/${post.category.name}/${post.slug}`,
                }}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default ResourcesPage;
