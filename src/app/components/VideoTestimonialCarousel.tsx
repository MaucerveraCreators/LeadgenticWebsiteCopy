import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface VideoTestimonial {
  videoUrl: string;
  thumbnail: string;
  name: string;
  role: string;
  company: string;
}

interface VideoTestimonialCarouselProps {
  testimonials: VideoTestimonial[];
  speed?: number;
}

// Helper function to detect and extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/, // Add support for YouTube Shorts
    /^([a-zA-Z0-9_-]{11})$/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

export function VideoTestimonialCarousel({ 
  testimonials, 
  speed = 1 
}: VideoTestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      if (!scrollContainer) return;

      position += speed;
      
      const cardWidth = 400; // Approximate card width + gap
      const totalWidth = cardWidth * testimonials.length;
      
      if (position >= totalWidth) {
        position = 0;
      }

      scrollContainer.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, isPaused, testimonials.length]);

  // Handle mouse enter (desktop only)
  const handleMouseEnter = (index: number) => {
    if (isMobile) return; // Mobile check
    
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      setPlayingVideos(prev => new Set(prev).add(index));
    }
  };

  // Handle mouse leave (desktop only)
  const handleMouseLeave = (index: number) => {
    if (isMobile) return; // Mobile check
    
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      setPlayingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }
  };

  // Handle click/tap (mobile)
  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingVideos.has(index)) {
      video.pause();
      setPlayingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    } else {
      video.play();
      setPlayingVideos(prev => new Set(prev).add(index));
    }
  };

  return (
    <div 
      className="relative -mx-6 md:mx-0"
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
    >
      {/* Gradient overlays for fade effect - Hidden on mobile */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8F8F8] to-transparent pointer-events-none z-10" />
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8F8F8] to-transparent pointer-events-none z-10" />

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x"
        style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex gap-4 md:gap-6 py-4 px-6 md:px-0">
          {duplicatedTestimonials.map((testimonial, index) => {
            const youtubeId = getYouTubeVideoId(testimonial.videoUrl);
            const isYouTube = youtubeId !== null;
            
            return (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video Container - 9:16 Vertical Format */}
              <div 
                className="relative bg-black cursor-pointer group overflow-hidden rounded-2xl"
                style={{ aspectRatio: '9/16' }}
                onClick={() => handleVideoClick(index)}
              >
                {isYouTube ? (
                  // YouTube Embed
                  <iframe
                    ref={el => iframeRefs.current[index] = el}
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1`}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                ) : (
                  // Regular Video
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={testimonial.videoUrl}
                    poster={testimonial.thumbnail}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                  />
                )}
                
                {/* Play/Pause Overlay - Center (only for non-YouTube videos) */}
                {!isYouTube && (
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    playingVideos.has(index) ? 'opacity-0 md:group-hover:opacity-100' : 'opacity-100'
                  }`}>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                      {playingVideos.has(index) ? (
                        <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" fill="white" />
                      ) : (
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5 md:ml-1" fill="white" />
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Glassmorphism Overlay with Client Info */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 md:px-5 md:py-4 bg-black/30 backdrop-blur-md border-t border-white/10 rounded-b-2xl pointer-events-none">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1 leading-tight">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm font-light leading-tight">
                    {testimonial.role}
                  </p>
                  <p className="text-white/60 text-xs font-light leading-tight mt-0.5 md:mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}