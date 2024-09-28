"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  data: any;
}

export default function About({ data }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="sm:max-w-720 md:max-w-5xl container mx-auto flex flex-col items-center gap-8 py-10 text-gray-900 md:py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-4xl font-bold text-gray-800 md:text-5xl"
      >
        {data?.about?.heading}
      </motion.h1>
      {data?.about?.description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: data?.about?.description }}
        />
      )}
    </motion.div>
  );
}
