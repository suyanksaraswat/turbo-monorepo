"use client";

import Image from "next/image";
import { Bed, Bath, Square, CalendarIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";

interface Props {
  data: any;
}

const FloorPlans = ({ data }: Props) => {
  return (
    <div className="mt-14">
      <div className="relative h-96">
        <Image
          src={
            data?.hero?.images?.[0]
              ? data?.hero?.images?.[0]
              : "/placeholder.jpg"
          }
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Banner Image"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black p-5">
          <Image
            src={data?.hero?.logo ? data?.hero?.logo : "/placeholder.jpg"}
            alt="Logo"
            height={160}
            width={250}
          />
        </div>
      </div>

      <div className="p-4 md:px-16 lg:p-8 lg:px-44">
        <h1 className="mb-6 text-4xl font-light">FLOOR PLANS</h1>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-5">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>{/* Add bedroom options */}</SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bathrooms" />
            </SelectTrigger>
            <SelectContent>{/* Add bathroom options */}</SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Unit Size" />
            </SelectTrigger>
            <SelectContent>{/* Add unit size options */}</SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>{/* Add price range options */}</SelectContent>
          </Select>
          <div className="flex">
            <Input type="text" placeholder="Move-In Date" className="w-full" />
            <Button variant="outline" size="icon" className="ml-2">
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data?.floorPlans?.plans?.map((plan: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Bed size={16} className="mr-1" /> {plan.bedrooms} Bed
                  </span>
                  <span className="flex items-center">
                    <Bath size={16} className="mr-1" /> {plan.bathrooms} Bath
                  </span>
                  <span className="flex items-center">
                    <Square size={16} className="mr-1" /> {plan.squareFeet} Sq.
                    Ft.
                  </span>
                </div>
                <div className="text-sm">{plan.availableUnits} Available</div>
              </CardHeader>
              <CardContent>
                {plan.image ? (
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center bg-gray-100">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-stretch">
                <div className="mb-2 bg-gray-100 p-2 text-center">
                  <div>Starting at ${plan.ratePerMonth}/month</div>
                </div>
                <Button className="bg-primary mb-2 w-full text-black">
                  {plan.availableUnits > 0 ? "AVAILABILITY" : "GET NOTIFIED"}
                </Button>
                <Button variant="outline" className="w-full">
                  GUIDED TOUR
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="p-4 md:px-16 lg:p-8 lg:px-44">
        <p>{data?.floorPlans?.description}</p>
      </div>
    </div>
  );
};

export default FloorPlans;
