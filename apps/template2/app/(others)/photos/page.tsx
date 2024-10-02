import React from "react";
import PhotosTour from "./_components/Photos";
import { fetchData } from "../../../services/sanity";

export default async function PhotosPage() {
  const data = await fetchData();

  return <PhotosTour data={data} />;
}