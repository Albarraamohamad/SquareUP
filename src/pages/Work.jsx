import React from "react";
import { motion } from "framer-motion";

import bg from "/src/assets/whybg.png";
import img from "/src/assets/Image.png";
import img1 from "/src/assets/Image-1.png";
import img2 from "/src/assets/Image-2.png";
import img3 from "/src/assets/Image-3.png";
import img4 from "/src/assets/Image-4.png";
import img5 from "/src/assets/Image-5.png";
import img6 from "/src/assets/Image-6.png";
import img7 from "/src/assets/Image-7.png";
import img8 from "/src/assets/Image-8.png";
import img9 from "/src/assets/Image-9.png";
import Letus from "../components/Letus";
import Footer from "../components/Footer";
// ...other imports

const projects = [
  {
    title: "E-Commerce Platform for Fashion Hub",
    imageSrc: img,
    subtitle: "Chic Boutique",
    url: "https://www.chicboutique.com",
    description:
      "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img1,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
   {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img2,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img3,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img4,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img5,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img6,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img7,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img8,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    imageSrc: img9,
    subtitle: "HungryBites",
    url: "https://www.hungrybites.com",
    description:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  // Add additional projects...
];

export default function SquareUpProjects() {
  // For simplicity, detect desktop right here
  const isDesktop = window.innerWidth >= 768;

  const imageVariantsDesktop = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const imageVariantsMobile = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const textVariantsDesktop = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const textVariantsMobile = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div>
      {/* ================== Our Services Hero (Top-most div) ================== */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-16 mt-[72px] "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />
        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl bar sm:text-3xl mb-5 leading-tight text-white">
            Our Services
          </h1>
          <p className="text-lg sm:text-base opacity-90 leading-relaxed text-white">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* ================== Main Content Below Hero ================== */}
      <div className="bg-[#121212] min-h-screen overflow-x-hidden px-2 md:px-8 py-12 max-w-7xl mx-auto text-gray-300 font-sans">
        {/* Header */}
        <motion.header
          className="mb-10 border-b border-gray-700 pb-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-3xl font-bold mb-3">At SquareUp</h1>
          <p className="text-gray-400 max-w-lg">
            We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
          </p>
        </motion.header>

        {/* Subheader */}
        <motion.div
          className="mb-8 max-w-max bg-gray-800 px-4 py-1 rounded-md text-gray-400 text-sm select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Here are ten examples of our notable works:
        </motion.div>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-700 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {projects.map(({ title, imageSrc, subtitle, url, description }, idx) => (
            <motion.article
              key={idx}
              className="pt-8 md:pt-10 px-0 md:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.3 }}
            >
              <h2 className="text-gray-400 text-lg mb-4">{title}</h2>

              <motion.div
                className="project-image rounded-lg overflow-hidden shadow-lg mb-6"
                variants={isDesktop ? imageVariantsDesktop : imageVariantsMobile}
              >
                <img
                  src={imageSrc}
                  alt={`${subtitle} project screenshot`}
                  className="w-full object-cover rounded-md max-h-64"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="project-text"
                variants={isDesktop ? textVariantsDesktop : textVariantsMobile}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">{subtitle}</h3>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${subtitle} website`}
                    className="inline-flex items-center bg-[#303030] rounded-md p-1 hover:bg-green-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                <code
                  className="bg-[#1c1c1c] px-3 py-1 rounded-md text-sm inline-block mb-4 select-all"
                  style={{ overflowWrap: "break-word" }}
                >
                  {url}
                </code>

                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                  {description}
                </p>
              </motion.div>
              
            </motion.article>
          ))}
         
        </section>
       
      </div>
        <Letus/>
        <Footer/>
    </div>
  );
}
