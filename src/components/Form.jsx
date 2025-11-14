import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from '/src/assets/formbg.png'
import logo from '/src/assets/logo.png'
import { Link } from "react-router-dom";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactReasons, setContactReasons] = useState({
    webDesign: true,
    mobileAppDesign: false,
    collaboration: false,
    others: false,
  });
  const [budget, setBudget] = useState([1000, 5000]);
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setContactReasons((prev) => ({ ...prev, [name]: checked }));
  };

  const handleBudgetChange = (e, index) => {
    const val = Number(e.target.value);
    setBudget((prev) => {
      let newBudget = [...prev];
      newBudget[index] = val;
      if (index === 0 && val > newBudget[1]) newBudget[0] = newBudget[1];
      if (index === 1 && val < newBudget[0]) newBudget[1] = newBudget[0];
      return newBudget;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, contactReasons, budget, message });
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#121212]">
      <motion.div
        className="relative text-white bg-cover bg-center bg-no-repeat py-20 text-center px-4 sm:px-6 md:px-8"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="flex justify-center relative">
          <div>
            <img src={logo} alt="" className="w-12 h-12 mb-1" />
          </div>
        </div>
        <h1 className="bar mt-5 mb-1 relative text-4xl sm:text-3xl xs:text-2xl">
          Thank you for your Interest in SquareUp.
        </h1>
        <p className="relative text-sm sm:text-xs px-4 md:px-0">
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
        <button className="mt-10">
          <Link
            to=""
            className="bg-[#9EFF00] relative mt-10 text-black bar rounded-md py-3 px-8 hover:bg-[#b3ff2e] transition-colors duration-300 shadow-[0_0_15px_rgba(158,255,0,0.3)]"
          >
            Start Project
          </Link>
        </button>
      </motion.div>

      <motion.div
        className="flex justify-center mt-10 text-white pb-10 px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl space-y-6"
        >
          {/* Full Name & Email */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            variants={itemVariants}
          >
            <div className="flex-1 bg-[#1A1A1A] rounded-md p-5">
              <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Type here"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-transparent border-b border-gray-700 placeholder-gray-600 py-2 px-1 text-sm focus:outline-none focus:border-[#9EFF00] text-white"
              />
            </div>
            <div className="flex-1 bg-[#1A1A1A] rounded-md p-5">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-700 placeholder-gray-600 py-2 px-1 text-sm focus:outline-none focus:border-[#9EFF00] text-white"
              />
            </div>
          </motion.div>

          {/* Contact Reasons */}
          <motion.div className="bg-[#1A1A1A] rounded-md p-5" variants={itemVariants}>
            <p className="mb-4 text-sm font-semibold text-white">Why are you contacting us?</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1 text-gray-400 text-sm">
              {[
                { name: "webDesign", label: "Web Design" },
                { name: "collaboration", label: "Collaboration" },
                { name: "mobileAppDesign", label: "Mobile App Design" },
                { name: "others", label: "Others" },
              ].map(({ name, label }) => (
                <label
                  key={name}
                  className="flex items-center gap-3 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    name={name}
                    checked={contactReasons[name]}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 rounded bg-[#121212] border border-gray-700 checked:bg-[#9EFF00] checked:border-[#9EFF00] accent-[#9EFF00] cursor-pointer"
                  />
                  {label}
                </label>
              ))}
            </div>
          </motion.div>

          {/* Budget */}
          <motion.div className="bg-[#1A1A1A] rounded-md p-5" variants={itemVariants}>
            <p className="text-sm font-semibold text-white mb-1">Your Budget</p>
            <p className="text-xs text-gray-500 mb-5">Slide to indicate your budget range</p>
            <div className="relative h-8">
              {/* Slider Track */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 rounded" />
              {/* Highlight Range */}
              <div
                className="absolute top-1/2 h-1 bg-[#9EFF00] rounded"
                style={{
                  left: `${((budget[0] - 1000) / 9000) * 100}%`,
                  right: `${100 - ((budget[1] - 1000) / 9000) * 100}%`,
                  transform: "translateY(-50%)",
                }}
              />
              {/* Left Thumb */}
              <input
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={budget[0]}
                onChange={(e) => handleBudgetChange(e, 0)}
                className="absolute w-full h-8 bg-transparent appearance-none pointer-events-auto cursor-pointer thumb-zIndex"
                style={{ zIndex: 20 }}
              />
              {/* Right Thumb */}
              <input
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={budget[1]}
                onChange={(e) => handleBudgetChange(e, 1)}
                className="absolute w-full h-8 bg-transparent appearance-none pointer-events-auto cursor-pointer thumb-zIndex"
                style={{ zIndex: 30 }}
              />
            </div>
            <div className="flex justify-between text-[#9EFF00] text-sm mt-4 font-semibold select-none">
              <span>${budget[0]}</span>
              <span>${budget[1]}</span>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div className="bg-[#1A1A1A] rounded-md p-5" variants={itemVariants}>
            <label className="block text-sm font-semibold mb-2 text-white" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 placeholder-gray-600 py-2 px-1 text-sm focus:outline-none focus:border-[#9EFF00] resize-none text-white"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <button
              type="submit"
              className="bg-[#9EFF00] text-black font-semibold py-3 px-14 rounded-md hover:bg-[#b3ff2e] transition-colors shadow-[0_0_10px_rgba(158,255,0,0.5)]"
            >
              Submit
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Custom styles needed for range thumb */}
      <style>
        {`
          input[type=range] {
            -webkit-appearance: none;
            appearance: none;
          }
          input[type=range]:focus {
            outline: none;
          }

          input[type=range]::-webkit-slider-runnable-track {
            height: 1px;
            background: transparent;
            border: none;
          }

          input[type=range]::-moz-range-track {
            height: 1px;
            background: transparent;
            border: none;
          }

          input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            background: #9EFF00;
            border-radius: 9999px;
            cursor: pointer;
            margin-top: -6.5px;
            box-shadow: 0 0 6px rgba(158, 255, 0, 0.7);
            border: none;
            transition: background-color 0.3s ease;
          }
          input[type=range]::-moz-range-thumb {
            width: 14px;
            height: 14px;
            background: #9EFF00;
            border-radius: 9999px;
            cursor: pointer;
            box-shadow: 0 0 6px rgba(158, 255, 0, 0.7);
            border: none;
            transition: background-color 0.3s ease;
          }
          input[type=range]:focus::-webkit-slider-thumb {
            background: #b3ff2e;
            box-shadow: 0 0 10px rgba(179, 255, 46, 1);
          }
          input[type=range]:focus::-moz-range-thumb {
            background: #b3ff2e;
            box-shadow: 0 0 10px rgba(179, 255, 46, 1);
          }
        `}
      </style>
    </div>
  );
};

export default Form;
