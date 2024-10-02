"use client";

import React, { useEffect, useState } from "react";
import { Montserrat, Whisper } from "next/font/google";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@repo/ui";
import Nav from "../../components/Nav";

const whisper = Whisper({ weight: "400", subsets: ["latin"], display: "swap" });

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

const TourOption = ({ title, description }: any) => (
  <div className="mb-4 cursor-pointer rounded-lg bg-white p-4 shadow-md hover:bg-gray-50">
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const useFadeInAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

interface Props {
  data: any;
}

export default function Landing({ data }: Props) {
  const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false);
  const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0);
  const [currentNeighborhoodIndex, setCurrentNeighborhoodIndex] = useState(0);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const { ref: refYouFoundUs, controls: controlsYouFoundUs } =
    useFadeInAnimation();
  const { ref: refCloseTo, controls: controlsCloseTo } = useFadeInAnimation();
  const { ref: refNews, controls: controlsNews } = useFadeInAnimation();
  const { ref: refGallery, controls: controlsGallery } = useFadeInAnimation();
  const { ref: refMeetUs, controls: controlsMeetUs } = useFadeInAnimation();
  const { ref: refFloorPlans, controls: controlsFloorPlans } =
    useFadeInAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % (data?.hero?.images?.length || 1)
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [data?.hero?.images]);

  const openGalleryDialog = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryDialogOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % (data?.gallery?.categories?.[0]?.images?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex -
          1 +
          (data?.gallery?.categories?.[0]?.images?.length || 1)) %
        (data?.gallery?.categories?.[0]?.images?.length || 1)
    );
  };

  const handleNextNews = () => {
    setCurrentNewsIndex(
      (prevIndex) => (prevIndex + 1) % (data?.news?.newsItems?.length || 1)
    );
  };

  const handleNextFloorPlans = () => {
    setCurrentFloorPlanIndex(
      (prevIndex) => (prevIndex + 1) % (data?.floorPlans?.plans?.length || 1)
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f4ef]">
      <div className="flex h-screen flex-col">
        {data?.notification && (
          <section className="flex items-center justify-center bg-[#f4f4ef] py-3">
            {data?.notification}
          </section>
        )}

        {/* Banner Section */}
        <section className="relative h-screen overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentBannerIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={
                  data?.hero?.images?.[currentBannerIndex]
                    ? data.hero.images[currentBannerIndex]
                    : "/placeholder.jpg"
                }
                layout="fill"
                objectFit="cover"
                alt={`Banner ${currentBannerIndex + 1}`}
              />
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
          >
            <div className="mb-8 opacity-60">
              <Image
                src={
                  data?.hero?.logo ? data.hero.logo : "/placeholder-logo.png"
                }
                width={200}
                height={100}
                objectFit="contain"
                alt="Company Logo"
              />
            </div>
            <h1
              className={`mb-4 text-4xl font-bold md:text-7xl ${montserratBold.className} opacity-60`}
            >
              {data?.about?.heading || "Welcome Home"}
            </h1>
            <p
              className={`mb-8 text-sm uppercase ${montserratLight.className}`}
            >
              <>{data?.about?.description || "Discover your new home"}</>
            </p>
            <div className="flex space-x-4">
              <a href="/availability">
                <Button className="bg-primary" size="lg">
                  Explore
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Navigation */}
        <div>
          <Nav data={data} />
        </div>
      </div>

      {/* You Found Us Section */}
      <motion.section
        ref={refYouFoundUs}
        animate={controlsYouFoundUs}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="bg-[#f4f4ef] py-32"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mt-12 w-full md:mt-0 md:w-1/2 md:pl-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`font-script mb-2 font-serif text-5xl italic text-[#b3a083] md:text-7xl ${whisper.className}`}
              >
                You found us
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mb-8 text-4xl font-bold md:text-5xl"
              >
                {data?.community?.heading || "Welcome to this Community"}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mb-6 w-3/4 text-sm !leading-8 text-gray-600 md:text-lg"
              >
                {data?.community?.description ||
                  "Discover our vibrant community and make it your home."}
              </motion.div>
            </div>

            <div className="relative flex w-full justify-end md:w-1/2">
              <div className="relative h-80 w-3/4 md:h-80">
                <Image
                  src={
                    data?.community?.images?.[0]
                      ? data.community.images[0]
                      : "/placeholder.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="Community feature"
                />
              </div>
              <div className="absolute -left-0 bottom-0 -mb-8 -mr-4 h-40 w-1/2 md:-left-20 md:-mb-12 md:-mr-8 md:h-80">
                <Image
                  src={
                    data?.community?.images?.[1]
                      ? data.community.images[1]
                      : "/placeholder.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="Community feature"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Close To Everything Section */}
      {data?.neighbourhood && (
        <motion.section
          ref={refCloseTo}
          animate={controlsCloseTo}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
          className="bg-foreground text-primary-foreground pt-16"
        >
          <div className="container mx-auto px-4">
            <h2
              className={`mb-8 text-center text-4xl font-bold md:text-5xl ${montserratBold.className}`}
            >
              Close To Everything
            </h2>
            <p
              className={`mx-auto mb-8 max-w-3xl text-center text-xs uppercase text-[#b99f8e] ${montserratLight.className}`}
            >
              {data.neighbourhood.description ||
                "Discover the convenience of our location."}
            </p>
            <div className="mb-8 flex justify-center">
              <Button
                className="bg-[#b99f8e] hover:bg-[#bca595]"
                onClick={() =>
                  setCurrentNeighborhoodIndex(
                    (prev) =>
                      (prev + 1) % (data.neighbourhood.images?.length || 1)
                  )
                }
              >
                Next
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {data.neighbourhood.images
                ?.slice(currentNeighborhoodIndex, currentNeighborhoodIndex + 4)
                .map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`group relative h-80 overflow-hidden ${
                      index === 0 ? "" : "hidden md:block"
                    }`}
                  >
                    <Image
                      src={item.image ? item.image : "/placeholder.jpg"}
                      layout="fill"
                      objectFit="cover"
                      alt={item.title || "Neighborhood feature"}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 p-6 text-white transition-all duration-300">
                      <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                        <h3 className="mb-2 text-2xl font-bold">
                          {item.title || "Feature"}
                        </h3>
                        <p className="text-sm">
                          {item.description || "Description unavailable"}
                        </p>
                      </div>
                      <Button
                        className="mt-4 w-fit bg-[#b99f8e] opacity-0 transition-all duration-300 hover:bg-[#bca595] group-hover:opacity-100"
                        size="sm"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Current News Section */}
      {data?.news?.newsItems && data.news.newsItems.length > 0 && (
        <motion.section
          ref={refNews}
          animate={controlsNews}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4f4ef] py-16"
        >
          <div className="container mx-auto px-4">
            <div className="grid items-center justify-between gap-8 lg:grid-cols-3 lg:gap-4">
              {/* Left Image */}
              <div className="relative h-[250px] w-full lg:h-[500px] lg:w-auto">
                <Image
                  src={
                    data?.news?.images?.[0]
                      ? data.news.images[0]
                      : "/placeholder.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="News feature"
                  className="rounded-lg"
                />
              </div>

              {/* Center Content */}
              <div className="py-10 text-center lg:py-32">
                <h3
                  className={`font-script mb-2 text-5xl text-[#b99f8e] md:text-7xl ${whisper.className}`}
                >
                  Current
                </h3>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">News</h2>
                <div className="mx-auto min-h-48 md:w-3/4">
                  <p className="mb-2 text-sm text-gray-600 md:text-lg">
                    {data.news.newsItems[currentNewsIndex]?.date ||
                      "Date unavailable"}
                  </p>
                  <p className="mb-2 text-sm font-semibold md:text-lg">
                    {data.news.newsItems[currentNewsIndex]?.description ||
                      "Content unavailable"}
                  </p>
                </div>
                <Button
                  className="bg-[#b99f8e] hover:bg-[#bca595]"
                  onClick={handleNextNews}
                >
                  NEXT
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative h-[250px] w-full lg:h-[500px] lg:w-auto">
                <Image
                  src={
                    data?.news?.images?.[1]
                      ? data.news.images[1]
                      : "/placeholder.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="News feature"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Gallery Section */}
      <motion.section
        ref={refGallery}
        animate={controlsGallery}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="bg-foreground py-16 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-5xl font-bold">
            {data?.gallery?.heading || "Gallery"}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-xs uppercase text-[#b99f8e]">
            {data?.gallery?.description || "Explore our beautiful spaces"}
          </p>
          <div className="grid auto-rows-[200px] grid-cols-2 gap-2 md:grid-cols-4">
            {data?.gallery?.categories?.[0]?.images?.map(
              (image: any, index: number) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden 
                     ${index === 2 ? "row-span-2 md:row-span-1" : ""}
                    ${index === 3 ? "col-span-1 row-span-2" : ""}
                    ${index === 4 ? "col-span-2 row-span-2" : ""}
                    ${index > 4 ? "col-span-1" : ""}
                     ${index === 7 ? "col-span-2 md:col-span-1" : ""}`}
                  onClick={() => openGalleryDialog(index)}
                >
                  <Image
                    src={image ? image : "/placeholder.jpg"}
                    alt="Gallery image"
                    layout="fill"
                    objectFit="cover"
                    className="cursor-pointer rounded-sm transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* Meet Us Section */}
      <motion.section
        ref={refMeetUs}
        animate={controlsMeetUs}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="bg-[#f4f4ef] py-16"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left side images */}
            <div className="relative flex w-full justify-start md:w-1/2">
              <div className="relative h-80 w-3/4">
                <Image
                  src={
                    data?.schedule?.images?.[0]
                      ? data.schedule.images[0]
                      : "/placeholder.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="Schedule feature"
                />
              </div>
              <div className="absolute bottom-0 right-4 -mb-8 -mr-4 h-40 w-1/2 md:right-0 md:-mb-12 md:-mr-8 md:h-56">
                <Image
                  src={
                    data?.schedule?.images?.[1]
                      ? data.schedule.images[1]
                      : "/placeholder.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="Schedule feature"
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full py-32 md:w-1/2 md:pl-12">
              <h3
                className={`mb-2 text-5xl md:text-7xl ${whisper.className} text-[#b99f8e]`}
              >
                Meet Us
              </h3>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                {data?.schedule?.heading || "Schedule A Tour"}
              </h2>
              <p className="mb-6 w-3/4 text-sm text-gray-600 md:w-full md:text-lg">
                {data?.schedule?.description ||
                  "Want a closer look? Our friendly staff would love to give you a tour."}
              </p>
              <Button
                className="bg-[#b99f8e] hover:bg-[#bca595]"
                onClick={() => setIsAppointmentDialogOpen(true)}
              >
                SET APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Floor Plans Section */}
      <motion.section
        ref={refFloorPlans}
        animate={controlsFloorPlans}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="bg-foreground text-primary-foreground py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-5xl font-bold">
            {data?.floorPlans?.heading || "Floor Plans"}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-xs uppercase text-[#b99f8e]">
            {data?.floorPlans?.description ||
              "Explore our available floor plans"}
          </p>
          <div className="mb-8 flex justify-center">
            <Button
              className="bg-[#b99f8e] hover:bg-[#bca595]"
              onClick={handleNextFloorPlans}
            >
              VIEW NEXT
            </Button>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data?.floorPlans?.plans
              ?.slice(currentFloorPlanIndex, currentFloorPlanIndex + 4)
              .map((floorPlan: any, index: number) => (
                <div
                  key={index}
                  className={`group relative h-80 overflow-hidden bg-white ${
                    index === 0 ? "" : "hidden md:block"
                  }`}
                >
                  <Image
                    src={
                      floorPlan?.image ? floorPlan.image : "/placeholder.jpg"
                    }
                    layout="fill"
                    objectFit="contain"
                    alt={floorPlan?.title || "Floor plan"}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-6 text-white transition-all duration-300">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <h3 className="mb-2 text-2xl font-bold">
                        {floorPlan?.title || "Floor Plan"}
                      </h3>
                      <p className="text-sm">
                        Beds / Baths: {floorPlan?.bedrooms || 0} /{" "}
                        {floorPlan?.bathrooms || 0}
                        <br />
                        Square footage: {floorPlan?.squareFeet || "N/A"}
                        <br />
                        Rent: Starting at $
                        {floorPlan?.ratePerMonth?.toLocaleString() || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </motion.section>

      <Dialog open={isGalleryDialogOpen} onOpenChange={setIsGalleryDialogOpen}>
        <DialogContent className="flex h-[90vh] items-center justify-center p-0 sm:max-w-[90vw]">
          <div className="relative h-full w-full">
            <Image
              src={
                data?.gallery?.categories?.[0]?.images?.[currentImageIndex]
                  ? data.gallery.categories[0].images[currentImageIndex]
                  : "/placeholder.jpg"
              }
              alt="Gallery image"
              layout="fill"
              objectFit="contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-75"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-75"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAppointmentDialogOpen}
        onOpenChange={setIsAppointmentDialogOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Tour Type</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <h2 className="mb-4 text-lg">
              Which type of tour would you like to schedule?
            </h2>
            <TourOption
              title="Agent-Accompanied"
              description="We will accompany you on a tour of our property and model units to answer any questions you may have."
            />
            <TourOption
              title="Self-Guided"
              description="Take a self-guided tour through designated units and areas of the property. Our leasing agents will be happy to answer any questions at the conclusion of your tour."
            />
            <TourOption
              title="Virtual"
              description="Schedule a time for a virtual tour with a leasing agent who will walk you through the property and answer any questions you may have."
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
