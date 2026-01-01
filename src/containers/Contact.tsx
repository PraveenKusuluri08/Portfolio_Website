'use client';
import { contactSection } from '@/lib/content/contact';
import { socialSection } from '@/lib/content/social';
import { author } from '@/lib/content/portfolio';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation, slideUp } from '@/styles/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  const { socialLinks } = socialSection;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const githubLink = socialLinks.find((s) => s.icon === 'tabler:brand-github');
  const linkedinLink = socialLinks.find((s) => s.icon === 'lucide:linkedin');

  const contactMethods = [
    {
      icon: 'mdi:email-outline',
      label: 'Email',
      value: author.email,
      href: link,
      color: 'text-blue-500 dark:text-blue-400',
    },
    {
      icon: 'tabler:brand-github',
      label: 'GitHub',
      value: 'PraveenKusuluri08',
      href: githubLink?.url || '#',
      color: 'text-gray-700 dark:text-gray-300',
    },
    {
      icon: 'lucide:linkedin',
      label: 'LinkedIn',
      value: 'Praveen Kusuluri',
      href: linkedinLink?.url || '#',
      color: 'text-blue-600 dark:text-blue-400',
    },
  ];

  return (
    <Wrapper
      id="contact"
      className="max-w-4xl mx-auto !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.p
          variants={itemVariants}
          className="mb-3 font-mono text-sm capitalize text-accent"
        >
          {subtitle}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="heading-secondary !mb-6"
        >
          {title}
        </motion.h2>

        {paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className="text-base md:text-lg text-text mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {/* Contact Methods Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel={method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
            variants={itemVariants}
            className="group relative p-6 bg-bg-secondary rounded-lg border border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div
                className={`p-3 rounded-full bg-accent-light ${method.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon icon={method.icon} width={28} height={28} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-text mb-1">
                  {method.label}
                </h3>
                <p className="text-xs text-text/70 font-mono break-all">
                  {method.value}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        variants={slideUp({ delay: 0.4 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <Button
          type="link"
          size="lg"
          href={link}
          center
          className="group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Icon
              icon="mdi:email-fast-outline"
              width={20}
              height={20}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
            Say Hello
            <Icon
              icon="mdi:arrow-right"
              width={18}
              height={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </span>
        </Button>
      </motion.div>

      {/* Decorative Element */}
      <motion.div
        variants={slideUp({ delay: 0.5 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-text/60 font-mono">
          Let's build something amazing together
        </p>
      </motion.div>
    </Wrapper>
  );
};

export default Contact;
