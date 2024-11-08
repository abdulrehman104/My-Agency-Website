import React from "react";

import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section
      className="
     bg-accent relative  my-10
    rounded-[45px] p-[50px] md:mx-auto md:p-[60px] md:py-20"
    >
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">Let&apos;s make things happen</p>

        <p className="my-10 text-xl">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/meeting"
          className="md:px-16md:text-xlhover:bg-[#abcbff] rounded-[6px]border-2 border-black bg-[#121212] px-10 py-3 text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          Book a Call
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
