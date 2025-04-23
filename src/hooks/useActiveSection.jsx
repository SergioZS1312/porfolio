// hooks/useActiveSection.js
import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, threshold = 0.5) => {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.7 }
		);

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => {
			sectionIds.forEach((id) => {
				const element = document.getElementById(id);
				if (element) observer.unobserve(element);
			});
		};
	}, [sectionIds, threshold]);

	return activeSection;
};

export default useActiveSection;