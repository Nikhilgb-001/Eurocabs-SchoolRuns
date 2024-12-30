import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-inherit">
      <div className="max-w-screen-xl mx-auto py-10 flex flex-col md:flex-row gap-10 md:gap-32">
        <div className="basis-1/2 flex justify-center items-center gap-4">
          <h1 className="text-[3rem] md:text-[11.5rem] tracking-tight font-semibold leading-none">
            Eurocabs.
          </h1>
        </div>
        <div className="basis-1/2 flex flex-wrap gap-10">
          <div className="w-full sm:w-1/2 md:basis-1/3">
            <h4 className="mb-6 text-zinc-500 capitalize font-bold">About</h4>
            {[
              "About",
              "Accounts",
              "FAQs",
              "Airports",
              "Prices App",
              "Sitemap",
            ].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-600 text-sm font-semibold capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="w-full sm:w-1/2 md:basis-1/3">
            <h4 className="mb-6 text-zinc-500 font-bold capitalize">
              Services
            </h4>
            {[
              "Services",
              "Accounts",
              "FAQs",
              "Airports",
              "Prices App",
              "Sitemap",
            ].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-600 text-sm font-semibold capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="w-full sm:w-1/2 md:basis-1/3">
            <h4 className="mb-6 text-zinc-500 capitalize font-bold ">Legal</h4>
            {[
              "Legal",
              "Accounts",
              "FAQs",
              "Airports",
              "Prices App",
              "Sitemap",
            ].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-600 text-sm font-semibold capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="w-full sm:w-1/2 md:w-full mt-6 flex gap-4">
            <a href="#" className="text-zinc-200 hover:text-zinc-400 ease-linear delay-75">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-zinc-200 hover:text-zinc-400 ease-linear delay-75">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-zinc-200 hover:text-zinc-400 ease-linear delay-75">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-zinc-200 hover:text-zinc-400 ease-linear delay-75">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
