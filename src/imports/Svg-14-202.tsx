import svgPaths from "./svg-x3svce67oi";

function Group() {
  return (
    <div className="absolute inset-[22.5%_30%_22.49%_35.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.21833 9.7748">
        <g id="Group">
          <path d={svgPaths.p2e1ae880} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2c649180} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p10673870} fill="var(--fill-0, black)" id="Vector_3" />
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