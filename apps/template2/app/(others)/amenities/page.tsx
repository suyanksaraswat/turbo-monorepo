import React from "react";
import Amenities from "./_components/Amenities";
import { fetchData } from "../../../services/sanity";

export default async function AmenitiesPage() {
  const data = await fetchData();

  return <Amenities data={data} />;
}
