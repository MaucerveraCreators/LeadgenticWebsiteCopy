import svgPaths from "@/imports/svg-x3svce67oi";

interface ArrowRightIconProps {
  className?: string;
}

export default function ArrowRightIcon({ className = "" }: ArrowRightIconProps) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 6.21833 9.7748"
      style={{ display: "block" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <path d={svgPaths.p2e1ae880} fill="currentColor" />
        <path d={svgPaths.p2c649180} fill="currentColor" />
        <path d={svgPaths.p10673870} fill="currentColor" />
      </g>
    </svg>
  );
}