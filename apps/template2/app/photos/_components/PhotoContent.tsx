"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  Dialog,
  DialogTrigger,
  DialogContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@repo/ui";

interface Props {
  data: any;
}

const PhotoContent = ({ data }: Props) => {
  const [batchSize, setBatchSize] = useState(8);

  useEffect(() => {
    const updateBatchSize = () => {
      if (window.innerWidth < 768) {
        setBatchSize(1);
      } else if (window.innerWidth < 1024) {
        setBatchSize(4);
      } else {
        setBatchSize(8);
      }
    };
    updateBatchSize();
    window.addEventListener("resize", updateBatchSize);
    return () => {
      window.removeEventListener("resize", updateBatchSize);
    };
  }, [window]);

  const renderGridDivs = () => {
    const gridDivs: ReactNode[] = [];
    const images = data?.gallery?.categories[0]?.images;

    for (let i = 0; i < images?.length; i += batchSize) {
      const batch = images?.slice(i, i + batchSize);

      const batchCards = batch.map((image: any, index: number) => (
        <Card
          className="relative h-64 w-full cursor-pointer overflow-hidden rounded-none"
          key={index}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Image
                src={image ? image : "/placeholder.jpg"}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 ease-in-out hover:scale-110"
                alt="Amenity Image"
              />
            </DialogTrigger>
            <DialogContent className="h-auto w-full max-w-[800px]">
              <div className="relative h-[500px]">
                <Image
                  src={image ? image : "/placeholder.jpg"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Amenity Image"
                />
              </div>
            </DialogContent>
          </Dialog>
        </Card>
      ));

      gridDivs.push(
        <div
          key={i}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {batchCards}
        </div>
      );
    }

    return gridDivs;
  };

  const imageGrids = renderGridDivs();

  return (
    <div className="mt-14">
      <div className="relative h-96">
        <Image
          src={
            data?.hero?.images?.[0]
              ? data?.hero?.images?.[0]
              : "/placeholder.jpg"
          }
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Banner Image"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black p-5">
          <Image
            src={data?.hero?.logo ? data?.hero?.logo : "/placeholder.jpg"}
            alt="Logo"
            height={160}
            width={250}
          />
        </div>
      </div>

      <div className="p-4 md:px-16  lg:p-8 lg:px-24 xl:px-44">
        <h1 className="pb-10 pt-5  text-left text-4xl font-normal lg:text-6xl">
          Photo Gallery
        </h1>

        <Carousel className="w-full">
          <CarouselContent>
            {imageGrids?.map((image) => {
              return <CarouselItem>{image}</CarouselItem>;
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 top-[50%]" />
          <CarouselNext className="absolute right-10 top-[50%]" />
        </Carousel>
      </div>

      <div className="mb-32 p-4  md:px-16 lg:p-8 lg:px-24 xl:px-44">
        <p>
          Images are for demonstration purposes only and may not be an exact
          representation. Some upgrades and amenities are available only in
          specific apartments.
        </p>

        <div className="relative mt-10 w-full">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
