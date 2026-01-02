'use client';

import { motion, MotionProps } from 'framer-motion';

type Props = { 
  children: React.ReactNode; 
  className?: string;
} & Partial<MotionProps>;

const ListItem = ({ children, className = '', ...motionProps }: Props) => {
  const baseClassName = `before:content-['▹'] flex before:mr-3 before:text-accent before:block ${className}`;
  
  // If motion props are provided, use motion.li, otherwise use regular li
  if (Object.keys(motionProps).length > 0) {
    return (
      <motion.li
        className={baseClassName}
        {...motionProps}
      >
        {children}
      </motion.li>
    );
  }
  
  return (
    <li className={baseClassName}>
      {children}
    </li>
  );
};

export default ListItem;
