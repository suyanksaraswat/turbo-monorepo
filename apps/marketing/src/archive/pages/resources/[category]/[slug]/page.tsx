import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  PortableText,
  PortableTextReactComponents,
  SanityDocument,
} from "next-sanity";
import {
  Header,
  Footer,
  ResourceCardData,
  VideoPlayer,
  Container,
} from "../../../../../components";
import { getUrlFor, sanityFetch } from "../../../../../sanity/client";
import { formatDateTime } from "../../../../../app/utils/formatDateTime";

type ResourceData = ResourceCardData & {
  content: any[];
};

async function getResourceData(slug: string): Promise<ResourceData> {
  const data = (await sanityFetch<SanityDocument>({
    query: `*[_type == 'post' && slug.current == "${slug}"]{title, 'slug': slug.current, 'coverImage': {'alt': coverImage.alt, 'url': coverImage.asset->url}, excerpt, publishedAt, category->{name}, content}[0]`,
  })) as unknown as ResourceData;

  return data;
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="flex w-full justify-center">
          <Image
            alt={value.alt || " "}
            loading="lazy"
            src={getUrlFor(value)}
            width={1024}
            height={800}
            sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
          />
        </div>
      );
    },
    videoData: (data: {
      value: {
        url: string;
      };
    }) => {
      return (
        <VideoPlayer
          url={data.value.url}
          className="flex aspect-video w-[100%] items-center justify-center"
        />
      );
    },
  },
  block: {
    h1: ({ children, index }) => (
      <h1 className="mt-4 text-2xl sm:text-3xl" id={`heading_${index}`}>
        {children}
      </h1>
    ),
    h2: ({ children, index }) => (
      <h2 className="mt-4 text-xl sm:text-2xl" id={`heading_${index}`}>
        {children}
      </h2>
    ),
    h3: ({ children, index }) => (
      <h2 className="mt-4 text-lg sm:text-xl" id={`heading_${index}`}>
        {children}
      </h2>
    ),
    h4: ({ children, index }) => (
      <h2 className="mt-4 text-base sm:text-lg" id={`heading_${index}`}>
        {children}
      </h2>
    ),
    h5: ({ children, index }) => (
      <h2 className="mt-4 text-base sm:text-lg" id={`heading_${index}`}>
        {children}
      </h2>
    ),
    h6: ({ children, index }) => (
      <h2 className="mt-4 text-base sm:text-lg" id={`heading_${index}`}>
        {children}
      </h2>
    ),
    normal: ({ children }) => {
      return <div className="my-2 text-sm sm:text-base">{children}</div>;
    },
    blockquote: ({ children }) => (
      <blockquote className="font-semibold text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-inside list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: {
        href: string;
      };
    }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className="text-blue-600"
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <pre className="block rounded-md bg-gray-200 p-3">
        <code>{children}</code>
      </pre>
    ),
  },
};

async function ResourcePostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const post = await getResourceData(slug);

    return (
      <>
        <Header />
        <main className="mb-16 mt-32">
          <Container>
            <div className="font-display mx-auto flex max-w-4xl flex-col">
              <h4 className="flex w-full justify-start text-sm text-blue-600">
                {post.category.name}
              </h4>
              <h1 className="my-2 text-3xl sm:text-4xl">{post.title}</h1>
              <p className="text-sm">
                {formatDateTime({
                  dateTime: post.publishedAt,
                  format: "MMMM d, yyyy",
                })}
              </p>
              <Image
                className="my-8 h-96 w-full object-cover"
                loading="lazy"
                src={getUrlFor(post.coverImage.url)}
                alt={post.coverImage.alt}
                width={1024}
                height={800}
              />

              <p className="mb-10 text-base text-slate-700">{post.excerpt}</p>

              <PortableText
                value={post.content}
                components={portableTextComponents}
                onMissingComponent={false}
              />
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    notFound();
  }
}

export default ResourcePostPage;
