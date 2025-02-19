import { Github, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoContentful from "/public/images/logos/icon-contentful.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoCSS from "/public/images/logos/icon-css.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoHTML from "/public/images/logos/icon-html.svg";
import LogoGraphQL from "/public/images/logos/icon-graphql.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoRedux from "/public/images/logos/icon-redux.svg";
import LogoVite from "/public/images/logos/icon-vite.svg";
import LogoViteLight from "/public/images/logos/icon-vite-light.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoExaAg from "/public/images/logos/logo-exa-ag.svg";
import LogoExaAgLight from "/public/images/logos/logo-exa-ag-light.svg";
import LogoAdaptReady from "/public/images/logos/logo-adapt-ready.png";
import LogoVelotio from "/public/images/logos/logo-velotio.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/RishabhTyagiGit",
  GITHUB_REPO: "https://github.com/RishabhTyagiGit/sagarshah.dev",
  TWITTER: "https://twitter.com",
  FIGMA: "https://www.figma.com",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  // {
  //   label: "Experience",
  //   href: "#experience",
  // },
  // {
  //   label: "Work",
  //   href: "#work",
  // },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/RishabhTyagiGit",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/214/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "HTML",
    logo: LogoHTML,
    url: "https://www.w3schools.com/html/",
  },
  {
    label: "CSS",
    logo: LogoCSS,
    url: "https://www.w3schools.com/css/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "GraphQL",
    logo: LogoGraphQL,
    url: "https://graphql.org/",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    url: "https://redux.js.org/",
  },
  {
    label: "Contentful",
    logo: LogoContentful,
    url: "https://www.contentful.com/",
  },
  {
    label: "Vite",
    logo: LogoVite,
    darkModeLogo: LogoViteLight,
    url: "https://vite.dev/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoVelotio,
    logoAlt: "Velotio logo",
    position: "Senior Software Engineer",
    startDate: new Date(2021, 8),
    currentlyWorkHere: true,
    summary: [
      "Working for various clients like Netflix, NetApp.",
      "Applied network optimization strategies, including resource hinting (preconnect, DNS-prefetch, preload), resource hint priority, and lazy loading to enhance application efficiency.",
      "Enhanced Core Web Vitals (LCP, FID, CLS) by optimizing rendering performance.",
      "Integrated an interactive 3D models using Babylon.js",
      "Handling sprint planning & task distribution.",
      "Worked with a variety of technologies, including React.js, Next.js, Babylon.js, Contentful CMS, ImageKit DAM, Tailwindcss, Storybook, and others.",
    ],
  },
  {
    logo: LogoAdaptReady,
    logoAlt: "Adapt Ready logo",
    position: "React Developer",
    startDate: new Date(2020, 4),
    endDate: new Date(2021, 8),
    summary: [
      "Acted as frontend lead in different projects.",
      "Developed scalable and efficient GraphQL APIs",
      "Brainstormed new ideas & gathered requirements for projects.",
      "Worked with a variety of technologies, including React.js, Express.js, PostgreSQL, Mapbox, and others.",
    ],
  },
  {
    logo: LogoExaAg,
    darkModeLogo: LogoExaAgLight,
    logoAlt: "ExaAg logo",
    position: "Front End Developer",
    startDate: new Date(2018, 2),
    endDate: new Date(2020, 4),
    summary: [
      "Optimized site content for mobile devices using responsive design techniques.",
      "Improved website accessibility by implementing best practices for ADA compliance.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Rishabh and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Rishabh was extremely easy and pleasant to work with and he truly cares about the project being a success. Rishabh has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
