import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc,
  loading = 'lazy',
  fetchPriority,
  style,
  onLoad,
  onError 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // For eager loading, show immediately without IntersectionObserver
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Convert WebP to fallback format if needed
  const getFallbackSrc = (webpSrc: string) => {
    if (fallbackSrc) return fallbackSrc;
    return webpSrc.replace('.webp', '.jpg').replace('.webp', '.png');
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <picture>
          {/* If src is WebP, offer it as source with fallback */}
          {src.endsWith('.webp') ? (
            <>
              <source srcSet={src} type="image/webp" />
              <img
                src={hasError ? (fallbackSrc || getFallbackSrc(src)) : (fallbackSrc || getFallbackSrc(src))}
                alt={alt}
                className={`transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                style={style}
                loading={loading}
                fetchPriority={fetchPriority}
                onLoad={handleLoad}
                onError={handleError}
              />
            </>
          ) : (
            <>
              {/* If src is not WebP, try WebP version first, fallback to original */}
              <source srcSet={src.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
              <img
                src={hasError ? (fallbackSrc || src) : src}
                alt={alt}
                className={`transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                style={style}
                loading={loading}
                fetchPriority={fetchPriority}
                onLoad={handleLoad}
                onError={handleError}
              />
            </>
          )}
        </picture>
      )}
    </div>
  );
};

export default LazyImage;


