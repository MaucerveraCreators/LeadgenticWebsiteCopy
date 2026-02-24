import svgPaths from "@/imports/svg-96exd8z2sx";

interface ArrowLeftIconProps {
  className?: string;
}

export default function ArrowLeftIcon({ className = "" }: ArrowLeftIconProps) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 6.21917 9.7747"
      style={{ display: "block" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <path d={svgPaths.p183b080} fill="currentColor" />
        <path d={svgPaths.p1f0b8700} fill="currentColor" />
        <path d={svgPaths.p2fee6700} fill="currentColor" />
      </g>
    </svg>
  );
}