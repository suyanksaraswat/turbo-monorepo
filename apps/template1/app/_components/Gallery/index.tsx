"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  Card,
  CardContent,
  CarouselPrevious,
  CarouselNext,
} from "@repo/ui";

interface Props {
  data: any;
}

export default function Gallery({ data }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="mb-10 flex flex-col-reverse items-center md:h-screen md:flex-row"
    >
      <div className="flex flex-1 items-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex w-full flex-col items-center bg-white px-2 pb-10 pt-10 md:mr-[-120px] md:items-end md:px-10 lg:pb-36"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-lg tracking-[4px] text-gray-500"
          >
            PHOTO GALLERY
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-3xl text-gray-800 md:text-right md:text-5xl"
          >
            PICTURE YOURSELF HERE
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="my-16 text-center md:text-right"
          >
            {data?.gallery?.description}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-gray-400 hover:text-white"
            >
              VIEW GALLERY
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1"
      >
        <Carousel className="w-screen md:w-full" opts={{ loop: true }}>
          <CarouselContent>
            {data?.gallery?.categories[0]?.images?.map(
              (image: any, index: number) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className="flex h-[50vh] flex-col justify-center rounded-none bg-cover bg-center bg-no-repeat md:h-screen"
                      style={{
                        backgroundImage: `url(${
                          image ? image : "/placeholder.jpg"
                        })`,
                      }}
                    >
                      <CardContent className="flex-1 p-6"></CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 top-[50%]" />
          <CarouselNext className="absolute right-10 top-[50%]" />
        </Carousel>
      </motion.div>
    </div>
  );
}
