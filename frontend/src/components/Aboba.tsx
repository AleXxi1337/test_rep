// import { motion } from 'framer-motion';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  children: string;
  icon: React.ComponentType<LucideProps>;
}

export const Aboba: React.FC<Props> = ({ children, icon: Icon }) => {
  return (
    <div className="relative">
      <div className="relative p-1 font-black bg-[#222222] flex rounded-md justify-center items-center gap-2 text-white z-10">
        {<Icon size={20} color="white" strokeWidth={4} />}
        {children}
      </div>
      <div className="absolute -inset-[2px] rounded-md bg-amber-600" />
    </div>
  );
};
