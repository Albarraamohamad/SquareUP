import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bg from "/src/assets/whybg.png";
import icon1 from "/src/assets/whyicon.png";
import icon2 from "/src/assets/whyicon2.png";
import icon3 from "/src/assets/whyicon3.png";
import icon4 from "/src/assets/whyicon4.png";

gsap.registerPlugin(ScrollTrigger);

const Why = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      icon: icon1,
      title: "Expertise",
      text: `Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.`,
    },
    {
      icon: icon2,
      title: "Client-Centric Approach",
      text: `We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.`,
    },
    {
      icon: icon3,
      title: "Results-Driven Solutions",
      text: `Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.`,
    },
    {
      icon: icon4,
      title: "Collaborative Partnership",
      text: `We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.`,
    },
  ];

  useEffect(() => {
    // ---------------- HERO SOFT ENTER ANIMATION (NO UP/DOWN LOOP) ----------------
    if (heroRef.current) {
      const h1 = heroRef.current.querySelector("h1");
      const p = heroRef.current.querySelector("p");

      gsap.fromTo(
        [h1, p],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // ---------------- CARDS RELAXED APPEAR ----------------
    if (cardsRef.current) {
      const cardEls = cardsRef.current.querySelectorAll(".card");

      gsap.fromTo(
        cardEls,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="text-white bg-[#1A1A1A]">
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="relative bg-cover bg-center bg-no-repeat py-20 text-center px-4 sm:px-6 md:px-8"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative mx-auto">
          <h1 className="bar text-4xl mb-2 relative z-10">
            Why Choose SquareUp?
          </h1>

          <p className="relative z-10 px-2 text-base sm:text-lg mx-auto">
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div
        ref={cardsRef}
        className="bg-[#1A1A1A] text-white py-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {cards.map(({ icon, title, text }, i) => (
          <div
            key={i}
            className={`card ${
              i % 2 === 0
                ? "border-b md:border-r md:border-b-0 border-gray-600 pb-5 md:pb-0 pr-0 md:pr-5"
                : "border-b md:border-b-0 border-gray-600 pb-5 md:pb-0 pl-0 md:pl-5"
            }`}
          >
            <div className="flex items-center gap-5 mb-4">
              <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
              <h1 className="bar text-xl">{title}</h1>
            </div>

            <p className="text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
