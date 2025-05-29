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

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };  return (
    <div className="relative w-full h-40 rounded-md overflow-hidden group">
      <motion.div 
        key={currentIndex}
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={slideImages[currentIndex]} 
          alt={`${name} project - slide ${currentIndex + 1}`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
        {/* Navigation arrows - shown on hover */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button 
          onClick={goToPrevious}
          className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </motion.button>
        <motion.button 
          onClick={goToNext}
          className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </motion.button>
      </div>
        {/* Slide indicators */}
      {slideImages.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {slideImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-white shadow-glow' : 'bg-gray-400 bg-opacity-50'
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
