import { useEffect, useRef, useState } from "react";

interface InfiniteScrollProps {
  images: string[];
  speed?: number;
  offset?: number;
}

export function InfiniteScroll({ images, speed = 0.5, offset = 0 }: InfiniteScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer para solo animar cuando es visible
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(scrollContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // No animar en mobile para mejor performance
    if (isMobile) return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isVisible) return;

    let animationId: number;
    let position = offset;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!scrollContainer) return;

      // Throttle to 30fps for better mobile performance
      if (timestamp - lastTimestamp < 33) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastTimestamp = timestamp;
      position += speed;
      
      // Calcular la altura de una imagen completa (incluyendo el gap)
      const totalImagesHeight = scrollContainer.scrollHeight / 3; // Porque duplicamos 3 veces
      
      // Cuando llegue a la mitad, resetear a 0 para loop infinito
      if (position >= totalImagesHeight) {
        position = 0;
      }

      scrollContainer.scrollTop = position;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, offset, isVisible, isMobile]);

  // En mobile, solo mostrar las primeras 3 imágenes sin duplicar
  const displayImages = isMobile ? images.slice(0, 3) : [...images, ...images, ...images];

  return (
    <div className="relative h-full rounded-2xl">
      {/* Contenedor interno con overflow hidden */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div 
          ref={scrollRef}
          className="h-full overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex flex-col gap-6">
            {displayImages.map((src, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 w-full flex-shrink-0"
                style={{
                  aspectRatio: '3/4',
                  minHeight: '280px'
                }}
              >
                <img
                  src={src}
                  alt={`Business context ${index % images.length + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient overlay superior - ENCIMA del contenido */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none rounded-t-2xl hidden md:block"></div>
      
      {/* Gradient overlay inferior - ENCIMA del contenido */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none rounded-b-2xl hidden md:block"></div>
    </div>
  );
}