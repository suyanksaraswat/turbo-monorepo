"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@repo/ui";

interface Props {
  data: any;
}

export default function FloorPlans({ data }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-black px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h6
          className="text-primary mb-4 text-center text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          FLOOR PLANS
        </motion.h6>
        <motion.h4
          className="text-center text-5xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          TIMELESS ELEGANCE
        </motion.h4>
      </motion.div>

      <motion.div
        className="flex flex-col items-center px-4 py-10 md:py-28"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.h6
          className="text-primary mb-6 text-center text-xl tracking-[4px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Exquisitely Stylish & Exceptionally Efficient Apartments
        </motion.h6>

        <motion.div
          className="mb-14 max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {data?.floorPlans?.description}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Link href={"/floorplans"}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary"
              >
                VIEW FLOOR PLANS
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
