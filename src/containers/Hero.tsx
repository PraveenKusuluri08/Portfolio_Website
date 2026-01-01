'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const {
    cta,
    subtitle,
    title,
    tagline,
    description,
    longDescription,
    specialText,
    techStack,
  } = heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.5 : 0.8;

  const getAnimationDelay = (i: number, increment = 0.1) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Technology icons mapping
  const techIcons: Record<string, string> = {
    'Java Spring Boot': 'simple-icons:spring',
    'React.js': 'simple-icons:react',
    'Next.js': 'simple-icons:nextdotjs',
    'Node.js': 'simple-icons:nodedotjs',
    'Go (Golang)': 'simple-icons:go',
    TypeScript: 'simple-icons:typescript',
    MongoDB: 'simple-icons:mongodb',
    PostgreSQL: 'simple-icons:postgresql',
    AWS: 'simple-icons:amazonaws',
    'Google Cloud': 'simple-icons:googlecloud',
  };

  if (!mounted) {
    return (
      <Wrapper
        id="hero"
        className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
      >
        <></>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      id="hero"
      className="relative flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Greeting */}
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0), offset: 30 })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base text-accent"
        whileHover={{ scale: 1.05 }}
      >
        {subtitle}
      </motion.p>

      {/* Main Title with Gradient Effect */}
      <div className="max-w-6xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1), offset: 40 })}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-[1.1]"
        >
          <span className="block text-slate-900 dark:text-slate-100">
            {title.split(' ')[0]}
          </span>
          <span className="block bg-gradient-to-r from-accent via-amber-500 to-accent bg-clip-text text-transparent">
            {title.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.h2
          variants={slideUp({ delay: getAnimationDelay(2), offset: 40 })}
          initial="hidden"
          animate="show"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-700 dark:text-slate-300 mb-6 leading-tight"
        >
          {tagline}
        </motion.h2>
      </div>

      {/* Enhanced Description */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(3), offset: 30 })}
        initial="hidden"
        animate="show"
        className="max-w-3xl space-y-4 border-0 outline-none"
        style={{ border: 'none', textDecoration: 'none' }}
      >
        <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed border-0 outline-none" style={{ border: 'none', textDecoration: 'none' }}>
          {description}
        </p>
        {longDescription && (
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-500 leading-relaxed border-0 outline-none" style={{ border: 'none', textDecoration: 'none' }}>
            {longDescription}
          </p>
        )}
      </motion.div>

      {/* Technology Stack Badges */}
      {techStack && techStack.length > 0 && (
        <motion.div
          variants={slideUp({ delay: getAnimationDelay(4), offset: 30 })}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-3 mt-4"
        >
          <span className="font-mono text-xs text-text/70 mr-2">
            Tech Stack:
          </span>
          {techStack.map((tech, index) => {
            const icon = techIcons[tech] || 'mdi:code-tags';
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: getAnimationDelay(4) + index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="group relative"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-secondary border border-accent/20 rounded-full hover:border-accent hover:bg-accent-light transition-all duration-200 cursor-default">
                  <Icon
                    icon={icon}
                    width={16}
                    height={16}
                    className="text-accent"
                  />
                  <span className="text-xs font-medium text-text">
                    {tech}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Special Text with Icon */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(5), offset: 30 })}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3 mt-2"
      >
        <motion.div
          className="flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/30 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          <Icon
            icon="mdi:check-circle"
            width={16}
            height={16}
            className="text-accent"
          />
          <p className="font-mono text-xs md:text-sm text-accent">
            {specialText}
          </p>
        </motion.div>
      </motion.div>

      {/* Enhanced CTA Buttons */}
      {cta && (
        <motion.div
          variants={slideUp({ delay: getAnimationDelay(6), offset: 30 })}
          initial="hidden"
          animate="show"
          className={`flex flex-wrap items-center gap-4 mt-6 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
        >
          <Button
            size="lg"
            type="link"
            href={cta?.url ?? '#'}
            sameTab={cta?.sameTab}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Icon
                icon="mdi:file-document-outline"
                width={20}
                height={20}
                className="group-hover:rotate-12 transition-transform duration-200"
              />
              {cta.title}
              <Icon
                icon="mdi:arrow-right"
                width={18}
                height={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
          </Button>

          <motion.a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-4 text-sm font-mono border-2 border-accent/30 rounded hover:border-accent hover:bg-accent-light text-accent transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              icon="mdi:email-outline"
              width={18}
              height={18}
              className="group-hover:rotate-12 transition-transform duration-200"
            />
            Get In Touch
          </motion.a>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(7), offset: 20 })}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-text/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-mono text-xs">Scroll</span>
          <Icon icon="mdi:chevron-down" width={24} height={24} />
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

export default Hero;
