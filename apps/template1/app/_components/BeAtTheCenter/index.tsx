"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BeAtTheCenter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center my-10 md:my-24"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-10 w-full px-4 py-10 md:py-24 flex flex-col items-center border-0 border-t-[1px] border-b-[1px] border-primary"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-primary font-bold"
        >
          BE AT THE CENTER
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
