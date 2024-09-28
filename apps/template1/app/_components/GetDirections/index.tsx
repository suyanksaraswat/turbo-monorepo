"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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

export default function GetDirections({ data }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center md:h-screen md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1"
      >
        <Carousel className="w-screen md:w-full" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 1 }).map((_, index) => (
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
                        data?.neighbourhood?.images[0]
                          ? data?.neighbourhood?.images[0]?.image
                          : "/placeholder.jpg"
                      })`,
                    }}
                  >
                    <CardContent className="flex-1 p-6"></CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 top-[50%]" />
          <CarouselNext className="absolute right-0 top-[50%]" />
        </Carousel>
      </motion.div>

      <div className="flex flex-1 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="z-10 flex w-full flex-col bg-white px-10 pb-5 pt-10 text-center md:ml-[-120px] md:text-left lg:pb-36"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-4 text-lg tracking-[4px] text-gray-500"
          >
            NEIGHBORHOOD
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-5xl text-gray-800"
          >
            YOU BELONG HERE
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="my-16 text-center md:text-left"
          >
            {data?.neighbourhood?.description}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link href="/directions">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gray-400 hover:text-white"
                >
                  GET DIRECTIONS
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
