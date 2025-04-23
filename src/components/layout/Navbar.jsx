import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeDown } from "../../utils/motionVariants";
import useActiveSection from "../../hooks/useActiveSection";
import navLinks from "../../data/navLinks";
import DarkToggle from "./DarkToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const sectionIds = navLinks.map(link => link.href.substring(1));
    const activeSection = useActiveSection(sectionIds);

    useClickOutside(menuRef, () => setIsOpen(false));

    return (
        <motion.nav
            {...fadeDown}
            role="navigation"
            aria-label="Main navigation"
            className="bg-surface-light dark:bg-surface-dark"
        >
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <Logo />
                <DesktopNav activeSection={activeSection} />
                <MobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <MobileMenu
                isOpen={isOpen}
                menuRef={menuRef}
                setIsOpen={setIsOpen}
                activeSection={activeSection}
            />
        </motion.nav>
    );
};

const useClickOutside = (ref, handler) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, handler]);
};

const Logo = ({ setIsMobileOpen }) => (
    <a
        href="#home"
        className="text-2xl font-bold 
        text-brand-primary-light dark:text-brand-primary-dark 
        hover:text-brand-primary-hover-light dark:hover:text-brand-primary-hover-dark"
        onClick={() => setIsMobileOpen(false)}
    >
        Sergio Zuluaga
    </a>
);

const DesktopNav = ({ activeSection }) => {
    return (
        <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
                <NavLink
                    key={link.name}
                    href={link.href}
                    isMobile={false}
                    isActive={activeSection === link.href.substring(1)}
                >
                    {link.name}
                </NavLink>
            ))}

            <SocialLinks />
        </div>
    );
};

const MobileToggle = ({ isOpen, setIsOpen }) => (
    <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md
        text-text-primary-light dark:text-text-primary-dark
        hover:bg-surface-muted-light dark:hover:bg-surface-muted-dark"
    >
        {isOpen ? (
            <FaTimes className="h-6 w-6 text-brand-secondary-light dark:text-brand-secondary-dark" />
        ) : (
            <FaBars className="h-6 w-6 text-brand-secondary-light dark:text-brand-secondary-dark" />
        )}
    </button>
);

const MobileMenu = ({ isOpen, menuRef, setIsOpen, activeSection }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    ref={menuRef}
                    className="md:hidden px-6 py-3 space-y-2 
                    bg-surface-light dark:bg-surface-dark 
                    border-b border-border-light dark:border-border-dark"
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            href={link.href}
                            isMobile={true}
                            onClick={() => setIsOpen(false)}
                            isActive={activeSection === link.href.substring(1)}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <MobileSocialLinks />
                </motion.div>
            )}
        </AnimatePresence>
    )
};

const NavLink = ({ href, children, isMobile, onClick, isActive }) => {
    const baseClasses = "font-medium rounded-md";
    const mobileClasses = "block px-4 py-3 rounded-lg hover:bg-surface-muted-light dark:hover:bg-surface-muted-dark text-lg";
    const desktopClasses = "px-3 py-2 text-sm hover:bg-surface-muted-light dark:hover:bg-surface-muted-dark";

    const activeClasses = isActive
        ? "text-brand-primary-light dark:text-brand-primary-dark bg-surface-muted-light dark:bg-surface-muted-dark"
        : "text-brand-secondary-light dark:text-brand-secondary-dark";

    return (
        <a
            href={href}
            onClick={onClick}
            className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${activeClasses}`}
        >
            {children}
        </a>
    );
};

const SocialLinks = () => (
    <div className="flex items-center gap-4 ml-4">
        <a
            href="https://github.com/SergioZS1312"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-brand-secondary-light dark:text-brand-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark"
        >
            <FaGithub className="w-5 h-5" />
        </a>
        <a
            href="https://linkedin.com/in/sergio-zuluaga-sayago-b79b8627a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-brand-secondary-light dark:text-brand-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark"
        >
            <FaLinkedin className="w-5 h-5" />
        </a>

        <DarkToggle />
    </div>
);

const MobileSocialLinks = () => (
    <div className="mt-auto pt-8 border-t border-border-light dark:border-border-dark">
        <div className="flex justify-center gap-6">
            <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3
                bg-surface-muted-light dark:bg-surface-muted-dark rounded-full
                text-brand-secondary-light hover:text-brand-primary-light dark:text-brand-secondary-dark dark:hover:text-brand-primary-dark"
            >
                <FaGithub className="w-6 h-6" />
            </a>
            <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 
                bg-surface-muted-light dark:bg-surface-muted-dark rounded-full 
                text-brand-secondary-light hover:text-brand-primary-light dark:text-brand-secondary-dark dark:hover:text-brand-primary-dark"
            >
                <FaLinkedin className="w-6 h-6" />
            </a>
            <DarkToggle isMobile />
        </div>
    </div>
);

export default Navbar;