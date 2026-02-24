import svgPaths from "@/imports/svg-a68o6iwyh8";

interface CustomIconProps {
  className?: string;
}

export function CustomIcon({ className = "w-5 h-5" }: CustomIconProps) {
  return (
    <svg className={className} fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 7.46223 11.7287">
      <g>
        <path d={svgPaths.p28e2eb00} fill="currentColor" />
        <path d={svgPaths.p27e6f480} fill="currentColor" />
        <path d={svgPaths.p3726a040} fill="currentColor" />
      </g>
    </svg>
  );
}
