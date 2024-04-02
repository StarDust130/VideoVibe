import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-1 ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center  sm:justify-start">
            <Link href={"/"} className="flex items-center gap-1 ">
              <Image
                src={"/icon.png"}
                alt="logo"
                width={40}
                height={40}
                className="max-sm:size-10"
              />
              <p className="text-[26px] font-extrabold text-white max-sm:hidden  ">
                VideoVibe
              </p>
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <a
              className="font-bold  hover:text-yellow-500"
              href="https://github.com/StarDust130"
              target="_blank"
            >
              {" "}
              StarDust🌟
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
