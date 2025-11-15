import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "/src/assets/letsbg.png";
import logo from "/src/assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Letus = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1.2,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative text-center space-y-8 bg-cover bg-center bg-no-repeat py-10 px-6  sm:px-12 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Logo */}
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-12 h-12  sm:w-20 sm:h-20" />
      </div>

      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl bar     px-4 sm:px-0">
        Let us Bring your Ideas to Life in the Digital World.
      </h1>

      {/* Paragraph */}
      <p className="text-gray-300  mx-auto px-4 sm:px-0 text-base sm:text-lg">
        No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
      </p>

      {/* Button */}
      <button className="bg-[#9EFF00] text-black py-3 px-7 sm:px-10 rounded-md font-semibold text-lg hover:brightness-110 transition duration-300 select-none">
        Start Project
      </button>
    </div>
  );
};

export default Letus;
