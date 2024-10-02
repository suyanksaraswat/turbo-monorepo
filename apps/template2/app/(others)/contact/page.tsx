import React from "react";
import Contact from "./_components/Contact";
import { fetchData } from "../../../services/sanity";

export default async function AmenitiesPage() {
  const data = await fetchData();

  return <Contact data={data} />;
}
