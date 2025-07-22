import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { LucideProps } from 'lucide-react';
import { useState } from 'react';

interface Props {
  className?: string;
  children: string;
  icon: React.ComponentType<LucideProps>;
}

export const Aboba: React.FC<Props> = ({ children, icon: Icon }) => {
  const [isHover, setIsHover] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const borderGradient = useMotionTemplate`
        radial-gradient(
            ${70}px at ${mouseX}px ${mouseY}px, white, #222222
        ) border-box
    `;

  return (
    <AnimatePresence>
      <motion.div
        className="h-fit w-fit relative rounded-xl p-[2px] hover:cursor-pointer shadow-lg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          background: useMotionTemplate`
          ${isHover ? borderGradient : '#222222 border-box'}`,
          border: '2px solid transparent',
        }}
        whileTap={{ scale: 0.7 }}
        layout
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        }}
        animate={{
          scale: isHover ? 1.1 : 1,
        }}
      >
        <AnimatePresence mode="wait">
          <div className="p-3 font-black text-md bg-[#222222] flex rounded-lg justify-center items-center gap-4 text-white">
            {<Icon size={25} color="white" strokeWidth={4} />}
            {isHover && children}
          </div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
