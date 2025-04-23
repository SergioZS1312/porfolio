import { FaGithub, FaLinkedin } from "react-icons/fa";
import navLinks from "../../data/navLinks";

const Footer = () => {
	return (
		<footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-4">
						<h1 className="text-xl font-bold text-brand-primary-light dark:text-brand-primary-dark">
							Sergio Zuluaga
						</h1>
						<p className="text-brand-secondary-light/70 dark:text-brand-secondary-dark/70">
							Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.
						</p>
					</div>

					<div className="space-y-4">
						<h1 className="text-lg font-semibold text-brand-secondary-light dark:text-brand-secondary-dark">
							Enlaces
						</h1>
						<ul className="space-y-2">
							{navLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="
										text-brand-secondary-light/70 hover:text-brand-primary-light 
										dark:text-brand-secondary-dark/70 dark:hover:text-brand-primary-dark"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h1 className="text-lg font-semibold text-brand-secondary-light dark:text-brand-secondary-dark">
							Contacto
						</h1>
						<div className="flex gap-4">
							<a
								href="https://github.com/SergioZS1312"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="p-2 rounded-full 
								bg-surface-muted-light dark:bg-surface-muted-dark 
								text-brand-secondary-light hover:text-brand-primary-light 
								dark:text-brand-secondary-dark dark:hover:text-brand-primary-dark"
							>
								<FaGithub className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com/in/sergio-zuluaga-sayago-b79b8627a"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="p-2 rounded-full 
								bg-surface-muted-light dark:bg-surface-muted-dark 
								text-brand-secondary-light hover:text-brand-primary-light 
								dark:text-brand-secondary-dark dark:hover:text-brand-primary-dark"
							>
								<FaLinkedin className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="text-sm text-center mt-8 pt-8 
				border-t border-border-light dark:border-border-dark 
				text-brand-secondary-light/50 dark:text-brand-secondary-dark/50">
					<p>© {new Date().getFullYear()} Sergio Zuluaga. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;