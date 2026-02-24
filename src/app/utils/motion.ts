import { useState, useEffect } from 'react';

// Utilities para optimizar animaciones en mobile

/**
 * Detecta si el dispositivo es móvil basado en el ancho de pantalla
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Devuelve props de animación optimizadas para mobile
 * En mobile, desactiva o simplifica las animaciones
 */
export const getOptimizedMotionProps = (
  desktopProps: any,
  mobileProps?: any
) => {
  const mobile = isMobile();
  
  if (mobile) {
    // Si se especificaron props móviles custom, úsalas
    if (mobileProps) return mobileProps;
    
    // De lo contrario, simplifica las animaciones
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    };
  }
  
  return desktopProps;
};

/**
 * Hook para detectar si estamos en mobile (reactivo)
 */
export const useIsMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const [mobile, setMobile] = useState(isMobile());
  
  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return mobile;
};