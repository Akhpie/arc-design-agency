import { useState, useEffect } from "react";

export type Section = {
  id: string;
  label: string;
};

export const useActiveSection = (sections: Section[]) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
};
