import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import bg from "/src/assets/bg.png";
import img1 from "/src/assets/Card.png";
import img2 from "/src/assets/Card (1).png";
import img3 from "/src/assets/Card (2).png";
import img4 from "/src/assets/Card (3).png";
import img5 from "/src/assets/Card (4).png";
import img6 from "/src/assets/Card (5).png";
import Services1 from "../components/Services1";
import Why from "../components/Why";
import Clients from "../components/Clients";
import Qestions from "../components/Qestions";
import Form from "../components/Form";
import Footer from "../components/Footer";


const Home = () => {
  const cards = [img1, img2, img3, img4, img5, img6];

  // Refs for animation
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.5 },
    });

    // Background starts blurred
    gsap.set(bgRef.current, { filter: "blur(12px)" });

    // Background becomes clear
    tl.to(
      bgRef.current,
      {
        filter: "blur(0px)",
        duration: 1.6,
        ease: "power3.out",
      },
      0
    );

    // Title animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)" },
      "-=1.0"
    );

    // Subtitle animation
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)" },
      "-=1.0"
    );

    // Buttons animation
    tl.fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);

  const renderCard = (img, index) => (
    <motion.div
      key={index}
      className="min-w-[180px] sm:min-w-[200px] md:min-w-[280px] lg:min-w-[200px] bg-[#1A1A1A] cursor-pointer text-center overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-center mb-4 mt-5">
        <img src={img} alt="Client" className="w-full object-contain" />
      </div>
    </motion.div>
  );

  return (
  <div>
      <div className="text-white relative overflow-hidden">
      {/* Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center sm:px-10 px-3 text-center">
        <div className="max-w-4xl">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-7xl bar"
          >
            A Digital Product Studio <br /> that will Work
          </h1>

          <div
            ref={subtitleRef}
            className="bg-white/5 backdrop-blur-md bar border border-white/20 rounded-lg p-4 sm:p-6 shadow-lg mt-8 sm:mt-10 text-sm sm:text-base leading-relaxed"
          >
            <h1>
              For{" "}
              <span className="bg-white/10 py-1 px-2 rounded-md">
                Startups
              </span>
              ,{" "}
              <span className="bg-white/10 py-1 px-2 rounded-md">
                Enterprise leaders
              </span>
              ,{" "}
              <span className="bg-white/10 py-1 px-2 rounded-md">
                Media & Publishers
              </span>
              , <span className="font-semibold">and</span>{" "}
              <span className="bg-white/10 py-1 px-2 rounded-md">
                Social Good
              </span>
            </h1>
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10"
          >
            <Link
              to="/work"
              className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 shadow-lg hover:bg-white/10 transition duration-300"
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              className="bg-[#9EFF00] text-black rounded-md py-3 px-8 hover:bg-[#aaff00]/90 transition font-semibold shadow-[0_0_20px_rgba(158,255,0,0.4)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Cards scroller */}
    
    </div>
      <div className="bg-[#1A1A1A] overflow-hidden relative z-10">
        <motion.div
          className="flex gap-2 whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, setIndex) =>
            cards.map((img, cardIndex) =>
              renderCard(img, `${setIndex}-${cardIndex}`)
            )
          )}
        </motion.div>
      </div>
             <Services1/>
             <Why/>
             <Clients/>
             <Qestions/>
             <Form/>
            <Footer/>

  </div>
  );
};

export default Home;
