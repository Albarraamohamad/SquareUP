import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import gsap from 'gsap';

const Footer = () => {
  const containerRef = useRef(null);
  const navItemRefs = useRef([]);
  const bottomRefs = useRef([]);

  const navItems = ["Home", "Services", "Work", "Process", "About", "Careers"];

  useEffect(() => {
    // Animate container opacity and position
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Stagger navigation items fade in and up
    gsap.fromTo(
      navItemRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.3 }
    );

    // Animate bottom section items similarly
    gsap.fromTo(
      bottomRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.9 }
    );
  }, []);

  return (
    <footer
      className="bg-[#121212] text-white pt-10 px-4 sm:px-6 md:px-12"
      ref={containerRef}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Square Up Logo" className="w-10 h-10" />
          <h1 className="bar text-xl">Square Up</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bar text-[16px]">
          {navItems.map((item, index) => (
            <div
              key={item}
              ref={el => navItemRefs.current[index] = el}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-3px] w-0 h-1 bg-[#9EFF00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="flex flex-col md:flex-row md:justify-between mt-10 text-gray-400 text-sm"
      >
        {/* Left Contacts */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
          {/* Email */}
          <div className="flex items-center space-x-2 contact-item" ref={el => bottomRefs.current[0] = el}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9EFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4m8 4v-8a2 2 0 00-2-2h-4l-2-2H8a2 2 0 00-2 2v8m12 4H4a2 2 0 01-2-2v-8a2 2 0 012-2h1" />
            </svg>
            <span>hello@squareup.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 contact-item" ref={el => bottomRefs.current[1] = el}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9EFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 5v4a2 2 0 002 2h3l3 4v5a2 2 0 002 2h2a2 2 0 002-2v-5l3-4h3a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2z" />
            </svg>
            <span>+91 91813 23 2309</span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 contact-item" ref={el => bottomRefs.current[2] = el}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9EFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6 9.5 7.12 9.5 8.5 10.62 11 12 11zM12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
            </svg>
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Right Copyright */}
        <div className="text-xs text-gray-500 mt-6 md:mt-0 copyright select-text mb-10" ref={el => bottomRefs.current[3] = el}>
          © {new Date().getFullYear()} SquareUp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
