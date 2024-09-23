import {
  pytorch,
  tensorflow,
  sklearn,
  django,
  flask,
  postman,
  mysql,
  postgres,
  linux,
  nginx,
  php,
  fastapi,
  github,
  css,
  docker,
  git,
  html,
  javascript,
  mongodb,
  reactjs,
  python,
  bootstrap,
  tailwind,
} from "../assets";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import {
  SiGit,
  SiGithub,
  SiLinux,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Scikitlearn",
    icon: sklearn,
  },
  {
    name: "Postgresql",
    icon: postgres,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Mongodb",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
];

export const languages = [
  { icon: <AiFillHtml5 size={60} color="orange" />, name: "HTML5" },
  { icon: <DiCss3 size={60} color="navy" />, name: "CSS" },
  { icon: <SiPython size={60} color="blue" />, name: "Python" },
  { icon: <SiPhp size={60} color="purple" />, name: "PHP" },
  { icon: <SiJavascript size={60} color="yellow" />, name: "JavaScript" },
];
export const frameworks = [
  { icon: <SiDjango size={60} color="forestgreen" />, name: "Django" },
  { icon: <SiFlask size={60} color="gray" />, name: "Flask" },
  { icon: <SiFastapi size={60} color="darkcyan" />, name: "FastAPI" },
  { icon: <SiTensorflow size={60} color="firebrick" />, name: "Tensorflow" },
  { icon: <SiPytorch size={60} color="crimson" />, name: "Pytorch" },
  {
    icon: <SiScikitlearn size={60} color="midnightblue" />,
    name: "Scikit Learn",
  },
  { icon: <SiReact size={60} color="royalblue" />, name: "React" },
  {
    icon: <SiTailwindcss size={60} color="dodgerblue" />,
    name: "TailwindCSS",
  },
  { icon: <FaBootstrap size={60} color="blueviolet" />, name: "Bootstrap" },
];
export const tools = [
  { icon: <SiGit size={60} color="darkred" />, name: "Git" },
  { icon: <SiGithub size={60} color="darkslategray" />, name: "GitHub" },
  { icon: <SiLinux size={60} color="maroon" />, name: "Linux" },
  { icon: <SiMysql size={60} color="mediumturquoise" />, name: "MySQL" },
  { icon: <SiPostgresql size={60} color="slateblue" />, name: "Postgresql" },
  { icon: <SiMongodb size={60} color="lawngreen" />, name: "MongoDB" },
  { icon: <SiPostman size={60} color="tomato" />, name: "Postman" },
];
