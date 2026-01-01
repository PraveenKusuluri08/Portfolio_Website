"use client"
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, Link, Wrapper } from '@/components';

import { getSectionAnimation, slideUp, fadeIn } from '@/styles/animations';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const About = () => {
  const { title, img, list } = aboutSection;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // Technology icons mapping
  const techIcons: Record<string, string> = {
    'NextJs / TypeScript': 'simple-icons:nextdotjs',
    'NodeJs': 'simple-icons:nodedotjs',
    'ReactJs': 'simple-icons:react',
    'ExpressJs': 'simple-icons:express',
    'Java': 'simple-icons:java',
    'Go (Golang)': 'simple-icons:go',
    'TailwindCSS': 'simple-icons:tailwindcss',
    'MongoDB': 'simple-icons:mongodb',
    'PostgreSQL': 'simple-icons:postgresql',
  };

  return domLoaded ? (
    <Wrapper id="about" className="relative" {...getSectionAnimation}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Enhanced Title */}
      <motion.div
        variants={slideUp({ delay: 0.1, offset: 20 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          <span className="text-dark-2 dark:text-dark-1">About </span>
          <span className="bg-gradient-to-r from-accent via-amber-500 to-accent bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full" />
      </motion.div>

      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        {/* Content Section with better styling */}
        <motion.div
          variants={slideUp({ delay: 0.2, offset: 30 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5 lg:w-3/5 text-justify"
        >
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-text">
            <p className="text-lg md:text-xl font-medium text-dark-2 dark:text-dark-1 leading-relaxed">
              Hi, I'm <span className="font-bold text-accent">Praveen Kusuluri,</span> a Master's graduate in Computer Science from <Link href="https://www.kent.edu/about" target="_blank" className="text-accent hover:underline font-semibold transition-all">Kent State University</Link>. With experience as a <span className="font-semibold text-dark-2 dark:text-dark-1">Full-Stack Developer</span> and <span className="font-semibold text-dark-2 dark:text-dark-1">Software Engineer</span>, I <span className="font-semibold text-dark-2 dark:text-dark-1">build</span> scalable applications that serve thousands of users.
            </p>
            <p>
              At <Link href="https://www.kent.edu/" target="_blank" className="text-accent hover:underline font-semibold transition-all">Kent State University</Link>, I <span className="font-semibold text-dark-2 dark:text-dark-1">developed</span> a Student Engagement Analytics Platform using <span className="font-semibold text-dark-2 dark:text-dark-1">React.js</span>, <span className="font-semibold text-dark-2 dark:text-dark-1">TypeScript</span>, and <span className="font-semibold text-dark-2 dark:text-dark-1">Java Spring Boot</span>, <span className="font-semibold text-dark-2 dark:text-dark-1">deployed</span> on <span className="font-semibold text-dark-2 dark:text-dark-1">AWS Lambda</span> with <span className="font-semibold text-dark-2 dark:text-dark-1">PostgreSQL</span>, serving 1,000+ students. I <span className="font-semibold text-dark-2 dark:text-dark-1">designed</span> RESTful APIs that improved performance by 30% and <span className="font-semibold text-dark-2 dark:text-dark-1">automated</span> CI/CD pipelines achieving 95% test coverage.
            </p>
            <p>
              As a Full-Stack Developer at <Link href="https://workforce.flairtechno.com/login" target="_blank" className="text-accent hover:underline font-semibold transition-all">Eficens Systems</Link>, I <span className="font-semibold text-dark-2 dark:text-dark-1">built</span> responsive web applications with <span className="font-semibold text-dark-2 dark:text-dark-1">React.js</span>, <span className="font-semibold text-dark-2 dark:text-dark-1">Redux</span>, and <span className="font-semibold text-dark-2 dark:text-dark-1">Node.js</span>, <span className="font-semibold text-dark-2 dark:text-dark-1">leveraged</span> <span className="font-semibold text-dark-2 dark:text-dark-1">Google Cloud Functions</span> for serverless architecture, and <span className="font-semibold text-dark-2 dark:text-dark-1">created</span> a PDF automation system that significantly reduced operational costs. I also <span className="font-semibold text-dark-2 dark:text-dark-1">developed</span> an Immigration Management Portal supporting 1,000+ daily users with a microservice architecture that reduced workflows by 40%.
            </p>
            <p>
              Through freelance work, I <span className="font-semibold text-dark-2 dark:text-dark-1">designed</span> <span className="font-semibold text-dark-2 dark:text-dark-1">Firebase Cloud Functions</span> for iOS applications, <span className="font-semibold text-dark-2 dark:text-dark-1">integrated</span> <span className="font-semibold text-dark-2 dark:text-dark-1">Google Cloud Pub/Sub</span> for event-driven workflows, and <span className="font-semibold text-dark-2 dark:text-dark-1">optimized</span> serverless functions for improved performance and client satisfaction.
            </p>
          </div>

          {/* Technology Stack Section */}
          {list && (
            <motion.div
              variants={fadeIn(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 pt-8 border-t border-accent/20"
            >
              <h3 className="text-xl font-semibold mb-5 text-dark-2 dark:text-dark-1">
                {list.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {list.items.map((tech, index) => {
                  const icon = techIcons[tech] || 'simple-icons:javascript';
                  return (
                    <motion.div
                      key={tech}
                      variants={slideUp({ delay: 0.1 * index, offset: 15 })}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group cursor-default"
                    >
                      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-bg-secondary dark:bg-bg-secondary border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-accent-light hover:shadow-md transition-all duration-300">
                        <Icon icon={icon} width={20} height={20} className="text-accent" />
                        <span className="text-sm font-medium text-text">{tech}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Image Section with subtle enhancements */}
        <motion.div
          variants={slideUp({ delay: 0.3, offset: 30 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <AuthorImage src={img} alt={author.name} />
          </div>
        </motion.div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
