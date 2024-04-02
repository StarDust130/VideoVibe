"use client";

import { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { user } = useUser();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata", // Setting time zone to India
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
    currentTime
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className=" max-w-[273px] capitalize rounded py-2 text-start text-base font-sans font-bold lg:text-2xl">
            {user?.username ? `Hello, ${user.username} ` : "Hello"}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
