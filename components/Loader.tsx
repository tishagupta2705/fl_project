"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[70vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="px-4 py-12">
        <div className="rounded-lg relative bg-white py-12 shadow-xl">
          {/* Animated Spinner */}
          <div className="relative flex justify-center items-center mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute w-[177px] h-[177px]"
            >
              <svg
                width={177}
                height={177}
                viewBox="0 0 177 177"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M169.667 88.5C173.717 88.5 177.032 85.2113 176.696 81.1755C175.457 66.2542 170.448 51.8477 162.085 39.332C152.361 24.7783 138.539 13.435 122.367 6.73666C106.196 0.0383073 88.4018 -1.71429 71.2345 1.7005C54.0672 5.11529 38.298 13.5441 25.9211 25.921C13.5441 38.298 5.1153 54.0672 1.7005 71.2345C-1.71429 88.4018 0.0383044 106.196 6.73666 122.367C13.435 138.539 24.7783 152.361 39.332 162.085C51.8477 170.448 66.2542 175.457 81.1755 176.696C85.2113 177.032 88.5 173.717 88.5 169.667V169.667C88.5 165.618 85.2089 162.373 81.1792 161.971C69.1624 160.774 57.5826 156.642 47.4795 149.891C35.3374 141.778 25.8738 130.247 20.2855 116.755C14.6971 103.264 13.2349 88.4181 16.0838 74.0955C18.9328 59.773 25.9649 46.6168 36.2909 36.2908C46.6169 25.9649 59.773 18.9328 74.0955 16.0838C88.4181 13.2349 103.264 14.6971 116.755 20.2855C130.247 25.8739 141.778 35.3375 149.891 47.4795C156.642 57.5826 160.774 69.1624 161.971 81.1793C162.373 85.209 165.618 88.5 169.667 88.5V88.5Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="177" y2="177" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1E3A8A" />
                    <stop offset="1" stopColor="#00A6A6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="w-[150px] h-[150px] bg-white rounded-full"></div>
          </div>

          {/* Loading Text */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-6 font-semibold text-gray-700 text-center text-lg"
          >
            Loading ...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;








