import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from '/src/assets/qestionbg.png'
import { div } from "framer-motion/client";

const faqs = [
  {
    id: 1,
    question: "What services does SquareUp provide?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: 2,
    question: "How can SquareUp help my business?",
    answer:
      "We analyze your business needs and create tailored solutions to improve your processes, enhance digital presence, and increase customer engagement.",
  },
  {
    id: 3,
    question: "What industries does SquareUp work with?",
    answer:
      "We work across industries including technology, healthcare, finance, education, e-commerce, and more, adapting our solutions to each sector.",
  },
  {
    id: 4,
    question: "How long does it take to complete a project with SquareUp?",
    answer:
      "Project duration depends on complexity, but most projects are completed within 4 to 12 weeks. We provide a detailed timeline during planning.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your products stay updated, secure, and fully functional.",
  },
  {
    id: 6,
    question: "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely! We can integrate with your existing frameworks, tools, and processes to ensure seamless collaboration and consistency.",
  },
  {
    id: 7,
    question: "How involved will I be in the project development process?",
    answer:
      "We encourage active collaboration. You’ll be involved in planning, feedback sessions, and milestone reviews to ensure the outcome meets your expectations.",
  },
  {
    id: 8,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we provide continuous updates, bug fixes, and performance optimization to keep your website or app running smoothly.",
  },
];

const Questions = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div>
        <div className="relative text-white bg-cover bg-center bg-no-repeat py-20 text-center px-4 sm:px-6 md:px-8"
                style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="bar text-4xl">Frequently Asked Questions</h1>
            <p className="mt-5">Still you have any questions? Contact our Team via hello@squareup.com</p>
        </div>
        <div className="bg-[#1A1A1A] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-5">
          {faqs.slice(0, 4).map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] p-5 rounded-xl border border-[#222] cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-start">
                {/* Number */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-lg font-bold ${
                    open === faq.id
                      ? "bg-lime-400 text-black"
                      : "bg-[#1A1A1A] text-gray-400"
                  }`}
                >
                  {faq.id < 10 ? `0${faq.id}` : faq.id}
                </div>

                {/* Question */}
                <h3 className="text-lg font-semibold w-full ml-4">
                  {faq.question}
                </h3>

                {/* Icon */}
                <span className="ml-3 text-xl text-gray-400">
                  {open === faq.id ? "✕" : "+"}
                </span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {open === faq.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300 leading-relaxed text-sm"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-5 hidden md:block">
          {faqs.slice(4).map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] p-5 rounded-xl border border-[#222] cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-start">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-lg font-bold ${
                    open === faq.id
                      ? "bg-lime-400 text-black"
                      : "bg-[#1a1a1a] text-gray-400"
                  }`}
                >
                  {faq.id < 10 ? `0${faq.id}` : faq.id}
                </div>

                <h3 className="text-lg font-semibold w-full ml-4">
                  {faq.question}
                </h3>

                <span className="ml-3 text-xl text-gray-400">
                  {open === faq.id ? "✕" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {open === faq.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300 leading-relaxed text-sm"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Questions;
