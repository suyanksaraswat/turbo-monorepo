import React from "react";
import AvailabilityContent from "./_components/AvailabilityContent";
import { fetchData } from "../../../services/sanity";

export default async function AmenitiesPage() {
  const data = await fetchData();

  return <AvailabilityContent data={data} />;
}
