import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectSlideshowProps {
  image: string;
  images?: string[];
  name: string;
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ image, images, name }) => {
  // Use multiple images if available, otherwise use the single image
  const slideImages = images && images.length > 0 ? images : [image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <div 
      className="relative w-full h-40 md:h-48 rounded-md overflow-hidden group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="w-full h-full"
        >
          <img 
            src={slideImages[currentIndex]} 
            alt={`${name} project - slide ${currentIndex + 1}`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>      {slideImages.length > 1 && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-between p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button 
            onClick={() => paginate(-1)}
            className="w-9 h-9 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition-all shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.8)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button 
            onClick={() => paginate(1)}
            className="w-9 h-9 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition-all shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.8)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>
      )}

      {/* Project name overlay */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.div>
        
      {/* Slide indicators */}
      {slideImages.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
          {slideImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === index ? 'bg-white shadow-[0_0_5px_rgba(255,255,255,0.7)]' : 'bg-gray-400 bg-opacity-50'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: currentIndex === index ? 1.2 : 1 }}
              animate={{ scale: currentIndex === index ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSlideshow;
