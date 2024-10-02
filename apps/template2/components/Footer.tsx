import React from "react";
import { Whisper } from "next/font/google";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { fetchData } from "../services/sanity";

const whisper = Whisper({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Footer = async () => {
  const footerData = await fetchData();

  return (
    <footer className="bg-foreground py-10 text-white">
      <div className="container mx-auto space-y-6 px-4 text-center md:space-y-3">
        {/* Heading */}
        <h2
          className={`text-5xl md:text-7xl ${whisper.className} text-[#b99f8e]`}
        >
          The Lifestyle You Deserve
        </h2>

        {/* Contact Info */}
        <div className="space-y-4 md:space-y-2">
          {/* <div className="flex justify-center space-x-4">
            <img
              src="https://medialibrarycfo.entrata.com/3282/MLv3/9/36/2023/01/27/033231/63d450ff611d48.93631019395.png"
              alt="Evidence Enterprises"
              className="h-6 md:h-8"
            />
            <img
              src="https://medialibrarycfo.entrata.com/3282/MLv3/9/36/2023/01/27/033328/63d45138eed4d1.28384460219.png"
              alt="Brilliant Properties"
              className="h-6 md:h-8"
            />
          </div> */}
          <div className="font-bold capitalize text-[#b99f8e]">Contact</div>
          <p className="text-sm md:text-base">
            {footerData?.name} {footerData?.contact?.address}
          </p>
          <p className="text-sm md:text-base">
            p: {footerData?.contact?.phoneNumber} &nbsp;|&nbsp; e:{" "}
            {footerData?.contact?.email}
          </p>
        </div>

        {/* Office Hours */}
        <div>
          <div className="mb-2 font-bold capitalize text-[#b99f8e]">
            Office Hours
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 md:grid-cols-7 md:text-sm">
            {footerData?.contact?.officeHours?.map(
              (hours: any, index: number) => <div key={index}>{hours}</div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        {/* <div>
          <div className="mb-2 font-bold capitalize text-[#b99f8e]">More Info</div>
          <div className="space-y-2 sm:space-x-8 sm:space-y-0">
            {footerData?.navbar?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block hover:underline sm:inline-block"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div> */}

        {/* Social Links */}
        <div>
          <div className="mb-2 font-bold capitalize text-[#b99f8e]">
            Be Social
          </div>
          <div className="space-x-4">
            {footerData?.contact?.social?.facebook && (
              <a
                href={footerData.contact.social.facebook}
                className="bg-muted-foreground inline-block rounded-full p-2"
              >
                <FaFacebookF />
              </a>
            )}
            {footerData?.contact?.social?.twitter && (
              <a
                href={footerData.contact.social.twitter}
                className="bg-muted-foreground inline-block rounded-full p-2"
              >
                <RiTwitterXFill />
              </a>
            )}
            {footerData?.contact?.social?.youtube && (
              <a
                href={footerData.contact.social.youtube}
                className="bg-muted-foreground inline-block rounded-full p-2"
              >
                <FaYoutube />
              </a>
            )}
            {footerData?.contact?.social?.instagram && (
              <a
                href={footerData.contact.social.instagram}
                className="bg-muted-foreground inline-block rounded-full p-2"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </div>

        {/* Legal Links */}
        <div className="space-y-2 text-xs text-gray-400">
          <div className="flex flex-wrap justify-center space-x-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="hover:underline">
              Accessibility Statement
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>
          <p>
            &copy;2024 {footerData?.name || "Company Name"}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
