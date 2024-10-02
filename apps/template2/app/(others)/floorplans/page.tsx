import React from "react";
import FloorPlans from "./_components/FloorPlans";
import { fetchData } from "../../../services/sanity";

export default async function FloorPlansPage() {
  const data = await fetchData();

  return <FloorPlans data={data} />;
}
