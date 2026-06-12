import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Magnetic({ children }) {
  const ref = useRef(null);

  // Set up motion values for x and y translations
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics configuration for elastic bounce back
  const springConfig = { damping: 15, stiffness: 150, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate the element's center point
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate vector from center of button to mouse pointer
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Shift coordinates by 35% of the mouse offset (magnetic attraction)
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    // Return button to origin coordinate (0, 0)
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}
