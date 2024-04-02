import Footer from "@/components/Footer";
import { Sparkle } from "@/components/Sparkle";
import { TextGenerateEffectDemo } from "@/components/TextGen";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { LogIn, LogInIcon, LogOutIcon, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans  font-bold">
          Elevate Your Video Calls with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-black-600 ">
            VideVibe
          </span>
        </h1>
        <div className="flex gap-3 justify-center items-center font-semibold text-normal mb-16 text-gray-500">
          <Video className="mt-5" />
          <div className="mt-5">
            The Ultimate Video Calling Experience Awaits.
          </div>
        </div>
        <div className="flex relative  z-10 justify-center items-center">
          <Link href="/home">
            <abbr title="Get Started">
              <Button className="bg-white z-10 text-black cursor-pointer hover:bg-gray-100 py-2 px-4 rounded-full">
                Get Started
              </Button>
            </abbr>
          </Link>
        </div>
      </div>
      <BackgroundBeams />

      <div className="absolute right-8 top-5 cursor-pointer">
        <abbr title="Login">
          <SignInButton>
            <LogIn color="white" size={20} />
          </SignInButton>
        </abbr>
      </div>
      <div className="absolute left-10 top-5 cursor-pointer">
        <abbr title="Logo">
          <Image src="/icon.png" alt="logo" height={60} width={60} />
        </abbr>
      </div>
    </section>
  );
};
export default LandingPage;
