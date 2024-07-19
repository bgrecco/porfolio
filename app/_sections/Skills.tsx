import Section from "../_components/Section";
import Image from "next/image";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { skills } from "../_constants";

export default function Projects() {
  return (
    <Section
      id="projects"
      hasIcon={true}
      icon={
        <div className="relative">
          <div className="absolute -inset-1 bg-secondary-light rounded-full blur-md opacity-60 animate-tilt"></div>
          <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75">
            <AcademicCapIcon className="relative size-[25px]" />
          </div>
          <AcademicCapIcon className="relative size-[25px]" />
        </div>
      }
      firstSection={false}
      lastSection={false}
    >
      <div className="flex flex-col w-full space-y-24 mt-3 lg:text-left">
        <div className="flex flex-col text-center lg:text-left space-y-4">
          <div className="relative mx-auto lg:mr-[894px]">
            <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75 text-left">
              Skills
            </div>
            <h1 className="relative text-5xl text-secondary-light font-extrabold text-left">
              Skills
            </h1>
          </div>
          <div className="flex flex-col lg:text-left space-y-12 w-full pb-24">
            <p className="text-base">Skills that I have to help you</p>
            <div className="flex place-self-center">
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
                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] border border-secondary bg-background rounded-xl`}
                        style={{ transform: `rotate(-${index * 45}deg)` }}
                      >
                        {app.icon}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
