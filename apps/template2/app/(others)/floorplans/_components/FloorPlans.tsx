import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Heart } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button, Card, CardContent } from "@repo/ui";

const montserratBold = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  data: any;
}

const FloorPlans = ({ data }: Props) => {
  const floorPlansData = data?.floorPlans;

  if (!floorPlansData) {
    return (
      <div className="flex h-screen animate-spin items-center justify-center">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <div className="bg-[#f4f4ef] p-8">
      <h1 className={`${montserratBold.className} mb-4 text-4xl`}>
        Our Floor Plans
      </h1>
      <p className={`${montserratLight.className} mb-8 text-lg`}>
        {floorPlansData?.description ??
          "Need more room? We have a floor plan to fit your needs."}
      </p>

      <div className="mb-8 flex justify-between">
        <Button variant="outline" className="flex items-center gap-2">
          <span>FILTER</span>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">PLAN</Button>
          <Button variant="outline">LIST</Button>
          <Button variant="outline">FAV</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {floorPlansData?.plans?.map((plan: any, index: number) => (
          <Card
            key={index}
            className="overflow-hidden rounded-none border-none bg-transparent shadow-none"
          >
            <CardContent className="p-0">
              <div className="relative h-48 w-full ">
                <Image
                  src={
                    plan?.image
                      ? plan.image
                      : "https://via.placeholder.com/400x300"
                  }
                  alt={`${plan?.title ?? "Floor plan"} floor plan`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className={`mb-2 text-lg font-bold`}>
                  {plan?.title ?? "Floor Plan"}
                </h2>
                <p className={`${montserratLight.className} text-sm`}>
                  {plan?.bedrooms ?? "0"} Bed, {plan?.bathrooms ?? "0"} Bath,{" "}
                  {plan?.squareFeet ?? "0"} SqFt
                </p>
                <p className={`${montserratLight.className} text-sm`}>
                  {plan?.availableUnits ?? "0"} Available
                </p>
                <div className="flex items-center justify-between">
                  <p className={`text-lg font-bold`}>
                    {`$${plan?.ratePerMonth ?? "0"}/month`}
                  </p>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <p className={`mb-4 text-sm font-semibold`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <p className={`${montserratLight.className} text-xs`}>
          Pricing and availability are subject to change. Rent is based on
          monthly frequency. Square footage listed is an approximate value for
          each unit.
        </p>
      </div>
    </div>
  );
};

export default FloorPlans;
