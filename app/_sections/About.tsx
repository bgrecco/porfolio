import Link from "next/link";
import Section from "../_components/Section";
import Image from "next/image";
import { footerLinks, pastExperienceLogos } from "../_constants";
import Button from "../_components/Button";
import { DownloadIcon } from "../_constants/icons";

export default function About() {
  return (
    <Section id="about" hasIcon={false} firstSection lastSection={false}>
      <div className="flex flex-col items-center w-full space-y-24">
        <div className="flex items-center">
          <div className="flex flex-col lg:text-left space-y-24">
            <div className="space-y-4">
              <div>
                <p className="text-lg text-secondary-light lg:ml-0.5">
                  Hi! My name is
                </p>
                <div className="flex flex-col lg:flex-row">
                  <h1 className="text-5xl text-nowrap">Bruno Grecco, </h1>
                  <div className="relative lg:ml-3">
                    <div className="absolute -inset-0 text-5xl text-secondary-light font-extrabold blur-md opacity-75 lg:text-nowrap">
                      Frontend developer
                    </div>
                    <h1 className="relative text-5xl text-secondary-light font-extrabold lg:text-nowrap">
                      Frontend developer
                    </h1>
                  </div>
                </div>
              </div>
              <p className="max-w-screen-sm text-base lg:ml-0.5">
                I have many years of experience as a full-stack developer.
                Currently, I am seeking to focus my expertise on frontend
                development, which is my true passion.
              </p>
              <div className="flex flex-col lg:flex-row lg:space-x-4 items-center">
                <div className="flex space-x-4">
                  <Button variant={"outlined"}>
                    <p>Contact me</p>
                  </Button>
                  <Button variant={"contained"}>
                    {
                      <div className="flex items-center">
                        <p>Download CV</p>{" "}
                        <div className="ml-2">
                          <DownloadIcon />
                        </div>
                      </div>
                    }
                  </Button>
                </div>
                <div className="mt-4 lg:mt-0">
                  <ul className="flex gap-4">
                    {footerLinks
                      .filter((navItem) => navItem.id !== "2")
                      .map((navItem) => (
                        <li key={navItem.id}>
                          <Link
                            href={navItem.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="block relative gap-4 z-10 hover:text-secondary hover:scale-110 duration-300 ease-in-out transition-colors"
                          >
                            {navItem.icon}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col place-self-start space-y-4 mr-2">
              <p className="text-xl">
                Places where I have worked as a developer
              </p>
              <ul className="flex gap-8 min-h-11 items-center">
                {pastExperienceLogos.map((logo) => (
                  <li key={logo.id}>{logo.image}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-0.5 bg-secondary-light rounded-full blur opacity-75 animate-tilt group-hover:opacity-100"></div>
            <Image
              className="relative rounded-full border-8 border-secondary leading-none group-hover:-rotate-2 transition duration-300"
              src={"/profile.jpg"}
              height={280}
              width={280}
              quality={100}
              priority={true}
              alt={"Profile headshot"}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
