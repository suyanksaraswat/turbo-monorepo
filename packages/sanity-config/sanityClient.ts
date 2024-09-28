import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

function sanityClientService(
  projectId: string | undefined,
  dataset: string | undefined
) {
  const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion: "2023-05-03",
    useCdn: false,
  });

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  return { sanityClient, urlFor };
}

export default sanityClientService;
