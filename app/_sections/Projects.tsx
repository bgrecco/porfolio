import ProjectCard from "../_components/ProjectCard";
import Section from "../_components/Section";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  return (
    <Section
      id="projects"
      hasIcon={true}
      icon={
        <div className="relative">
          <div className="absolute -inset-1 bg-secondary-light rounded-full blur-md opacity-60 animate-tilt"></div>
          <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75">
            <CodeBracketIcon className="relative size-[25px]" />
          </div>
          <CodeBracketIcon className="relative size-[25px]" />
        </div>
      }
      firstSection={false}
      lastSection={false}
    >
      <div className="flex flex-col w-full space-y-24 mt-3 lg:text-left">
        <div className="flex flex-col text-center lg:text-left space-y-4">
          <div className="relative mx-auto lg:mr-[834px]">
            <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75 text-left">
              Projects
            </div>
            <h1 className="relative text-5xl text-secondary-light font-extrabold text-left">
              Projects
            </h1>
          </div>
          <p className="max-w-screen-sm text-base lg:ml-0.5">
            This is what I have been working on
          </p>
          <div className="flex flex-col lg:flex-row gap-2 relative z-[1] max-w-screen-sm">
            <ProjectCard
              title={"Framed clone"}
              description={
                "is a small project designed to replicate the web game where players guess movies from frames, posters, and trivia."
              }
            ></ProjectCard>
          </div>
        </div>
      </div>
    </Section>
  );
}
