import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate random particles
    const colors = ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 0
          }}
          animate={{
            x: [
              `${particle.x}vw`, 
              `${(particle.x + (Math.random() * 10) - 5) % 100}vw`, 
              `${(particle.x + (Math.random() * 10) - 5) % 100}vw`,
              `${particle.x}vw`
            ],
            y: [
              `${particle.y}vh`, 
              `${(particle.y + (Math.random() * 10) - 5) % 100}vh`, 
              `${(particle.y + (Math.random() * 10) - 5) % 100}vh`,
              `${particle.y}vh`
            ],
            scale: [0, 1, 1, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 20 + 15,
            ease: "easeInOut"
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
