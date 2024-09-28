"use client";

import React from "react";
import Image from "next/image";
import { Camera, ChevronsRight } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@repo/ui";

interface Props {
  data: any;
}

const AmenitiesContent = ({ data }: Props) => {
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

      <div className="p-4 md:px-16  lg:p-8 lg:px-44">
        <h1 className="pb-10 pt-5 text-left text-4xl font-normal lg:text-6xl">
          Amenities
        </h1>
        <p className="mb-4 text-left">
          <span className="mb-2 block text-sm font-bold">
            Some amenities are available only in specific apartments. Please
            contact Leasing Office for details.
          </span>
        </p>

        <div className="grid gap-4 md:grid-cols-1">
          {data?.amenities?.categories?.map((Amenity: any, index: number) => (
            <div key={index}>
              <h3 className="mb-5 text-left text-4xl font-normal">
                {Amenity.name}
              </h3>
              <ul>
                <li className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {Amenity.amenities.map((item: any, index: number) => (
                    <span key={index} className="flex items-center gap-5">
                      <div className="flex items-center gap-1">
                        <ChevronsRight className="h-4 w-4" />
                        {item.title}
                      </div>
                      {item.image && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Camera className="hiver:text-blue-600 h-4 w-4 cursor-pointer text-blue-400" />
                          </DialogTrigger>
                          <DialogContent className="h-auto w-full max-w-[800px]">
                            <DialogHeader>
                              <DialogTitle>Amenities</DialogTitle>
                            </DialogHeader>
                            <div className="relative h-[500px]">
                              <Image
                                src={
                                  item.image ? item.image : "/placeholder.jpg"
                                }
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                alt="Amenity Image"
                              />
                            </div>
                            <DialogFooter>{item.title}</DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </span>
                  ))}
                </li>
              </ul>
              {index != data?.amenities?.categories?.length - 1 && (
                <div className="relative mt-10 w-full">
                  <div className="w-full border-t border-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 md:px-16 lg:p-8 lg:px-44">
        <div className="relative my-10 w-full">
          <div className="w-full border-t border-gray-300" />
        </div>
        <h1 className="mb-2 text-5xl">Pet Policy</h1>
        <p className="mb-2 flex items-center gap-2 text-2xl">
          <span className="material-symbols-outlined">pets</span>Pets
        </p>
        <p className="mb-4">Allowed</p>
      </div>
    </div>
  );
};

export default AmenitiesContent;
