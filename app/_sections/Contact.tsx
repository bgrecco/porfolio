import Section from "../_components/Section";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <Section
      id="contact"
      hasIcon={true}
      icon={
        <div className="relative">
          <div className="absolute -inset-1 bg-secondary-light rounded-full blur-md opacity-60 animate-tilt"></div>
          <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75">
            <BriefcaseIcon className="relative size-[25px]" />
          </div>
          <BriefcaseIcon className="relative size-[25px]" />
        </div>
      }
      firstSection={false}
      lastSection={true}
    >
      <div className="flex flex-col w-full space-y-24 mt-3 lg:text-left">
        <div className="flex flex-col text-center lg:text-left space-y-4">
          <div className="relative mx-auto lg:mr-[611.67px]">
            <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75 lg:text-left lg:text-nowrap">
              Lets work together
            </div>
            <h1 className="relative text-5xl text-secondary-light font-extrabold lg:text-left lg:text-nowrap">
              Lets work together
            </h1>
          </div>
          <p className="max-w-screen-sm text-base lg:ml-0.5">
            Lets build your next idea
          </p>
        </div>
      </div>
    </Section>
  );
}
