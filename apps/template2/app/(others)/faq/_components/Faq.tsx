"use client";

import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  data: any;
}

const FAQSection = ({ data }: Props) => {
  const faqData = data?.faq;

  if (!faqData)
    return (
      <div className="flex h-screen animate-spin items-center justify-center">
        <AiOutlineLoading3Quarters />
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="mb-8 text-4xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqData?.map((faq: any, index: number) => (
          <div key={index} className="p-3">
            <h2 className="mb-2 text-xl font-semibold">
              {faq?.question ?? "Question not available"}
            </h2>
            <p className="text-gray-700">
              {faq?.answer ?? "Answer not available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
