"use client";
import React from "react";
import Image from "next/image";
import { skills } from "../_constants";
import app from "next/app";

export default function SkillsWheel() {
  const [hoveredSkill, setHoveredSkill] = React.useState("");

  return (
    <div className="flex items-center">
      <div
        className={` bg-border border-secondary border-[0.5px] w-[400px] h-[500px] rounded-xl hidden lg:flex p-16`}
      >
        <ul className="flex flex-col gap-4">
          {skills.map((app) => (
            <li key={app.id}>
              <p
                className={`text-base font-medium items-center ${
                  hoveredSkill === app.id
                    ? "text-secondary-light"
                    : "text-[#7d8590]"
                }`}
              >
                <span
                  className={`${
                    hoveredSkill === app.id
                      ? "text-secondary-light"
                      : "text-white"
                  } text-xl`}
                >
                  {app.title}{" "}
                </span>
                ({app.experience})
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:ml-16">
        <div className="relative left-1/2 flex lg:w-[26rem] w-[20rem] aspect-square border border-secondary rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="flex lg:w-60 w-40 aspect-square m-auto border border-secondary rounded-full">
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <Image
                src={"/profile.jpg"}
                className="relative rounded-full border-2 border-secondary-light leading-none group-hover:-rotate-2 transition duration-300"
                width={48}
                height={48}
                alt="skills center image"
              />
            </div>
          </div>

          <ul>
            {skills.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                style={{ transform: `rotate(${index * 45}deg)` }}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] border border-secondary bg-background rounded-xl cursor-pointer 
                    transform hover:scale-125 hover:bg-secondary-light hover:shadow-lg hover:shadow-black transition duration-300 `}
                  style={{
                    transform: `rotate(-${index * 45}deg) ${
                      hoveredSkill === app.id ? "scale(1.25)" : "scale(1)"
                    }`,
                  }}
                  onMouseEnter={() => setHoveredSkill(app.id)}
                  onMouseLeave={() => setHoveredSkill("")}
                >
                  {app.icon}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
