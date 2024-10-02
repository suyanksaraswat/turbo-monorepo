import { ResourceCard, ResourceCardData } from "../../resource-card/ResourceCard";

export interface ResourcePreviewProps {
  title: string;
  subtitle: string;
  posts: ResourceCardData[];
}

export function ResourcePreview({ title, subtitle, posts }: ResourcePreviewProps) {
  return (
    <section id="resources" aria-label="Features for simplifying everyday business tasks">
      <div className=" py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">{subtitle}</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <ResourceCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
