// // import { motion } from 'framer-motion';
// import type { LucideProps } from 'lucide-react';
// import React from 'react';

// interface Props {
//   className?: string;
//   children: string;
//   icon: React.ComponentType<LucideProps>;
// }

// export const Aboba: React.FC<Props> = ({ children, icon: Icon }) => {
//   return (
//     <div className="relative">
//       <div className="gradient-border p-[10px] font-black flex justify-center items-center gap-2 text-white">
//         {<Icon size={20} color="white" strokeWidth={4} />}
//         {children}
//       </div>
//     </div>
//   );
// };

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  children: string;
  icon: React.ComponentType<LucideProps>;
}

export const Aboba: React.FC<Props> = ({ children, icon: Icon }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const opacity = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    radius.set(Math.sqrt(width * width + height * height) / 2);
    opacity.set(0.2);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  const background = useMotionTemplate`radial-gradient(
    ${radius}px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 80%
  )`;

  return (
    <div
      className="relative rounded-xl p-[2px] gradient-border overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background,
          opacity,
        }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative p-[10px] font-black bg-[#222222] flex rounded-lg justify-center items-center gap-2 text-white z-10">
        {<Icon size={20} color="white" strokeWidth={4} />}
        {children}
      </div>
    </div>
  );
};
