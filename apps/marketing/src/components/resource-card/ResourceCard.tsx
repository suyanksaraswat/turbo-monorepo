import Image from 'next/image';
import Link from 'next/link';

export interface ResourceCardData {
  title: string;
  slug: string;
  coverImage: {
    alt: string;
    url: string;
  };
  category: {
    name: string;
  };
  excerpt: string;
  publishedAt: string;
  categoryLink: string;
  resourceLink: string;
}

interface ResourceCardProps {
  post: ResourceCardData;
}

export function ResourceCard({ post }: ResourceCardProps) {
  return (
    <article
      key={post.slug}
      className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.alt}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time
            dateTime={post.publishedAt}
            className="text-gray-500">
            {post.publishedAt}
          </time>
          <Link
            href={post.categoryLink}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {post.category.name}
          </Link>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={post.resourceLink}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
