"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createClient } from "@sanity/client";
import { LayoutIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui";

const ListingTable = () => {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<any>([]);

  const dataset = searchParams?.get("dataset");
  const projectId = searchParams?.get("projectId");
  const apiVersion = searchParams?.get("apiVersion");

  const sanityExistInQuery = dataset && projectId && apiVersion;

  useEffect(() => {
    if (sanityExistInQuery) {
      const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
      });

      const query = '*[_type == "listing" && available == true]';

      client.listen(query).subscribe({
        next: (update) => {
          // The update object contains information about the change
          if (update.transition === "appear") {
            console.log("New document:", update.result);
          } else if (update.transition === "update") {
            console.log("Updated document:", update.result);
          } else if (update.transition === "disappear") {
            console.log("Deleted document:", update.documentId);
          }
        },
        error: (error) => {
          console.error("Error:", error);
        },
      });

      const fetchSanityData = async () => {
        try {
          const query = `*[_type == "listing" && available == true] {
            _id,
            price,
            unitId->{
              unitNumber,
              unitTypeId->{
                bedrooms,
                bathrooms,
              },
               floorPlanId->{
                "floorplanImage": photoId.asset->url
              },
            }
          }`;
          const result = await client.fetch(query);

          setListings(result);
        } catch (error) {
          console.error("Error fetching data from Sanity:", error);
        }
      };

      fetchSanityData();
    } else {
      console.log(
        "Sanity project ID or dataset not provided in URL parameters"
      );
    }
  }, [searchParams]);

  return sanityExistInQuery ? (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-end gap-2">
        <div className="text-xs">sort by</div>
        {/* <Select defaultValue='most-expensive'>
          <SelectTrigger className='w-[180px] border-none shadow-none px-0 justify-normal gap-2 font-bold text-[#88941e] text-xs'>
            <SelectValue placeholder='Sort By' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='most-expensive'>Most Expensive</SelectItem>
            <SelectItem value='least-expensive'>Least Expensive</SelectItem>
            <SelectItem value='recently-updated'>Recently Updated</SelectItem>
          </SelectContent>
        </Select> */}
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-medium text-gray-500">Unit</TableHead>
            <TableHead className="font-medium text-gray-500">Layout</TableHead>
            <TableHead className="hidden font-medium text-gray-500 md:table-cell">
              Baths
            </TableHead>
            <TableHead className="font-medium text-gray-500">Price</TableHead>
            <TableHead className="hidden font-medium text-gray-500 md:table-cell">
              Floorplan
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings?.map((listing: any) => (
            <TableRow key={listing?._id}>
              <TableCell className="font-medium text-[#c3d42c]">
                <Link
                  href={`/table/${listing?._id}?dataset=${dataset}&projectId=${projectId}&apiVersion=${apiVersion}`}
                >
                  {listing?.unitId?.unitNumber}
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href={`/table/${listing?._id}?dataset=${dataset}&projectId=${projectId}&apiVersion=${apiVersion}`}
                >
                  {`${listing?.unitId?.unitTypeId?.bedrooms} Bedroom`}
                </Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Link
                  href={`/table/${listing?._id}?dataset=${dataset}&projectId=${projectId}&apiVersion=${apiVersion}`}
                >
                  {`${listing?.unitId?.unitTypeId?.bathrooms} BA`}
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href={`/table/${listing?._id}?dataset=${dataset}&projectId=${projectId}&apiVersion=${apiVersion}`}
                >
                  <span className="font-medium text-[#c3d42c]">
                    ${listing?.price}
                  </span>
                  <span className="ml-2 bg-[#c3d42c] px-2 py-1 text-xs text-white">
                    No Fee
                  </span>
                </Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Dialog>
                  <DialogTrigger asChild>
                    <LayoutIcon className="h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-600" />
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle>
                        Floorplan for Unit {listing?.unitId?.unitNumber}
                      </DialogTitle>
                    </DialogHeader>
                    <img
                      src={listing?.unitId?.floorPlanId?.floorplanImage}
                      alt={`Floorplan for Unit ${listing?.unitId?.unitNumber}`}
                      className="h-auto w-full"
                    />
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 text-xs text-gray-400">Powered by Deal Meridian</div>
    </div>
  ) : null;
};

export default ListingTable;
