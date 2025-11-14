import React from "react";
import { motion } from "framer-motion";
import bg from '/src/assets/Clientsbg.png';

import avatar1 from '/src/assets/Profile.png';
import avatar2 from '/src/assets/Profile-1.png';
import avatar3 from '/src/assets/Profile-2.png';
import avatar4 from '/src/assets/Profile-3.png';
import avatar5 from '/src/assets/Profile-4.png';
import avatar6 from '/src/assets/Profile-5.png';

const cards = [
  {
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    text: "Their team’s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn’t be happier.",
    name: "John Smith",
    role: "CEO of Chic Boutique",
    avatar: avatar1,
  },
  {
    title: "Working with SquareUp was a breeze.",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The delivery exceeded expectations, and our customers love the seamless ordering experience.",
    name: "Sarah Johnson",
    role: "Founder of HungryBites",
    avatar: avatar2,
  },
  {
    title: "SquareUp developed a comprehensive booking and reservation system.",
    text: "Their attention to detail and user-friendly platform improved operations and enhanced our client event experiences.",
    name: "Mark Thompson",
    role: "CEO of EventMasters",
    avatar: avatar3,
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow.",
    text: "They delivered a custom solution that increased productivity and reduced errors significantly.",
    name: "Laura Adams",
    role: "COO of ProTech Solutions",
    avatar: avatar4,
  },
  {
    title: "SquareUp designed a captivating real-estate web portal.",
    text: "The platform is visually appealing and easy to navigate, helping buyers find homes effortlessly.",
    name: "Michael Anderson",
    role: "Founder of Dream Homes Realty",
    avatar: avatar5,
  },
  {
    title: "FitLife Tracker wanted a fitness mobile app — and SquareUp delivered.",
    text: "The intuitive app keeps users motivated and helps them achieve their fitness goals.",
    name: "Emily Turner",
    role: "CEO of FitLife Tracker",
    avatar: avatar6,
  },
];

const fadeRelaxed = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Clients = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative text-white bg-cover bg-center bg-no-repeat py-20 text-center px-4 sm:px-6 md:px-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="bar text-4xl mb-5">What our Clients say About us</h1>
        <p>
          At SquareUp, we take pride in delivering exceptional digital products
          and services that drive success for our clients. Here's what some of
          our satisfied clients have to say about their experience working with us.
        </p>
      </div>


      {/* Clients Grid */}
      <div className="bg-[#1A1A1A] text-white py-20 px-2 sm:px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeRelaxed}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800 transition-all duration-300"
            >
              <h2 className="text-[#C7F36A] text-lg sm:text-xl font-semibold leading-snug mb-3">
                {c.title}
              </h2>

              <p className="opacity-90 leading-relaxed mb-6 text-sm sm:text-base">
                {c.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-5 bg-[#141414] p-3 sm:p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <img
                    src={c.avatar}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    alt={c.name}
                  />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">{c.name}</h4>
                    <p className="text-xs sm:text-sm opacity-70">{c.role}</p>
                  </div>
                </div>

                <button className="px-3 sm:px-4 py-2 bg-[#1E1E1E] border border-gray-700 rounded-lg text-xs sm:text-sm hover:bg-[#272727] transition">
                  Open Website
                </button>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Clients;
