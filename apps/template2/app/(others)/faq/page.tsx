import React from "react";
import FAQSection from "./_components/Faq";
import { fetchData } from "../../../services/sanity";

export default async function FaqPage() {
  const data = await fetchData();

  return <FAQSection data={data} />;
}
