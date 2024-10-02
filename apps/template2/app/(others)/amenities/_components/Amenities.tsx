import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  data: any;
}

const Amenities = ({ data }: Props) => {
  const amenitiesData = data?.amenities;

  if (!amenitiesData) {
    return (
      <div className="flex h-screen animate-spin items-center justify-center">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Amenities</h1>
      <p className="mb-8">{amenitiesData?.description}</p>

      {amenitiesData?.categories?.map(
        (category: any, categoryIndex: number) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">{category?.name}</h2>

            {category?.amenities?.some((amenity: any) => amenity.image) ? (
              <div className="space-y-12">
                {category?.amenities?.map(
                  (amenity: any, index: number) =>
                    amenity.image && (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-6`}
                      >
                        <div className="md:w-1/2">
                          <img
                            src={amenity.image}
                            alt={amenity.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center md:w-1/2">
                          <h3 className="mb-2 text-xl font-semibold">
                            {amenity.title}
                          </h3>
                          <p>{amenity.description}</p>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div className="my-10 rounded-lg border border-gray-200 p-6">
                <div className="flex justify-center">
                  <div className="grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-2">
                    {category.amenities?.map((amenity: any, index: number) => (
                      <React.Fragment key={index}>
                        {index % 2 === 0 && (
                          <>
                            <div className="whitespace-nowrap text-right">
                              <span>{amenity?.title}</span>
                            </div>
                            {index + 1 < category?.amenities?.length && (
                              <div className="whitespace-nowrap text-left">
                                <span>
                                  {category?.amenities[index + 1]?.title}
                                </span>
                              </div>
                            )}
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Amenities;
