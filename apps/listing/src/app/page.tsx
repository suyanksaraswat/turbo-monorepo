import { Suspense } from "react";
import ListingTable from "./_components/ListingTable";

export default async function Index() {
  return (
    <Suspense>
      <ListingTable />
    </Suspense>
  );
}
