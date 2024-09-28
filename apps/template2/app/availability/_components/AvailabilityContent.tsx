"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface Props {
  data: any;
}

const AvailabilityContent = ({ data }: Props) => {
  useEffect(() => {
    const iframes = document?.getElementsByTagName("iframe");
    const iframe = iframes?.[0];

    if (iframe) {
      iframe.style.width = "100%";
      iframe.style.height = "1024px";
    }
  }, [document]);

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
          Availability
        </h1>

        {data?.availability && (
          <div dangerouslySetInnerHTML={{ __html: data?.availability }} />
        )}

        <div className="relative mt-10 w-full">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>

      <div className="p-4 md:px-16 lg:p-8 lg:px-44"></div>
    </div>
  );
};

export default AvailabilityContent;
