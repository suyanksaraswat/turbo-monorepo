import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  data: any;
}

const NeighborhoodDirections = ({ data }: Props) => {
  const pageData = data?.directions;
  const neighborhoodData = data?.neighbourhood;

  if (!pageData) {
    return (
      <div className="flex h-screen animate-spin items-center justify-center">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">Neighborhood & Directions</h1>
      {pageData?.description && <p className="mb-6">{pageData?.description}</p>}

      <div className="mb-8">
        <div className="mb-4 flex">
          <div className="mr-2 flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border p-2"
            />
          </div>
          <button className="rounded-md border bg-white p-2">
            <Search className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-4 flex">
          <div className="mr-2 flex-1">
            <select className="w-full appearance-none rounded-md border p-2">
              <option>Places</option>
            </select>
          </div>
          <div className="flex-1">
            <select className="w-full appearance-none rounded-md border p-2">
              <option>Distance</option>
            </select>
          </div>
        </div>
        <button className="flex items-center text-blue-600">
          <ChevronDown className="mr-1 h-4 w-4" /> Reset Filters
        </button>
      </div>

      {(pageData?.latitude || pageData?.longitude) && (
        <div className="relative mb-8 h-96 w-full overflow-hidden bg-gray-200">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15716.428149624777!2d${pageData?.longitude ?? 0}!3d${pageData?.latitude ?? 0}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726056322734!5m2!1sen!2sin`}
            className="absolute left-0 top-0 h-full w-full rounded border-0 shadow-sm"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}

      <a href="#" className="mb-8 block text-blue-600">
        View on Google Maps
      </a>

      {neighborhoodData?.images && neighborhoodData.images.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Explore Our Neighborhood</h2>
          <div className="space-y-12">
            {neighborhoodData.images.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <div
                  className={`md:w-2/3 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} mb-4 md:mb-0`}
                >
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title || `Neighborhood feature ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr className="my-8" />

      <p className="text-sm text-gray-600">
        Looking for recommendations? Our friendly resident service
        representatives always have an idea of what event or concert is coming
        up.
      </p>
    </div>
  );
};

export default NeighborhoodDirections;
