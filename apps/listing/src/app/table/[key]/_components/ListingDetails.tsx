"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { createClient } from "@sanity/client";
import {
  MapPin,
  Camera,
  Maximize,
  Package,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Checkbox,
  Label,
  Textarea,
} from "@repo/ui";

const ListingDetails = () => {
  const params = useParams();

  const [data, setData] = useState<any>(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isPhotosDialogOpen, setIsPhotosDialogOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [formData, setFormData] = useState({
    isBroker: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    moveInDate: "",
    minPrice: "",
    maxPrice: "",
    notes: "",
  });

  const searchParams = useSearchParams();

  const key = params?.key;

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

      const fetchSanityData = async () => {
        try {
          const query = `*[_type == "listing" && _id == "${key}"][0]{
            _id,
            description,
            price,
            available,
            "listingPhotos": listingPhotos[].asset->url,
            unitId->{
              unitNumber,
              floorNumber,
              amenities[]->{name},
              floorPlanId->{
                "floorplanImage": photoId.asset->url
              },
              unitTypeId->{
                bedrooms,
                bathrooms,
                squareFoot
              },
              buildingId->{
                buildingName,
                buildingType,
                buildingAge,
                yearBuilt,
                totalUnits,
                totalFloors,
                address1,
                city,
                state,
                zip,
                propertyId->{
                  propertyName,
                  amenities[]->{name},
                  petPolicy,
                  location
                }
              }
            }
          }`;
          const result = await client.fetch(query);

          setData(result);
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
  }, [searchParams, key]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: any) => {
    setFormData((prevData) => ({
      ...prevData,
      isBroker: checked,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsContactDialogOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === (data?.listingPhotos?.length ?? 1) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? (data?.listingPhotos?.length ?? 1) - 1 : prevIndex - 1
    );
  };

  if (!data) return <div>Loading...</div>;

  return sanityExistInQuery ? (
    <div className="mx-auto max-w-4xl p-4">
      <Link
        href="/table?dataset=${dataset}&projectId=${projectId}&apiVersion=${apiVersion}"
        className="flex cursor-pointer items-center gap-1 py-2 pt-4 text-sm font-bold text-gray-600 hover:text-[#c3d42c]"
      >
        <ChevronLeft className="h-4 w-4" />
        Listings
      </Link>
      <h2 className="mb-2 text-2xl font-bold">
        {data?.unitId?.buildingId?.buildingName}
      </h2>
      <div className="mb-4 flex items-center text-gray-500">
        <MapPin size={16} className="mr-1" />
        <span>{`${data?.unitId?.buildingId?.address1}, ${data?.unitId?.buildingId?.city}, ${data?.unitId?.buildingId?.state} ${data?.unitId?.buildingId?.zip}`}</span>
      </div>

      <div className="mb-14 grid gap-2 md:grid-cols-2">
        {data?.listingPhotos
          ?.slice(0, 2)
          .map((photoUrl: any, index: number) => (
            <Image
              key={index}
              src={photoUrl}
              alt={`Apartment view ${index + 1}`}
              width={500}
              height={320}
              className="h-80 w-full cursor-pointer rounded object-cover hover:shadow-sm"
              onClick={() => setIsPhotosDialogOpen(true)}
            />
          ))}
      </div>

      <div className="mb-4 flex items-center justify-between md:w-3/5">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="border-gray-300">
            FOR RENT
          </Button>
        </div>

        <div className="flex space-x-2">
          <Dialog
            open={isPhotosDialogOpen}
            onOpenChange={setIsPhotosDialogOpen}
          >
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Camera className="mr-1" size={16} />{" "}
                {data?.listingPhotos?.length ?? 0} PHOTOS
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-white">
              <DialogHeader>
                <DialogTitle>Apartment Photos</DialogTitle>
              </DialogHeader>
              <div className="relative">
                <Image
                  src={data?.listingPhotos?.[currentPhotoIndex]}
                  alt={`Apartment photo ${currentPhotoIndex + 1}`}
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 transform"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-center">
                Photo {currentPhotoIndex + 1} of{" "}
                {data?.listingPhotos?.length ?? 0}
              </p>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Maximize className="mr-1" size={16} /> FLOORPLAN
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>
                  Floorplan for Unit {data?.unitId?.unitNumber}
                </DialogTitle>
              </DialogHeader>
              <img
                src={data?.unitId?.floorPlanId?.floorplanImage}
                alt={`Floorplan for Unit ${data?.unitId?.unitNumber}`}
                className="h-auto w-full"
              />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-gray-300">
                MAP
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Location Map</DialogTitle>
              </DialogHeader>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15716.428149624777!2d${data?.unitId?.buildingId?.propertyId?.location?.lng ?? 0}!3d${data?.unitId?.buildingId?.propertyId?.location?.lat ?? 0}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726056322734!5m2!1sen!2sin`}
                className="h-full min-h-96 w-full rounded border shadow-sm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between md:w-3/5">
        <div className="flex items-center space-x-2">
          <Package className="h-5 w-5 text-[#c3d42c]" />
          <span className="text-xl">
            {data?.unitId?.unitTypeId?.bedrooms} BR /{" "}
            {data?.unitId?.unitTypeId?.bathrooms} Bath /{" "}
            {data?.unitId?.unitTypeId?.squareFoot} sq ft
          </span>
        </div>
        <div className="flex items-center text-right">
          <span className="text-2xl font-bold text-[#c3d42c]">
            ${data?.price}
          </span>
          <span className="ml-2 rounded bg-[#c3d42c] px-2 py-1 text-xs capitalize text-white">
            No Fee
          </span>
        </div>
      </div>

      <div className="relative flex flex-col-reverse gap-4 md:flex-row">
        <div className="w-full bg-gray-100">
          <div className="mt-6 p-4 md:w-4/5">
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              <div className="col-span-1">
                <h3 className="text-xl font-light">Listing Description</h3>
              </div>
              <div className="col-span-2">
                <p className="mb-4 text-sm text-gray-600">
                  {data?.description}
                </p>
              </div>

              <div className="col-span-1">
                <h3 className="text-xl font-light">Amenities</h3>
              </div>
              <div className="col-span-2">
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {data?.unitId?.amenities?.map((amenity: any) => (
                    <div key={amenity?._id} className="flex items-center">
                      <Check size={16} className="mr-2 text-[#c3d42c]" />
                      <span className="text-sm">{amenity?.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <h3 className="text-xl font-light">Listing Details</h3>
              </div>
              <div className="col-span-2">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  {[
                    { label: "Unit Number", value: data?.unitId?.unitNumber },
                    { label: "Floor", value: data?.unitId?.floorNumber },
                    {
                      label: "Building Type",
                      value: data?.unitId?.buildingId?.buildingType,
                    },
                    {
                      label: "Building Age",
                      value: data?.unitId?.buildingId?.buildingAge,
                    },
                    {
                      label: "Year Built",
                      value: data?.unitId?.buildingId?.yearBuilt,
                    },
                    {
                      label: "Total Floors",
                      value: data?.unitId?.buildingId?.totalFloors,
                    },
                    {
                      label: "Units in Building",
                      value: data?.unitId?.buildingId?.totalUnits,
                    },
                    {
                      label: "Pet Policy",
                      value: data?.unitId?.buildingId?.propertyId?.petPolicy
                        ? "Allowed"
                        : "Not Allowed",
                    },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt className="text-sm font-semibold">{label}</dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <h3 className="text-xl font-light">Location</h3>
              </div>
              <div className="col-span-2">
                <div className="mb-4">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15716.428149624777!2d${data?.unitId?.buildingId?.propertyId?.location?.lng ?? 0}!3d${data?.unitId?.buildingId?.propertyId?.location?.lat ?? 0}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726056322734!5m2!1sen!2sin`}
                    width="600"
                    height="450"
                    className="rounded border shadow-sm"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-top-36 right-4 bg-white md:absolute md:w-1/3">
          <div className="border p-4">
            <h3 className="mb-2 text-xl">
              {data?.unitId?.buildingId?.buildingName}
            </h3>
            <p className="mb-4 text-sm">{data?.unitId?.buildingId?.address1}</p>
            <p className="mb-2 font-bold">
              {data?.unitId?.buildingId?.propertyId?.propertyName} Leasing Team
            </p>
            <Dialog
              open={isContactDialogOpen}
              onOpenChange={setIsContactDialogOpen}
            >
              <DialogTrigger asChild>
                <Button className="w-full bg-[#c3d42c] text-white hover:bg-[#879228]">
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white">
                <DialogHeader>
                  <DialogTitle>Request Information</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isBroker"
                      checked={formData.isBroker}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="isBroker" className="text-sm">
                      I&apos;M A BROKER
                    </Label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="FIRST NAME"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="LAST NAME"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="phoneNumber"
                    placeholder="PHONE NUMBER"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <div>
                    <p className="text-xs text-gray-400">
                      By entering your phone number and clicking &quot;Request
                      Information&quot;, you consent to receiving calls and
                      texts on behalf of via automatic dialing or other
                      technology about apartment listings that may fit your
                      needs. Your consent is not required to enter into a rental
                      transaction or make any purchase. Reply STOP to cancel any
                      time.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moveInDate">MOVE IN DATE</Label>
                    <Input
                      type="date"
                      id="moveInDate"
                      name="moveInDate"
                      value={formData.moveInDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      name="minPrice"
                      placeholder="MIN PRICE"
                      value={formData.minPrice}
                      onChange={handleInputChange}
                    />
                    <Input
                      type="number"
                      name="maxPrice"
                      placeholder="MAX PRICE"
                      value={formData.maxPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Textarea
                    name="notes"
                    placeholder="NOTES"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#c3d42c] text-white hover:bg-[#879228]"
                  >
                    REQUEST INFORMATION
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ListingDetails;
