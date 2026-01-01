'use client';

import { motion, MotionProps } from 'framer-motion';
import { ElementType, HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}: Props & MotionProps) => {
  const baseClassName = `py-24 md:py-32 ${className}`;

  // Always use motion.section when animate is true to avoid build issues
  if (animate) {
    return (
      <motion.section
        id={id}
        className={baseClassName}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }

  // Use the specified tag when animate is false
  const CustomTag = as as ElementType;
  return (
    <CustomTag id={id} className={baseClassName} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
