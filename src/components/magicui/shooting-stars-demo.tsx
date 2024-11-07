import React from "react";
import Image from "next/image";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { features } from "@/lib/constants";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative mt-20 flex w-full flex-col items-center justify-center rounded-[40px] bg-neutral-900 px-6 py-10 md:px-0 md:py-20">
      <h2 className="relative z-10  mx-auto flex max-w-5xl flex-col items-center gap-2 bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl md:leading-tight ">
        Our guarantees to you.
        <p className="mx-auto   text-xl  text-gray-200 md:text-center md:text-2xl">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="z-40 mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 xl:w-4/5 2xl:w-[68%] ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex cursor-pointer   flex-col rounded-xl bg-neutral-800 p-10"
          >
            <button className="animate-shine flex w-16 items-center justify-center rounded-md bg-gradient-to-br  from-neutral-700  to-neutral-800 p-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="size-8"
              />
            </button>

            <h3 className="mt-4 text-xl font-bold text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
