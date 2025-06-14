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
    // Generate random particles with enhanced color palette
    const colors = [
      'rgba(30, 64, 175, 0.6)',  // Deep blue with transparency
      'rgba(59, 130, 246, 0.6)', // Medium blue with transparency
      'rgba(96, 165, 250, 0.5)', // Light blue with transparency
      'rgba(147, 197, 253, 0.4)', // Very light blue with transparency
      'rgba(219, 234, 254, 0.3)', // Subtle blue with transparency
      'rgba(8, 145, 178, 0.5)',   // Cyan with transparency
      'rgba(6, 182, 212, 0.4)',   // Light cyan with transparency
      'rgba(14, 116, 144, 0.5)',  // Dark cyan with transparency
    ];
    const newParticles: Particle[] = [];
    
    // Create more particles for a richer visual effect
    for (let i = 0; i < 90; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 1, // More variety in sizes
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 0,
            opacity: 0
          }}
          animate={{
            x: [
              `${particle.x}vw`, 
              `${(particle.x + (Math.random() * 15) - 7.5) % 100}vw`, 
              `${(particle.x + (Math.random() * 15) - 7.5) % 100}vw`,
              `${particle.x}vw`
            ],
            y: [
              `${particle.y}vh`, 
              `${(particle.y + (Math.random() * 15) - 7.5) % 100}vh`, 
              `${(particle.y + (Math.random() * 15) - 7.5) % 100}vh`,
              `${particle.y}vh`
            ],
            scale: [0, 1, 1, 0],
            opacity: [0, 0.8, 0.8, 0]
          }}          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.random() * 40 + 25, // Longer, more varied durations
            ease: "easeInOut",
            delay: Math.random() * 8 // More varied delays
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 0.5}px ${particle.color}`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
