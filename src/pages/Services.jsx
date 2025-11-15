import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "/src/assets/servicesbg.png";
import Footer from "../components/Footer";
import Letus from "../components/Letus";

gsap.registerPlugin(ScrollTrigger);

// Design Section Data (unchanged)
const designSections = [
  {
    title: "User Experience (UX) Design",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3h2l3 3m10 10h2l-3-3M7 7l10 10" />
          </svg>
        ),
        title: "User Research and Persona Development",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        title: "Information Architecture and Wireframing",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        ),
        title: "Interactive Prototyping and User Testing",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12h14M12 5v14M7 9l10 6" />
          </svg>
        ),
        title: "UI Design and Visual Branding",
      },
    ],
  },
  {
    title: "User Interface (UI) Design",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12l5-5v10l-5-5z" />
          </svg>
        ),
        title: "Intuitive and Visually Appealing Interface Design",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
        title: "Custom Iconography and Illustration",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5v14M7 12h10" />
          </svg>
        ),
        title: "Typography and Color Palette Selection",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
            <path d="M3 9h18" />
          </svg>
        ),
        title: "Responsive Design for Various Devices",
      },
    ],
  },
  {
    title: "Branding and Identity",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="5" />
          </svg>
        ),
        title: "Logo Design and Visual Identity Development",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            <path d="M8 12h8" />
          </svg>
        ),
        title: "Brand Strategy and Positioning",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 7v2m0 4v2m5-5h-2M7 12H5" />
          </svg>
        ),
        title: "Brand Guidelines and Style Guides",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="7" width="12" height="10" rx="2" ry="2" />
            <path d="M10 11h4M10 15h4" />
          </svg>
        ),
        title: "Marketing Collateral Design (Brochures, Business Cards, etc.)",
      },
    ],
  },
];

// Engineering Section Data (unchanged from previous)
const engineeringSections = [
  {
    title: "Web Development",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 18l6-6-6-6" />
            <path d="M8 6l-6 6 6 6" />
          </svg>
        ),
        title: "Front-End Development (HTML, CSS, JavaScript)",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
            <path d="M7 10h10M7 14h6" />
          </svg>
        ),
        title: "Back-End Development (PHP, Python, Ruby)",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8M8 16h6" />
          </svg>
        ),
        title:
          "Content Management System (CMS) Development (WordPress, Drupal)",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12h18M12 3v18" />
          </svg>
        ),
        title: "E-Commerce Platform Development (Magento, Shopify)",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="7" y="3" width="10" height="18" rx="2" ry="2" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        ),
        title: "Native iOS and Android App Development",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 21V7h10v14H7z" />
            <path d="M11 7V5h2v2" />
          </svg>
        ),
        title: "Cross-Platform App Development (React Native, Flutter)",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        ),
        title: "App Prototyping and UI/UX Design Integration",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22c5-2 8-5.19 8-10a8 8 0 10-16 0c0 4.81 3 8 8 10z" />
            <path d="M14 10l-4 4m0-4l4 4" />
          </svg>
        ),
        title: "App Testing, Deployment, and Maintenance",
      },
    ],
  },
  {
    title: "Custom Software Development",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
            <path d="M7 7v10" />
          </svg>
        ),
        title: "Enterprise Software Development",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
            <path d="M7 12h10" />
          </svg>
        ),
        title: "Custom Web Application Development",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12h6" />
          </svg>
        ),
        title: "Integration with Third-Party APIs and Systems",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="8" width="12" height="8" rx="1" ry="1" />
          </svg>
        ),
        title: "Legacy System Modernization and Migration",
      },
    ],
  },
];


// Project Management Section Data

const projectManagementSections = [
  {
    title: "Project Planning and Scoping",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z" />
            <path d="M12 8V22" />
            <path d="M7 14H17" />
          </svg>
        ),
        title: "Requirements Gathering and Analysis",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 17V7C3 5.34315 4.34315 4 6 4H18C19.6569 4 21 5.34315 21 7V17" />
            <path d="M1 22H23" />
          </svg>
        ),
        title: "Project Roadmap and Timeline Development",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 7H15M12 5V19" />
            <path d="M8 12H16" />
          </svg>
        ),
        title: "Resource Allocation and Task Assignment",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2V22" />
            <path d="M4 12H20" />
            <path d="M7 7L17 17" />
            <path d="M17 7L7 17" />
          </svg>
        ),
        title: "Risk Assessment and Mitigation Strategies",
      },
    ],
  },
  {
    title: "Agile Development",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
            <path d="M7 7v10" />
          </svg>
        ),
        title: "Iterative Development and Sprints",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 10H16M10 14H14M12 7V17" />
          </svg>
        ),
        title: "Scrum or Kanban Methodology Implementation",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 12L16 12M8 16L16 16" />
            <circle cx="12" cy="8" r="2" />
          </svg>
        ),
        title: "Regular Progress Updates and Demos",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
            <path d="M15 15l4 4" />
          </svg>
        ),
        title: "Continuous Improvement and Feedback Incorporation",
      },
    ],
  },
  {
    title: "Quality Assurance and Testing",
    items: [
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 14l-3-3m0 0l3-3m-3 3h8" />
            <circle cx="16" cy="12" r="2" />
          </svg>
        ),
        title: "Test Planning and Execution",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        ),
        title: "Functional and Usability Testing",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 17l5-5 5 5" />
            <path d="M12 12v9" />
          </svg>
        ),
        title: "Performance and Security Testing",
      },
      {
        icon: (
          <svg
            className="w-8 h-8 text-[#9EFF00] neon-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16v-6l-6 6m-8-6v6l6-6" />
            <path d="M12 7v10" />
          </svg>
        ),
        title: "Bug Tracking and Issue Resolution",
      },
    ],
  },
];

const Services = () => {
  const designRefs = useRef([]);
  const engineeringRefs = useRef([]);
  const projectMgmtRefs = useRef([]);

  useEffect(() => {
    designRefs.current.forEach((section, i) => {
      if (section) {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 40 },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              id: `design-section-${i}`,
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    engineeringRefs.current.forEach((section, i) => {
      if (section) {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 40 },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              id: `engineering-section-${i}`,
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    projectMgmtRefs.current.forEach((section, i) => {
      if (section) {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 40 },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              id: `projectmgmt-section-${i}`,
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="text-white mt-[72px]">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-16"
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
          <h1 className="text-5xl bar sm:text-3xl mb-5 leading-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-base opacity-90 leading-relaxed">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* Design Section */}
      <section className="bg-[#121212] px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-white text-3xl mb-4 bar">Design</h2>
        <p className="text-gray-400 max-w-3xl mb-6 leading-relaxed">
          At Squareup, our design team is passionate about creating stunning,
          user-centric designs that captivate your audience and elevate your
          brand. We believe that great design is not just about aesthetics; it’s
          about creating seamless and intuitive user experiences.
        </p>
        <button
          className="mb-10 bg-[#1a1a1a] text-gray-400 text-sm px-4 py-2 rounded-md cursor-default select-none"
          disabled
        >
          Our design services include:
        </button>

        {designSections.map(({ title, items }, index) => (
          <div
            key={title}
            className="mb-16"
            ref={(el) => (designRefs.current[index] = el)}
          >
            <h3 className="text-gray-500 font-medium mb-6">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {items.map(({ icon, title }) => (
                <div
                  key={title}
                  className="flex items-start space-x-2 p-2 sm:p-4 rounded-md bg-[#1a1a1a]"
                >
                  <div className="flex justify-center items-center ">
                    {icon}
                  </div>
                  <p className="text-xs ">{title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Engineering Section */}
      <section className="bg-[#0f0f0f] px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-white text-3xl mb-4 font-semibold">Engineering</h2>
        <p className="text-gray-400 max-w-3xl mb-6 leading-relaxed text-sm">
          Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
        </p>
        <button
          disabled
          className="mb-10 bg-[#222] text-gray-400 text-sm px-4 py-2 rounded-md cursor-default select-none"
        >
          Our engineering services include:
        </button>

        {engineeringSections.map(({ title, items }, index) => (
          <div
            key={title}
            ref={(el) => (engineeringRefs.current[index] = el)}
            className="mb-16 border-t border-gray-800 pt-8 last:border-b last:border-gray-800"
          >
            <h3 className="text-gray-500 font-medium mb-6">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {items.map(({ icon, title }) => (
                <div
                  key={title}
                  className="flex items-start space-x-2 p-2 sm:p-4 rounded-md bg-[#1a1a1a]"
                >
                  <div className="flex justify-center items-center">
                    {icon}
                  </div>
                  <p className="text-xs text-gray-300">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Project Management Section */}
      <section className="bg-[#121212] px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-4">
          Project Management
        </h2>
        <p className="text-gray-400 max-w-3xl mb-6 leading-relaxed text-sm">
          Our experienced project management team ensures that your projects are
          delivered on time, within budget, and according to your
          specifications. We follow industry-standard methodologies and employ
          effective communication and collaboration tools to keep you informed
          throughout the development process.
        </p>
        <button
          disabled
          className="mb-10 bg-[#1a1a1a] text-gray-400 text-sm px-4 py-2 rounded-md cursor-default select-none"
        >
          Our project management services include:
        </button>

        {projectManagementSections.map(({ title, items }, index) => (
          <div
            key={title}
            className="mb-16 border-t border-gray-800 pt-8 last:border-b last:border-gray-800"
            ref={(el) => (projectMgmtRefs.current[index] = el)}
          >
            <h3 className="text-gray-500 font-medium mb-6">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {items.map(({ icon, title }) => (
                <div
                  key={title}
                  className="flex items-start space-x-2 p-2 sm:p-4 rounded-md bg-[#1a1a1a]"
                >
                  <div className="flex justify-center items-center">
                    {icon}
                  </div>
                  <p className="text-xs  text-gray-300">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Letus/>

      <Footer/>
    </div>
  );
};

export default Services;
