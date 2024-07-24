import { GithubIcon, LinkedInIcon } from "./icons";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const navigation = [
  {
    id: "0",
    title: "About me",
    url: "#about",
    "aria-label": "Acerca de mi",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
    "aria-label": "Habilidades",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
    "aria-label": "Proyectos",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
    "aria-label": "Contacto",
  },
];

export const footerLinks = [
  {
    id: "0",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/bruno-grecco-25b648210/",
    "aria-label": "LinkedIn icon to see my personal linkedIn profile",
  },
  {
    id: "1",
    icon: <GithubIcon />,
    url: "https://github.com/bgrecco",
    "aria-label": "Github icon to see my personal repositories",
  },
  {
    id: "2",
    icon: <EnvelopeIcon className="size-6" />,
    url: "https://github.com/bgrecco",
    "aria-label": "Email icon to contact me through email",
  },
];

export const pastExperienceLogos = [
  {
    id: "0",
    image: (
      <div className="flex h-14 items-center">
        <Image
          src={"/plexo.webp"}
          height={56}
          width={170}
          quality={100}
          alt={"Plexo logo"}
        />
      </div>
    ),
    url: "",
  },
  {
    id: "1",
    image: (
      <div className="flex h-14 items-center">
        <Image
          src={"/dixtra.webp"}
          className="mt-1.5"
          height={56}
          width={170}
          quality={100}
          alt={"Dixtra logo"}
        />
      </div>
    ),
    url: "",
  },
  {
    id: "2",
    image: (
      <div className="flex h-14 items-center">
        <Image
          src={"/universal.webp"}
          className="mt-1.5"
          height={56}
          width={170}
          quality={100}
          alt={"UST logo"}
        />
      </div>
    ),
    url: "",
  },
];

export const skills = [
  {
    id: "0",
    title: "React",
    icon: (
      <Image
        src={"/react.png"}
        className="m-auto rounded-xl"
        height={40}
        width={40}
        quality={100}
        alt={"React logo"}
      />
    ),
    width: 40,
    height: 40,
    experience: "5 years of experience",
  },
  {
    id: "1",
    title: "TypeScript",
    icon: (
      <Image
        src={"/typescript.png"}
        className="m-auto"
        height={40}
        width={40}
        quality={100}
        alt={"TypeScript logo"}
      />
    ),
    width: 34,
    height: 36,
    experience: "3 years of experience",
  },
  {
    id: "2",
    title: "Docker",
    icon: (
      <Image
        src={"/docker.png"}
        className="m-auto"
        height={40}
        width={45}
        quality={100}
        alt={"Docker logo"}
      />
    ),
    width: 36,
    height: 28,
    experience: "3 years of experience",
  },
  {
    id: "3",
    title: "Kubernetes",
    icon: (
      <Image
        src={"/kubernetes.png"}
        className="m-auto rounded-xl"
        height={40}
        width={40}
        quality={100}
        alt={"Kubernetes logo"}
      />
    ),
    width: 34,
    height: 35,
    experience: "1 year of experience",
  },
  {
    id: "4",
    title: "Figma",
    icon: (
      <Image
        src={"/figma.png"}
        className="m-auto"
        height={26}
        width={32}
        quality={100}
        alt={"Figma logo"}
      />
    ),
    width: 34,
    height: 34,
    experience: "4 years of experience",
  },
  {
    id: "5",
    title: "MaterialUI",
    icon: (
      <Image
        src={"/materialui.png"}
        className="m-auto"
        height={40}
        width={40}
        quality={100}
        alt={"MaterialUI logo"}
      />
    ),
    width: 34,
    height: 34,
    experience: "4 years of experience",
  },
  {
    id: "6",
    title: "React Query",
    icon: (
      <Image
        src={"/react-query.png"}
        className="m-auto rounded-xl"
        height={40}
        width={40}
        quality={100}
        alt={"React Query logo"}
      />
    ),
    width: 26,
    height: 34,
    experience: "6 months of experience",
  },
  {
    id: "7",
    title: "TailwindCSS",
    icon: (
      <Image
        src={"/tailwindcss.jpg"}
        className="m-auto rounded-xl"
        height={24}
        width={40}
        quality={100}
        alt={"TailwindCSS logo"}
      />
    ),
    width: 38,
    height: 32,
    experience: "1 year of experience",
  },
];

export const contactInfo = [
  {
    id: 1,
    label: "LinkedIn",
    text: "/bruno-grecco-25b648210/",
    icon: LinkedInIcon(),
  },
  {
    id: 2,
    label: "Email",
    text: "bruno.grecco.a@gmail.com",
    icon: <EnvelopeIcon className="size-6" />,
  },
];
