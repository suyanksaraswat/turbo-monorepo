"use client";

import { Suspense } from "react";
import ListingDetails from "./_components/ListingDetails";

export default function Page() {
  return (
    <Suspense>
      <ListingDetails />
    </Suspense>
  );
}
