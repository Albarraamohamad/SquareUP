import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import img from "/src/assets/logo.png";
import { Menu, X } from "lucide-react"; // for modern icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Cinematic navbar entrance
    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, rotation: -20 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8 },
        "-=0.8"
      )
      .fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-md text-white shadow-lg"
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center space-x-2">
          <img src={img} alt="logo" className="w-10 h-10" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 bar text-[16px]">
          {["Home", "Services", "Work", "Process", "About", "Careers"].map(
            (item, index) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                ref={(el) => (linksRef.current[index] = el)}
                className="relative group transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-3px] w-0 h-2 bg-[#9EFF00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* Contact Button */}
        <div ref={buttonRef} className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#9EFF00] text-black bar rounded-md py-3 px-6 hover:bg-[#b3ff2e] transition-colors duration-300 shadow-[0_0_15px_rgba(158,255,0,0.3)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className="text-[#9EFF00]" />
          ) : (
            <Menu size={28} className="text-[#9EFF00]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-[#111]/95 backdrop-blur-md absolute w-full overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
          {["Home", "Services", "Work", "Process", "About", "Careers"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#9EFF00] transition-colors"
              >
                {item}
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#9EFF00] text-black bar rounded-md py-3 px-8 hover:bg-[#b3ff2e] transition-colors duration-300 shadow-[0_0_15px_rgba(158,255,0,0.3)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
