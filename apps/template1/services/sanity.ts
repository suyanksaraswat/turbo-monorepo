import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import sanityClientService from "@repo/sanity-config/sanityClient";

export const fetchData = async () => {
  const query = `*[_type == "client" && _id == "${process.env.SANITY_CLIENT_ID}" ]`;
  const data = await sanityClientService(
    process.env.SANITY_PROJECT_ID,
    process.env.SANITY_DATASET
  ).sanityClient.fetch(query, {}, { cache: "no-store" });

  const res = data?.[0];

  const updatedJson = {
    ...res,
    hero: {
      ...res.hero,
      logo: imageUrl(res?.hero?.logo),
      images: res.hero.images.map((image: SanityImageSource) =>
        imageUrl(image)
      ),
    },
    amenities: {
      ...res.amenities,
      categories: res.amenities.categories.map(
        (category: { amenities: any[] }) => ({
          ...category,
          amenities: category.amenities?.map(
            (amenity: { image: SanityImageSource }) => ({
              ...amenity,
              image: amenity.image ? imageUrl(amenity.image) : undefined,
            })
          ),
        })
      ),
    },
    gallery: {
      ...res.gallery,
      categories: res.gallery.categories.map((category: { images: any[] }) => ({
        ...category,
        images: category.images.map((image: SanityImageSource) =>
          imageUrl(image)
        ),
      })),
    },
    news: {
      ...res.news,
      images: res.news.images.map((image: SanityImageSource) =>
        imageUrl(image)
      ),
    },
    neighbourhood: {
      ...res.neighbourhood,
      images: res.neighbourhood.images.map(
        (item: { image: SanityImageSource }) => ({
          ...item,
          image: imageUrl(item.image),
        })
      ),
    },
    logo: imageUrl(res.logo),
    floorPlans: {
      ...res.floorPlans,
      plans: res.floorPlans.plans.map((plan: { image: SanityImageSource }) => ({
        ...plan,
        image: imageUrl(plan.image),
      })),
    },
    community: {
      ...res.community,
      images: res.community.images.map((image: SanityImageSource) =>
        imageUrl(image)
      ),
    },
    schedule: {
      ...res.schedule,
      images: res.schedule.images.map((image: SanityImageSource) =>
        imageUrl(image)
      ),
    },
    contact: {
      ...res.contact,
      images: res.contact.images.map((image: SanityImageSource) =>
        imageUrl(image)
      ),
    },
  };

  return updatedJson;
};

export const imageUrl = (image: SanityImageSource) => {
  return sanityClientService(
    process.env.SANITY_PROJECT_ID,
    process.env.SANITY_DATASET
  )
    .urlFor(image)
    .url();
};
