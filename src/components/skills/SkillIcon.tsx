'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <motion.div
      className="relative grid text-2xl rounded-xl shadow-lg bg-bg-secondary dark:shadow-xl h-16 w-16 sm:h-20 sm:w-20 place-items-center group border border-accent/10 hover:border-accent/30 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon icon={src} width="36" height="36" className="transition-transform duration-300 group-hover:scale-110" />
      
      {/* Enhanced Tooltip */}
      <div className="absolute invisible px-3 py-2 text-xs font-medium text-white capitalize duration-200 rounded-lg opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-10 bg-gradient-to-r from-accent to-amber-500 shadow-lg z-10">
        {name}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 w-3 h-2 text-accent top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/10 transition-all duration-300 blur-sm -z-10" />
    </motion.div>
  );
};

export default SkillIcon;
