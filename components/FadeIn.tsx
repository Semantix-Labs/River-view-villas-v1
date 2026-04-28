'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({ children, delay = 0, y = 24, className, style }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
