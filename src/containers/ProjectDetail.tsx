'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { Button, Wrapper } from '@/components';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  project: ProjectType;
};

const ProjectDetail = ({ project }: Props) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.img];

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

  if (!domLoaded) {
    return <></>;
  }

  return (
    <Wrapper className="min-h-screen py-20 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-200 group"
          >
            <Icon
              icon="mdi:arrow-left"
              width={24}
              height={24}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span className="font-mono">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-mono bg-accent-light text-accent rounded-full border border-accent/20"
              >
                {tag}
              </span>
            ))}
            <span className="px-3 py-1 text-xs font-mono bg-bg-secondary text-text rounded-full border border-accent/20">
              {project.year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-2 leading-tight">
            {project.name}
          </h1>
          {project.description && (
            <p className="text-lg md:text-xl text-text max-w-3xl leading-relaxed">
              {project.description}
            </p>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {project.repo && (
            <Button
              type="link"
              href={project.repo}
              size="lg"
              className="flex items-center gap-2"
            >
              <Icon icon="tabler:brand-github" width={20} height={20} />
              View Code
            </Button>
          )}
          {project.url && (
            <Button
              type="link"
              href={project.url}
              size="lg"
              className="flex items-center gap-2"
            >
              <Icon icon="ci:external-link" width={20} height={20} />
              Live Demo
            </Button>
          )}
        </motion.div>

        {/* Main Image Gallery */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl bg-bg-secondary">
            <Image
              src={images[selectedImage]}
              alt={`${project.name} - Image ${selectedImage + 1}`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurImageURL}
              priority
            />
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-accent scale-105 shadow-lg'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-accent/50'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurImageURL}
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Long Description */}
        {project.longDescription && (
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-dark-2">About This Project</h2>
            <div className="space-y-4 text-text leading-relaxed">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Technologies Used */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-dark-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-bg-secondary border border-accent/20 rounded-lg text-sm font-medium text-text hover:border-accent hover:bg-accent-light transition-all duration-200"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Footer */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between pt-12 border-t border-accent/20"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-200 group"
          >
            <Icon
              icon="mdi:arrow-left"
              width={20}
              height={20}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span className="font-mono">All Projects</span>
          </Link>
          <div className="flex items-center gap-2 text-text">
            <Icon icon="mdi:calendar" width={18} height={18} />
            <span className="font-mono text-sm">{project.year}</span>
          </div>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

export default ProjectDetail;

