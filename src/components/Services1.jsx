import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bg from '/src/assets/servicesbg.png';
import icon1 from '/src/assets/Icon.png';
import icon2 from '/src/assets/Icon (1).png';
import icon3 from '/src/assets/Icon (2).png';

gsap.registerPlugin(ScrollTrigger);

const Services1 = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const cards = [
    {
      icon: icon1,
      title: 'Design',
      text: `At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`
    },
    {
      icon: icon2,
      title: 'Engineering',
      text: `Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.`
    },
    {
      icon: icon3,
      title: 'Project Management',
      text: `Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.`
    }
  ];

  useEffect(() => {
    // Animate the hero text on scroll
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(paragraphRef.current, 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out', 
          delay: 0.5,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    // Animate the cards on scroll (already scroll-triggered)
    const elems = cardsRef.current.filter(Boolean);
    if (elems.length) {
      gsap.fromTo(
        elems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elems[0],
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div className="text-white relative overflow-hidden">
      {/* TOP BG SECTION */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1
            ref={headingRef}
            className="text-5xl sm:text-3xl bar mb-5 leading-tight"
          >
            Our Services
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg sm:text-base opacity-90 leading-relaxed"
          >
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="bg-[#1A1A1A] flex flex-col md:flex-row justify-between py-10 px-5 md:px-5 space-y-5 md:space-y-0">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={el => (cardsRef.current[i] = el)}
            className={`
              w-full md:max-w-sm px-1 md:px-5 space-y-5 flex-col sm:flex-row sm:items-center gap-3 h-full
              border-b md:border-b-0 md:border-r border-gray-600
              ${i === cards.length - 1 ? 'border-b-0 md:border-r-0' : ''}
            `}
          >
            {/* ICON + TITLE flex in small screens */}
            <div className="flex-col sm:flex-row sm:items-center gap-3">
              <img src={card.icon} alt="" className="w-12 h-12" />
              <h1 className="bar text-2xl mt-5">{card.title}</h1>
            </div>

            <p className="bar w-full text-sm">{card.text}</p>
            <div>
              <button className="bg-[#262626] px-30 rounded-md py-3 mt-5 mb-10">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services1;
