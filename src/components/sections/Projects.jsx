import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import JabonesYumaIMG from "../../assets/JabonesYuma.webp";
import BlogDevIMG from "../../assets/BlogDev.webp";
import BogoCatIMG from "../../assets/BogoCat.webp";

const projectsData = [
	{
		id: 1,
		title: "Catálogo de Jabones Artesanales",
		description: "Landing page para exhibición de productos artesanales (jabones y velas) con diseño atractivo y responsive.",
		tags: ["Bootstrap", "C#", "ASP.NET"],
		image: JabonesYumaIMG,
		repo: "#",
		demo: "https://jabonesyuma.azurewebsites.net/",
		featured: true
	},
	{
		id: 2,
		title: "Blog Técnico de Desarrollo Web",
		description: "Sitio informativo con artículos y recursos sobre programación web, diseño y buenas prácticas.",
		tags: ["Bootstrap", "C#", "ASP.NET"],
		image: BlogDevIMG,
		repo: "#",
		demo: "https://blogdev.azurewebsites.net/"
	},
	{
		id: 3,
		title: "Landing-page BogoCat",
		description: "Landing page para exhibición de productos  (Camisetas, Mugs y Gorras) con diseño atractivo y responsive.",
		tags: ["React", "Tailwind css"],
		image: BogoCatIMG,
		repo: "#",
		demo: "https://bogocat-landing.vercel.app/"
	}
];

const allTags = ["Todos", ...new Set(projectsData.flatMap(project => project.tags))];

const ProjectsSection = () => {
	const [activeFilter, setActiveFilter] = useState("Todos");
	const [hoveredProject, setHoveredProject] = useState(null);

	const filteredProjects = activeFilter === "Todos"
		? projectsData
		: projectsData.filter(project => project.tags.includes(activeFilter));

	return (
		<section id="projects" className="py-20 bg-surface-light dark:bg-surface-dark">
			<div className="max-w-6xl mx-auto px-4">

				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-brand-secondary-light dark:text-brand-secondary-dark mb-4">
						Portafolio
						{/* Portfolio <span className="text-brand-primary-light dark:text-brand-primary-dark">Creativo</span> */}
					</h2>
					{/* <p className="text-brand-secondary-light/70 dark:text-brand-secondary-dark/70 max-w-2xl mx-auto">
						...
					</p> */}
				</div>

				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{allTags.map(tag => (
						<button
							key={tag}
							onClick={() => setActiveFilter(tag)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === tag
								? 'bg-brand-primary-light dark:bg-brand-primary-dark text-white dark:text-brand-secondary-dark'
								: 'bg-surface-muted-light dark:bg-surface-muted-dark text-brand-secondary-light dark:text-brand-secondary-dark hover:bg-brand-primary-light/10 dark:hover:bg-brand-primary-dark/10'
								}`}
						>
							{tag}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map(project => (
						<div
							key={project.id}
							className="relative group"
							onMouseEnter={() => setHoveredProject(project.id)}
							onMouseLeave={() => setHoveredProject(null)}
						>
							<div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark h-60 relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
								/>

								<div className={`absolute inset-0 bg-black/80 p-6 flex flex-col justify-end transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
									<h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{project.title}</h3>
									<p className="text-white/90 text-sm mb-4 drop-shadow-sm">{project.description}</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map(tag => (
											<span key={tag} className="px-2 py-1 bg-white/30 text-white text-xs rounded-full backdrop-blur-sm">
												{tag}
											</span>
										))}
									</div>

									<div className="flex gap-3">
										{project.repo && (
											<a
												href={project.repo}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
												aria-label="Repositorio"
											>
												<FaGithub className="w-4 h-4" />
											</a>
										)}
										{project.demo && (
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 bg-brand-primary-light text-white rounded-full hover:bg-brand-primary-hover-light transition-all"
												aria-label="Demo"
											>
												<FaExternalLinkAlt className="w-4 h-4" />
											</a>
										)}
									</div>
								</div>
							</div>

							{project.featured && (
								<div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-400/90 text-gray-900 text-xs px-2 py-1 rounded-full">
									<FaStar className="w-3 h-3" />
									<span>Destacado</span>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;