"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DirectionAwareButton, Magnetic } from "./InteractiveButton";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
      timeZoneName: "short",
    });

    const updateTime = () => setTime(formatter.format(new Date()));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-white px-5 pb-8 pt-8 md:pb-10">
      <div className="mx-auto max-w-6xl rounded-[56px] bg-[#ff4d00] p-6 text-white shadow-[0_44px_120px_rgba(255,77,0,0.26)] md:p-10 lg:p-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase text-white/72">Final approach</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.84] sm:text-7xl lg:text-[7rem]">
              Make Tally
              <span className="block text-black">feel inevitable.</span>
            </h2>
          </div>

          <DirectionAwareButton
            className="h-16 w-full bg-black px-7 text-base font-black uppercase text-white transition-colors group-hover:text-black sm:w-fit"
            fillClassName="bg-white"
            type="button"
          >
            Start a project
            <ArrowUpRight size={20} strokeWidth={2.3} />
          </DirectionAwareButton>
        </div>

        <div className="mt-12 grid gap-8 rounded-[40px] bg-white p-6 text-black md:grid-cols-4 md:p-8">
          <div>
            <p className="text-xs font-black uppercase text-black/45">Location</p>
            <p className="mt-3 text-lg font-bold">Kollam, Kerala</p>
            <p className="text-lg font-bold">India</p>
            <p className="mt-3 text-sm font-semibold text-black/45">{time || "IST"}</p>
          </div>

          <div>
            <p className="text-xs font-black uppercase text-black/45">Social</p>
            <div className="mt-3 flex flex-col gap-2 text-lg font-bold">
              <Magnetic>
                <Link href="#">LinkedIn</Link>
              </Magnetic>
              <Magnetic>
                <Link href="#">Instagram</Link>
              </Magnetic>
              <Magnetic>
                <Link href="#">Twitter</Link>
              </Magnetic>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase text-black/45">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-lg font-bold">
              <a href="mailto:hello@tallyprime.com">hello@tallyprime.com</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:items-end md:text-right">
            <p className="text-sm font-semibold text-black/55">
              Design-led Tally implementations for teams that want speed, clarity, and fewer manual rituals.
            </p>
            <p className="text-xs font-black uppercase text-black/45">
              Copyright {new Date().getFullYear()} Tally Prime Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
