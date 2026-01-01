'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import Skill from '@/components/skills/Skill';
import Wrapper from '@/components/ui/Wrapper';

import { getSectionAnimation, slideUp } from '@/styles/animations';
import { motion } from 'framer-motion';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="skills" className="relative" {...getSectionAnimation}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Enhanced Title */}
      <motion.div
        variants={slideUp({ delay: 0.1, offset: 20 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          <span className="text-dark-2 dark:text-dark-1">What I </span>
          <span className="bg-gradient-to-r from-accent via-amber-500 to-accent bg-clip-text text-transparent">
            Do
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto" />
        <p className="mt-4 text-text text-lg max-w-2xl mx-auto">
          Technologies and tools I've worked with to build scalable, high-performance applications
        </p>
      </motion.div>

      <div className="space-y-16">
        {skills.map(({ id, lottie, softwareSkills, points, title }, index) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDarkMode ? 'dark' : 'light']}
            skills={softwareSkills}
            points={points}
            title={title}
            variants={slideUp({ delay: 0.2 + index * 0.1, offset: 30 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
