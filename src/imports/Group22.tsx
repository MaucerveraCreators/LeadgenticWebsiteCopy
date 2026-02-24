import imgAScdZgGnmrmGqW4T21Webp from "@/assets/bca110c689b62ce2450f0f266ab2936274b8df7e.png";
import imgOverlayShadow from "@/assets/e8e5e918f487199c628229f02d80fc1f6818adb3.png";
import imgOverlayShadow1 from "@/assets/6654679b68262cf888562b4a76ff492581e22516.png";

function AScdZgGnmrmGqW4T21Webp() {
  return (
    <div className="absolute inset-[0_0_0.01px_0]" data-name="aScdZGGnmrmGqW4t_21.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-[-13.24%] max-w-none top-0 w-[126.49%]" src={imgAScdZgGnmrmGqW4T21Webp} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shadow-[0px_1.777px_3.554px_0px_rgba(36,35,41,0.05)] size-full" data-name="Overlay+Shadow">
      <AScdZgGnmrmGqW4T21Webp />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shadow-[5.331px_3.554px_3.554px_3.554px_rgba(0,0,0,0.25)] size-full" data-name="Overlay+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.26%] max-w-none top-0 w-[100.53%]" src={imgOverlayShadow} />
      </div>
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shadow-[0px_0.889px_1.777px_0px_rgba(0,0,0,0.3),0px_1.777px_5.331px_1.777px_rgba(0,0,0,0.15)] size-full" data-name="Overlay+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.75%] max-w-none top-0 w-[115.49%]" src={imgOverlayShadow1} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex inset-[33.29%_0_0_52.87%] items-center justify-center">
        <div className="flex-none h-[122.216px] rotate-[4.65deg] w-[171.778px]">
          <OverlayShadow />
        </div>
      </div>
      <div className="absolute flex inset-[44.58%_55.01%_2.87%_0] items-center justify-center">
        <div className="flex-none h-[93.784px] rotate-[355.35deg] w-[165.852px]">
          <OverlayShadow1 />
        </div>
      </div>
      <div className="absolute flex inset-[0_25.69%_33.75%_23.08%] items-center justify-center">
        <div className="flex-none h-[123.14px] rotate-[3.6deg] w-[189.549px]">
          <OverlayShadow2 />
        </div>
      </div>
    </div>
  );
}