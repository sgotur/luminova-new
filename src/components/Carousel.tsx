import { useState, useEffect, useCallback } from 'react';

export interface CarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

/**
 * Carousel component that displays images with automatic rotation
 * and manual navigation controls.
 */
export const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  interval = 5000,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval, isAutoPlaying]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  }, [images.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  }, [goToPrevious, goToNext]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div 
      className={`carousel-container position-relative ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
    >
      {/* Carousel Images */}
      <div className="carousel-images position-relative overflow-hidden rounded bg-light" style={{ height: '350px' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide position-absolute w-100 h-100 d-flex align-items-center justify-content-center transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transition: 'opacity 0.5s ease-in-out',
              pointerEvents: index === currentIndex ? 'auto' : 'none'
            }}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-100"
              style={{ objectFit: 'contain', width: '100%', maxHeight: '100%' }}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="carousel-control position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle ms-3"
        style={{ width: '48px', height: '48px', zIndex: 10 }}
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="carousel-control position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle me-3"
        style={{ width: '48px', height: '48px', zIndex: 10 }}
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div 
        className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator rounded-circle border-0 ${
              index === currentIndex ? 'bg-white' : 'bg-secondary'
            }`}
            style={{
              width: '12px',
              height: '12px',
              opacity: index === currentIndex ? 1 : 0.5,
              transition: 'opacity 0.3s ease'
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
            role="tab"
          />
        ))}
      </div>

      {/* Screen reader announcement for current slide */}
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
};

export default Carousel;
