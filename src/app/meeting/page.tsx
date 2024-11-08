"use client";

import ShowcaseNavbar from "@/components/showcase-navbar";
import { letsMeet } from "@/lib/constants";
import { motion } from "framer-motion";
import { PiCheckCircleBold } from "react-icons/pi";
import { Calendly } from "./calendly";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function MeetingPage() {
  return (
    <div
      className="inset-0 -z-10 flex w-full flex-col text-clip bg-[#fafafa] 
      [background-image:linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
      [background-size:14px_24px]"
    >
      <ShowcaseNavbar />

      <div className="mx-auto justify-between px-6 md:mt-14 md:flex md:px-0 xl:w-4/5 2xl:w-[68%]  ">
        <div className="md:w-2/5">
          <h1 className="pt-10 text-4xl font-semibold">Let&apos;s Meet</h1>
          <p className="py-4 text-lg text-gray-500">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {letsMeet.map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 1.8 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircleBold className=" shrink-0 rounded-md text-2xl text-[#3d80d7]" />
              <ul>
                <h3 className="text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          <Calendly />
        </div>
      </div>
    </div>
  );
}
