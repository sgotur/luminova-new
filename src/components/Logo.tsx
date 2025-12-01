import { useState, useCallback, memo } from 'react';

export interface LogoProps {
  src: string;
  alt: string;
  businessName: string;
  className?: string;
}

/**
 * Logo component that displays a logo image with accessibility support
 * and fallback handling for missing images.
 * Optimized with React.memo to prevent unnecessary re-renders.
 * 
 * Requirements: 1.1, 5.5
 */
const LogoComponent: React.FC<LogoProps> = ({ src, alt, businessName, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // If image fails to load, show fallback with business name initial
  if (imageError) {
    return (
      <div 
        className={`
          d-flex align-items-center justify-content-center
          bg-accent-teal text-white font-bold rounded
          ${className}
        `}
        style={{ width: '48px', height: '48px' }}
        role="img"
        aria-label={alt || businessName}
      >
        {/* Tailwind typography - Requirement 7.3 */}
        <span className="text-xl font-bold">
          {businessName.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleImageError}
      className={`img-fluid object-contain ${className}`}
      style={{ maxHeight: '173px', maxWidth: '676px' }}
    />
  );
};

// Memoize the component to prevent unnecessary re-renders
export const Logo = memo(LogoComponent);

export default Logo;
