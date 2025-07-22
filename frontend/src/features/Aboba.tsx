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
  const progress = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    radius.set(Math.sqrt(width * width + height * height) / 2);
    progress.set(1);
  };

  const handleMouseLeave = () => {
    progress.set(0);
  };

  const borderGradient = useMotionTemplate`
        radial-gradient(
            ${40}px at ${mouseX}px ${mouseY}px, white, #222222
        )
    `;

  return (
    <motion.div
      className="relative rounded-xl p-[2px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: useMotionTemplate`linear-gradient(
          #222222,
          #222222
        ) padding-box,
        ${borderGradient} border-box`,
        border: '2px solid transparent',
      }}
      animate={{
        borderImageSlice: 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-[10px] font-black bg-[#222222] flex rounded-lg justify-center items-center gap-2 text-white">
        {<Icon size={20} color="white" strokeWidth={4} />}
        {children}
      </div>
    </motion.div>
  );
};
