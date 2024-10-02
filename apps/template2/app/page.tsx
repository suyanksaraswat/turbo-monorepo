import React from "react";
import Landing from "./_components/Landing";
import { fetchData } from "../services/sanity";

export default async function Home() {
  const data = await fetchData();

  return <Landing data={data} />;
}
