"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Video } from "lucide-react";
import { TextGenerateEffectDemo } from "./TextGen";
import { Button } from "./ui/button";
import Link from "next/link";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Elevate Your Video Calls with VideVibe
        </h1>
        <div className=" flex gap-3 justify-center items-center font-semibold text-normal  mb-16 text-gray-500 ">
          <Video className="mt-5" />{" "}
          <div className="mt-5">
            The Ultimate Video Calling Experience Awaits.
          </div>
        </div>

        <Link href={"/home"}>
          <Button variant={"secondary"}>Get Started</Button>
        </Link>
        <a className="text-blue-500 text-8xl" href="/home">
          ddddd
        </a>

        <BackgroundBeams />
      </div>

      <Link href={"/home"}>
        <Button variant={"secondary"}>Get Started</Button>
      </Link>
      
    </div>
  );
}
