import {
	FaReact,
	FaJs,
	FaNode,
	FaPython,
	FaDatabase,
	FaGitAlt,
	FaFigma,
	FaServer,
	FaHtml5,
	FaCss3Alt
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiDocker } from "react-icons/si";

const skillsData = {
	frontend: [
		{ name: "React", icon: <FaReact />, level: "avanzado" },
		{ name: "JavaScript", icon: <FaJs />, level: "avanzado" },
		{ name: "Next.js", icon: <SiNextdotjs />, level: "intermedio" },
		{ name: "HTML5", icon: <FaHtml5 />, level: "avanzado" },
		{ name: "CSS3", icon: <FaCss3Alt />, level: "avanzado" },
		{ name: "Tailwind CSS", icon: <SiTailwindcss />, level: "intermedio" },
	],
	backend: [
		{ name: "Node.js", icon: <FaNode />, level: "avanzado" },
		{ name: "Python", icon: <FaPython />, level: "intermedio" },
		{ name: "PostgreSQL", icon: <FaDatabase />, level: "intermedio" },
		{ name: "Firebase", icon: <SiFirebase />, level: "intermedio" },
	],
	devops: [
		{ name: "Git", icon: <FaGitAlt />, level: "avanzado" },
		{ name: "Docker", icon: <SiDocker />, level: "básico" },
		{ name: "AWS", icon: <FaServer />, level: "básico" },
	],
	design: [
		{ name: "Figma", icon: <FaFigma />, level: "intermedio" },
	],
};

export default skillsData;