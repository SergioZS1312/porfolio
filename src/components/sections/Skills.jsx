import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaReact,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaGitAlt,
	FaMicrosoft,
	FaPhp
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiDotnet,
	SiTypescript,
	SiSharp
} from "react-icons/si";
import { TbSql, TbServer } from "react-icons/tb";

const Skills = () => {
	const [activeCategory, setActiveCategory] = useState("frontend");

	const skillsData = {
		frontend: [
			{ name: "HTML5", icon: <FaHtml5 />, level: "Avanzado" },
			{ name: "CSS3", icon: <FaCss3Alt />, level: "Avanzado" },
			{ name: "JavaScript", icon: <FaJs />, level: "Intermedio" },
			{ name: "TypeScript", icon: <SiTypescript />, level: "Basico" },
			{ name: "React", icon: <FaReact />, level: "Intermedio" },
			{ name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Intermedio" },
			{ name: "Bootstrap", icon: <FaBootstrap />, level: "Intermedio" },
		],
		backend: [
			{ name: "C#", icon: <SiSharp />, level: "Avanzado" },
			{ name: "PHP", icon: <FaPhp />, level: "Intermedio" },
			{ name: "SQL", icon: <TbSql />, level: "Intermedio" },
			{ name: "ASP.NET Core", icon: <SiDotnet />, level: "Avanzado" },
			{ name: "Entity Framework", icon: <FaMicrosoft />, level: "Avanzado" },			
		],
		databases: [
			{ name: "SQL Server", icon: <TbServer />, level: "Intermedio" },
			{ name: "MySQL", icon: <TbServer />, level: "basico" },
		],
		cloud_devops: [
			{ name: "Git", icon: <FaGitAlt />, level: "Intermedio" },
			{ name: "Azure", icon: <FaMicrosoft />, level: "Basico" },		
		],
	};

	const getLevelColor = (level) => {
		switch (level) {
			case "Avanzado":
				return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
			case "Intermedio":
				return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
			default:
				return "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-300";
		}
	};

	return (
		<section id="skills" className="py-20 bg-surface-light dark:bg-surface-dark">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-brand-secondary-light dark:text-brand-secondary-dark mb-4">
						Mis <span className="text-brand-primary-light dark:text-brand-primary-dark">Habilidades</span>
					</h2>
					<p className="text-brand-secondary-light/70 dark:text-brand-secondary-dark/70 max-w-lg mx-auto">
						Tecnologías que domino y uso en mis proyectos.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{Object.keys(skillsData).map((category) => (
						<motion.button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-4 py-2 capitalize rounded-full text-sm font-medium transition-colors ${activeCategory === category
								? "bg-brand-primary-light dark:bg-brand-primary-dark text-white dark:text-brand-secondary-dark"
								: "bg-surface-muted-light dark:bg-surface-muted-dark text-brand-secondary-light dark:text-brand-secondary-dark hover:bg-brand-primary-light/10 dark:hover:bg-brand-primary-dark/10"
								}`}
						>
							{category}
						</motion.button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{skillsData[activeCategory].map((skill, index) => (
						<div
							key={skill.name}
							className="p-4 rounded-lg bg-surface-muted-light dark:bg-surface-muted-dark border border-border-light dark:border-border-dark hover:shadow-md transition-all"
						>
							<div className="flex items-center gap-3 mb-2">
								<div className="text-2xl text-brand-primary-light dark:text-brand-primary-dark">
									{skill.icon}
								</div>
								<h3 className="font-medium text-brand-secondary-light dark:text-brand-secondary-dark">
									{skill.name}
								</h3>
							</div>
							<span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
								{skill.level}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;