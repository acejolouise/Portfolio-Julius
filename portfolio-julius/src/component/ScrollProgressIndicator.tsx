import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      const scrollPosition = window.scrollY;
      setShowScrollToTop(scrollPosition > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Scroll to top button */}      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border border-blue-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0.5,
          y: showScrollToTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </>
  );
};

export default ScrollProgressIndicator;
