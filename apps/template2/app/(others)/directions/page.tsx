import React from "react";
import NeighborhoodDirections from "./_components/Directions";
import { fetchData } from "../../../services/sanity";

export default async function DirectionsPage() {
  const data = await fetchData();

  return <NeighborhoodDirections data={data} />;
}
