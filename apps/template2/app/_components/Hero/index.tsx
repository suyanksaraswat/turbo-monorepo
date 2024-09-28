"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Card,
  CardContent,
  CarouselPrevious,
  CarouselNext,
  Button,
} from "@repo/ui";

interface Props {
  data: any;
}

export default function Hero({ data }: Props) {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {data?.hero?.images?.map((banner: any, index: number) => (
          <CarouselItem key={index}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Card
                  className="flex h-[50vh] flex-col justify-center rounded-none bg-cover bg-center bg-no-repeat md:h-screen"
                  style={{
                    backgroundImage: `url(${banner ? banner : "/placeholder.jpg"})`,
                  }}
                >
                  <CardContent className="flex-1 bg-[rgba(0,0,0,0.4)] p-6"></CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 top-[50%] z-10" />
      <CarouselNext className="absolute right-10 top-[50%] z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-black p-5"
        >
          <Image
            src={data?.hero?.logo ? data?.hero?.logo : "/placeholder.jpg"}
            alt=""
            height={160}
            width={250}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-gray-400">
            CHECK AVAILABILITY
          </Button>
        </motion.div>
      </motion.div>
    </Carousel>
  );
}
