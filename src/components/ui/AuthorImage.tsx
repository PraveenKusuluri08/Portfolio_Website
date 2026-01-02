'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <motion.div 
      className="relative w-64 h-80 sm:w-80 sm:h-96 border-2 border-accent border-double rounded-md group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-md h-full">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={500}
          className="rounded shadow-2xl transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
      </div>
      <motion.div 
        className="absolute inset-0 border-[3px] z-[-1] rounded-md border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 hidden sm:block"
        whileHover={{ rotate: 1 }}
      />
    </motion.div>
  );
};

export default AuthorImage;
