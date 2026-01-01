'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  slug,
  ...rest
}: ProjectType & MotionProps) => {
  
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const projectUrl = slug ? `/projects/${slug}` : null;

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <div className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl">
        {projectUrl ? (
          <Link href={projectUrl} className="block">
            <div className="overflow-hidden h-[200px] cursor-pointer">
              <Image
                src={img}
                alt={name}
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL={blurImageURL}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
              />
            </div>
          </Link>
        ) : (
          <div className="overflow-hidden h-[200px]">
            <Image
              src={img}
              alt={name}
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL={blurImageURL}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
            />
          </div>
        )}
        <div className="p-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              {repo && (
                <a
                  href={repo}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                </a>
              )}
              {url && (
                <a
                  href={url}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ci:external-link" width={22} height={22} />
                </a>
              )}
            </div>
          </div>
          {projectUrl ? (
            <Link href={projectUrl}>
              <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent cursor-pointer">
                <span>{name}</span>
                <span className="mr-1">{year}</span>
              </h4>
            </Link>
          ) : (
            <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent">
              <span>{name}</span>
              <span className="mr-1">{year}</span>
            </h4>
          )}
        </div>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
