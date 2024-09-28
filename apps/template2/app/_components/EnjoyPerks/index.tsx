"use client";

import { Key, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@repo/ui";

interface Props {
  data: any;
}

export default function EnjoyPerks({ data }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const firstCategory = data?.amenities?.categories?.[0];
  const firstThreeAmenities = firstCategory?.amenities?.slice(0, 3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center py-10 md:py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-14 px-5 text-center text-5xl font-bold text-gray-800"
      >
        ENJOY THE PERKS
      </motion.h1>
      <div
        className="container mx-auto"
        style={{
          backgroundImage:
            'url("https://resource.rentcafe.com/image/upload/q_auto,f_auto,w_1450,h_350,c_lfill,g_auto/s3/2/58193/Amenities%20Background_pattern(1).png")',
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top",
        }}
      >
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {firstThreeAmenities?.map((amenity: any, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="mb-4 flex flex-col items-stretch justify-self-start text-center"
              >
                <div className="ysi-picture-widget ysi-picture-wrapper">
                  <Image
                    src={amenity?.image ? amenity?.image : "/placeholder.jpg"}
                    alt=""
                    width={1383}
                    height={770}
                    className="grayscale transition duration-300 ease-in-out hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                <div className="inline-block w-full py-4">
                  <div className="tracking-[0.4rem]">{amenity?.title}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="my-14 flex justify-center"
      >
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary"
        >
          VIEW ALL OUR AMENITIES
        </Button>
      </motion.div>

      <div className="grid max-w-5xl grid-cols-1 gap-4 text-center md:grid-cols-2 md:text-left">
        {data?.amenities?.description?.map((perk: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 5) }}
            className="flex-1"
          >
            {perk}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
