"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const montserratBold = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  data: any;
}

const PhotosTour = ({ data }: Props) => {
  const photoData = data?.gallery;

  if (!photoData) {
    return (
      <div className="flex h-screen animate-spin items-center justify-center">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <div className="bg-[#f4f4ef] p-8">
      <h1 className={`${montserratBold.className} mb-4 text-4xl`}>
        Photos & Tour
      </h1>
      <p className={`${montserratLight.className} mb-8 text-lg`}>
        {photoData?.description ?? "View our property photos."}
      </p>

      {photoData?.categories?.map((category: any, categoryIndex: number) => (
        <React.Fragment key={categoryIndex}>
          <h2
            className={`text-2xl font-bold ${categoryIndex > 0 ? "my-4" : "mb-4"}`}
          >
            {category?.name ?? "Photo Category"}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {category?.images?.map((photo: any, index: number) => (
              <div key={index} className="relative h-48 w-full">
                <Image
                  src={photo ? photo : "https://via.placeholder.com/400x300"}
                  alt={`${category?.title ?? "Property"} ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PhotosTour;
