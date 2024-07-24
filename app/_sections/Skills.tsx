import Section from "../_components/Section";
import Image from "next/image";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { skills } from "../_constants";
import HighlightedText from "../_components/HighlightedText";
import SkillsWheel from "../_components/SkillsWheel";

export default function Projects() {
  return (
    <Section
      id="skills"
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
          <HighlightedText
            text={"Skills"}
            fontSize={"text-5xl"}
            marginRight={"lg:mr-[894px]"}
          />
          <div className="flex flex-col lg:text-left space-y-12 w-full pb-24">
            <p className="text-base">Skills that I have to help you</p>
            <SkillsWheel />
          </div>
        </div>
      </div>
    </Section>
  );
}
