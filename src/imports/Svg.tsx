import svgPaths from "./svg-a68o6iwyh8";

function Group() {
  return (
    <div className="absolute inset-[22.5%_30%_22.5%_35%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.46223 11.7287">
        <g id="Group">
          <path d={svgPaths.p28e2eb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27e6f480} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3726a040} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

export default function Svg() {
  return (
    <div className="relative size-full" data-name="SVG">
      <Group />
    </div>
  );
}