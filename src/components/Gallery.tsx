import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, GalleryVertical as GalleryIcon, X } from 'lucide-react';
import AnimatedBackground from "./AnimatedBackground";

// Import all images statically
import image1 from "../assets/uic-gallery/image1.jpg";
import image2 from "../assets/uic-gallery/image2.jpg";
import image3 from "../assets/uic-gallery/image3.jpg";
import image4 from "../assets/uic-gallery/image4.jpg";
import image5 from "../assets/uic-gallery/image5.jpg";
import image6 from "../assets/uic-gallery/image6.jpg";
import image7 from "../assets/uic-gallery/image7.jpg";
import image8 from "../assets/uic-gallery/image8.jpg";
import image9 from "../assets/uic-gallery/image9.jpg";
import image10 from "../assets/uic-gallery/image10.jpg";
import image11 from "../assets/uic-gallery/image11.jpg";
import image12 from "../assets/uic-gallery/image12.jpg";
import image13 from "../assets/uic-gallery/image13.jpg";
import image14 from "../assets/uic-gallery/image14.jpg";
import image15 from "../assets/uic-gallery/image15.jpg";
import image16 from "../assets/uic-gallery/image16.jpg";
import image17 from "../assets/uic-gallery/image17.jpg";
import image18 from "../assets/uic-gallery/image18.jpg";
import image19 from "../assets/uic-gallery/image19.jpg";
import image20 from "../assets/uic-gallery/image20.jpg";
import image21 from "../assets/uic-gallery/image21.jpg";
import image22 from "../assets/uic-gallery/image22.jpg";
import image23 from "../assets/uic-gallery/image23.jpg";
import image24 from "../assets/uic-gallery/image24.jpg";
import image25 from "../assets/uic-gallery/image25.jpg";
import image26 from "../assets/uic-gallery/image26.jpg";
import image27 from "../assets/uic-gallery/image27.jpg";
import image28 from "../assets/uic-gallery/image28.jpg";
import image29 from "../assets/uic-gallery/image29.jpg";
import image30 from "../assets/uic-gallery/image30.jpg";
import image31 from "../assets/uic-gallery/image31.jpg";
import image32 from "../assets/uic-gallery/image32.jpg";
import image33 from "../assets/uic-gallery/image33.jpg";
import image34 from "../assets/uic-gallery/image34.jpg";
import image35 from "../assets/uic-gallery/image35.jpg";
import image36 from "../assets/uic-gallery/image36.jpg";
import image37 from "../assets/uic-gallery/image37.jpg";
import image38 from "../assets/uic-gallery/image38.jpg";
import image39 from "../assets/uic-gallery/image39.jpg";
import image40 from "../assets/uic-gallery/image40.jpg";
import image41 from "../assets/uic-gallery/image41.jpg";
import image42 from "../assets/uic-gallery/image42.jpg";
import image43 from "../assets/uic-gallery/image43.jpg";
import image44 from "../assets/uic-gallery/image44.jpg";
import image45 from "../assets/uic-gallery/image45.jpg";
import image46 from "../assets/uic-gallery/image46.jpg";

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8,
  image9, image10, image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46
];


const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  const handleDrag = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = info.offset.x;
    const swipeThreshold = 30; // Reduced threshold for easier swipe
    
    if (Math.abs(swipe) > swipeThreshold) {
      if (swipe < 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
    }
  };

  const dragProps = {
    drag: "x" as const,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.2, // Reduced elasticity for more controlled feel
    onDragEnd: handleDrag,
    dragTransition: { bounceStiffness: 600, bounceDamping: 20 }
  };

  const getVisibleImages = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return [previousIndex, currentIndex, nextIndex];
  };

  const visibleImages = getVisibleImages();

  interface ImageContainerProps {
    src: string;
    index: number;
    isCurrent?: boolean;
    className?: string;
    onClick?: () => void;
  }

  const ImageContainer: React.FC<ImageContainerProps> = ({ src, index, isCurrent = false, className = '', onClick }) => (
    <div 
      className={`relative flex items-center justify-center ${className} ${onClick ? 'cursor-pointer' : ''} ${isCurrent ? 'ring-2 ring-[#ff8329] ring-opacity-50 rounded-xl' : ''}`}
      onClick={onClick}
    >
      {/* Enhanced blurred background with reduced blur and margin */}
      <div 
        className="absolute inset-0 -m-2 sm:-m-4"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(15px) brightness(0.4)',
          transform: 'scale(1.1)',
        }}
      />
      {/* Glass effect overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      {/* Main image container with improved glass effect */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1F2937]/30 backdrop-blur-md flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col py-6 sm:py-12 px-4 relative" id="gallery">
      <AnimatedBackground />
      <div className="flex flex-col items-center relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <GalleryIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff8329]" />
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Orbitron']">
            Gallery
          </h2>
        </div>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Explore moments and memories from our innovative journey through these captivating images.
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="relative w-full max-w-[90rem]">
          {/* Mobile view (single image) */}
          <div className="block md:hidden">
            <motion.div
              className="w-full aspect-[4/3] sm:aspect-[16/9] touch-pan-y"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              {...dragProps}
            >
              <ImageContainer 
                src={images[currentIndex]} 
                index={currentIndex}
                isCurrent={true}
                onClick={() => setIsModalOpen(true)}
              />
            </motion.div>
          </div>

          {/* Tablet/Desktop view (three images) */}
          <div className="hidden md:block">
            <motion.div 
              className="flex items-center justify-center gap-6 lg:gap-8 h-[45vh] lg:h-[60vh] touch-pan-y"
              {...dragProps}
            >
              {visibleImages.map((imageIndex, i) => (
                <motion.div
                  key={imageIndex}
                  className={i === 1 
                    ? 'w-[55vw] max-w-[800px] h-full' 
                    : 'w-[28vw] max-w-[400px] h-[85%]'
                  }
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: i === 1 ? 1 : 0.85,
                    opacity: i === 1 ? 1 : 0.5,
                    y: i === 1 ? 0 : 20
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <ImageContainer 
                    src={images[imageIndex]} 
                    index={imageIndex}
                    isCurrent={i === 1}
                    className="h-full"
                    onClick={() => {
                      setCurrentIndex(imageIndex);
                      setIsModalOpen(true);
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced navigation buttons - hidden on mobile */}
          <button
            className="hidden md:block absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full text-white transition-all duration-300 z-10 backdrop-blur-lg"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            className="hidden md:block absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full text-white transition-all duration-300 z-10 backdrop-blur-lg"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Enhanced pagination dots */}
        <div className="mt-8 sm:mt-12 flex gap-3 flex-wrap justify-center px-4 max-w-2xl">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#ff8329] scale-125' 
                  : 'bg-[#ff8329]/30 hover:bg-[#ff8329]/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:text-[#ff8329] transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 text-white hover:text-[#ff8329] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div 
              className="w-full h-full flex items-center justify-center touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              {...dragProps}
            >
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 text-white hover:text-[#ff8329] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
