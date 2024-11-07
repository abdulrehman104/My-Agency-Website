import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div className=" sticky top-5 z-50 mx-6 flex items-center justify-between  overflow-hidden rounded-[6px]  bg-white p-10  px-4  py-6 md:mx-auto md:px-8 xl:w-4/5 2xl:w-[68%] ">
      <Link href="/">
        <Image
          src="/logo/logo.webp"
          alt="Bird Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2">
        <div className="hidden items-center gap-x-10 text-lg font-medium text-gray-700 md:flex 2xl:gap-x-10 ">
          <Link
            href="/showcase"
            className="
          hover:text-blue-500
          "
          >
            Showcase
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Process
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Guarentees
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <a href="tel:5193191562" className="hidden xl:flex">
          <button className="flex items-center  gap-x-3 rounded-md px-4 py-2 ">
            (519)-319-1562
          </button>
        </a>

        <Link
          href={"/meeting"}
          className="rounded-[6px] border-2 border-black bg-[#121212]  px-6 py-3  text-lg  text-white  transition  duration-200  hover:bg-[#abcbff]  hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]  dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
