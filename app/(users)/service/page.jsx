"use client";

import Image from "next/image";
import style from "./service.module.css";
import thapa from "@/public/thapa.jpg";
import { easeInOut, motion } from "motion/react";

// export const metadata = {
//   title: "Service Page",
//   description: "this is my service page",
//   authors: [
//     { name: "vinod thapa" },
//     { name: "thapa technical", url: "thapatechical.com" },
//   ],
//   keywords: ["nextjs", "reactjs", "fullstack"],
// };

// Variants: define animation styles once
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Services = () => {
  return (
    <section className="font-roboto">
      <h1 className={style.common_heading}>Hello Services</h1>

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* <!-- Team Member 1 --> */}

          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/thapa.jpg"
                width={500}
                height={500}
                alt="thapa"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Mike Johnson
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                Backend Developer
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Node.js & Python
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 2 --> */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-full relative bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src={thapa}
                alt="thapa technical"
                fill={true}
                quality={100}
                priority={false}
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Mike Johnson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Backend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Node.js & Python
            </p>
          </div>

          {/* <!-- Team Member 3 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">MJ</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Mike Johnson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Backend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Node.js & Python
            </p>
          </div>

          {/* <!-- Team Member 4 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-pink-600">EW</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Emily Wilson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Product Manager
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Strategy & Analytics
            </p>
          </div>

          {/* <!-- Team Member 5 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">DL</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              David Lee
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              AWS & Docker
            </p>
          </div>

          {/* <!-- Team Member 6 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">AB</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Anna Brown
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              QA Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Testing & Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
