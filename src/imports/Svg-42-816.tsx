import svgPaths from "./svg-86nenurwc7";

function Group() {
  return (
    <div className="absolute inset-[22.5%_30%_22.49%_35%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.46223 11.7296">
        <g id="Group">
          <path d={svgPaths.p28e2eb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p35a81a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p31e55780} fill="var(--fill-0, white)" id="Vector_3" />
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