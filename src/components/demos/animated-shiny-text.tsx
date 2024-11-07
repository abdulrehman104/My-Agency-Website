"use client";

import { FcGoogle } from "react-icons/fc";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center md:justify-center">
      <div
        className={cn(
          "group rounded-full text-base text-white transition-all ease-in",
        )}
      >
        <AnimatedShinyText className="ease-outhover:text-neutral-600 hover:duration-300hover:dark:text-neutral-400 items-center justify-center py-1 transition">
          <div className="flex-col-reverse justify-between gap-x-6 md:flex md:flex-row">
            ⭐ ⭐ ⭐ ⭐ ⭐
            <div className="flex items-center space-x-2 py-2 md:py-0">
              <FcGoogle className="size-6 " />
              <span className="cursor-pointer text-gray-600 hover:underline ">
                4.9 stars 200+ google reviews
              </span>
            </div>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
