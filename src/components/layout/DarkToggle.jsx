import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DarkToggle = ({ isMobile = false }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newDarkMode);
        setDarkMode(newDarkMode);
    };

    return (
        <motion.button
            aria-label={`Cambiar a modo ${darkMode ? 'claro' : 'oscuro'}`}
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            className={`${isMobile ? 'p-3' : 'p-2'} rounded-full focus:outline-none 
                text-brand-secondary-light dark:text-brand-secondary-dark 
                hover:bg-surface-muted-light dark:hover:bg-surface-muted-dark 
                transition-colors`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={darkMode ? 'dark' : 'light'}
                    initial={{ rotate: darkMode ? 30 : -30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: darkMode ? -30 : 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {darkMode ? (
                        <FaSun className="w-5 h-5" />
                    ) : (
                        <FaMoon className="w-5 h-5" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default DarkToggle;