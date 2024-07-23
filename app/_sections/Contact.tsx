import ContactForm from "../_components/ContactForm";
import HighlightedText from "../_components/HighlightedText";
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
          <HighlightedText
            text={"Lets work together"}
            fontSize={"text-5xl"}
            marginRight={"lg:mr-[611.67px]"}
          />
          <p className="max-w-screen-sm text-base lg:ml-0.5">
            Lets build your next idea
          </p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
