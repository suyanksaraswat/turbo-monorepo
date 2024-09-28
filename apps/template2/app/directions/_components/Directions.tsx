"use client";

import Image from "next/image";
import { Send, ArrowRight } from "lucide-react";
import { Input, Button } from "@repo/ui";

interface Props {
  data: any;
}

const Directions = ({ data }: Props) => {
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

      <div className="p-4 md:px-16  lg:p-8 lg:px-44">
        <h1 className="pb-10 pt-5 text-left text-4xl font-normal lg:text-6xl">
          Map & Directions
        </h1>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter your address"
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            type="submit"
            size="icon"
            className="bg-amber-400 hover:bg-amber-500"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="my-10">
          {(data?.directions?.latitude || data?.directions?.longitude) && (
            <div className="relative mb-8 h-96 w-full overflow-hidden bg-gray-200">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15716.428149624777!2d${data?.directions?.longitude ?? 0}!3d${data?.directions?.latitude ?? 0}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726056322734!5m2!1sen!2sin`}
                className="absolute left-0 top-0 h-full w-full rounded border-0 shadow-sm"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 md:px-16 lg:p-8 lg:px-44"></div>
    </div>
  );
};

export default Directions;
