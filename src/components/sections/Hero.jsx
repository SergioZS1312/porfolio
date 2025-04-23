import { React } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden 
            bg-surface-light dark:bg-surface-dark"
		>
			<div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
				<AvatarImage />
				<TextContent />
			</div>
		</section>
	);
};

const AvatarImage = () => (
	<div className="relative group mx-auto w-64 h-64 md:w-80 md:h-80">
		<div
			className="absolute inset-0 rounded-full
			bg-brand-primary-light/20 dark:bg-brand-primary-dark/30 "/>
		<div className="relative z-10 w-full h-full flex items-center justify-center">
			<div className="flex flex-col items-center">
				<div
					className="text-7xl md:text-8xl font-bold 
					text-brand-primary-light dark:text-brand-primary-dark
					tracking-tighter leading-none"
				>
					SZ
				</div>

				<div className="mt-2 text-sm uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark">
					Ingeniero de Sistemas
				</div>
			</div>
		</div>

	</div>
);

const TextContent = () => (
	<div className="space-y-6 text-center md:text-left">
		<MainTitle />
		<TypeAnimationComponent />
		<Description />
		<ActionButtons />
		<SocialLinks />
	</div>
);

const MainTitle = () => (
	<h1
		className="text-4xl md:text-5xl lg:text-6xl font-bold
		text-brand-secondary-light dark:text-brand-secondary-dark"
	>
		Hola, soy{" "}
		<span className="text-brand-primary-light dark:text-brand-primary-dark">
			Sergio Zuluaga
		</span>
	</h1>
);

const TypeAnimationComponent = () => (
	<TypeAnimation
		sequence={[
			"Ingeniero de Sistemas",
			1500,
			"Desarrollador Web",
			1500,
			"Backend con C# y .NET",
			1500,
			"Frontend con React, HTML, CSS, JS y Tailwind CSS",
			1500,
		]}
		wrapper="p"
		speed={50}
		deletionSpeed={70}
		repeat={Infinity}
		className="text-xl md:text-2xl 
		text-brand-secondary-light/80 dark:text-brand-secondary-dark/80 h-8 md:h-10"
	/>
);

const Description = () => (
	<p className="text-brand-secondary-light/70 dark:text-brand-secondary-dark/70 max-w-md mx-auto md:mx-0">
		Apasionado por construir aplicaciones web que hagan la vida más fácil.
		Experiencia en desarrollo full-stack, desde la base de datos hasta la interfaz de usuario.
	</p>
);

const ActionButtons = () => (
	<div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
		{/* <PrimaryButton /> */}
		{/* <SecondaryButton /> */}
	</div>
);

const PrimaryButton = () => (
	<a
		href="#contact"
		className="px-6 py-3 flex items-center gap-2 rounded-lg font-medium shadow-lg 
        bg-brand-primary-light hover:bg-brand-primary-hover-light 
        dark:bg-brand-primary-dark dark:hover:bg-brand-primary-hover-dark 
        text-brand-tertiary-light dark:text-brand-secondary-dark 
        hover:-translate-y-0.5 hover:shadow-brand-primary-light/30 dark:hover:shadow-brand-primary-dark/30
		transition-all"
	>
		Contáctame
	</a>
);

const SecondaryButton = () => (
	<a
		href="/cv.pdf"
		download
		className="px-6 py-3 flex items-center gap-2 rounded-lg font-medium 
        border-2 border-brand-primary-light dark:border-brand-primary-dark 
        text-brand-primary-light dark:text-brand-primary-dark 
        hover:-translate-y-0.5 hover:bg-brand-primary-light/10 dark:hover:bg-brand-primary-dark/10
		transition-all"
	>
		<FaFileDownload /> Descargar CV
	</a>
);

const SocialLinks = () => (
	<div className="flex justify-center md:justify-start gap-6 pt-8">
		<SocialLink
			href="https://github.com/SergioZS1312"
			icon={<FaGithub className="w-5 h-5" />}
			label="GitHub"
		/>
		<SocialLink
			href="https://linkedin.com/in/sergio-zuluaga-sayago-b79b8627a"
			icon={<FaLinkedin className="w-5 h-5" />}
			label="LinkedIn"
		/>
	</div>
);

const SocialLink = ({ href, icon, label }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={label}
		className="p-2 rounded-full 
        bg-surface-muted-light dark:bg-surface-muted-dark 
        text-brand-secondary-light hover:text-brand-primary-light 
        dark:text-brand-secondary-dark dark:hover:text-brand-primary-dark 
        transition-colors hover:scale-110"
	>
		{icon}
	</a>
);

export default Hero;