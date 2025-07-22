import { motion } from 'framer-motion';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  children: string;
  icon: React.ComponentType<LucideProps>;
}

export const Aboba: React.FC<Props> = ({ children, icon: Icon }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-400 outline-1 outline-blue-500 flex"
    >
      {<Icon size={20} />}
      {children}
    </motion.button>
  );
};
