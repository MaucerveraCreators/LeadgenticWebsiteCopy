import svgPaths from "./svg-96exd8z2sx";

function Group() {
  return (
    <div className="absolute inset-[22.5%_35%_22.49%_30%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.21917 9.7747">
        <g id="Group">
          <path d={svgPaths.p183b080} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1f0b8700} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2fee6700} fill="var(--fill-0, black)" id="Vector_3" />
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