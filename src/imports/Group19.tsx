import imgUserPhoto from "@/assets/3f997ac88310448974cf239a72bad8ef817f985f.png";
import imgUserPhoto1 from "@/assets/25d1a77020008b9e3f08babd1f67f01cdb8f89d6.png";
import imgUserPhoto2 from "@/assets/644f99339461ceed3bc6e6e860d04d71b422d3af.png";
import imgUserPhoto3 from "@/assets/2824bbfc3a0e4e7f8f0343924eeffeeace5d9c62.png";
import imgTrustpilotLogo20221 from "@/assets/40e423960d4ad51ec046cb5699d210ae85067a5c.png";

function UserPhoto5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="mr-[-5.843px] pointer-events-none relative rounded-[191.573px] shrink-0 size-[27.672px]">
      <div aria-hidden="true" className="absolute inset-0 rounded-[191.573px]">
        {children}
      </div>
      <div aria-hidden="true" className="absolute border-[2.129px] border-solid border-white inset-[-2.129px] rounded-[193.702px]" />
    </div>
  );
}

function UserPhoto() {
  return (
    <UserPhoto5>
      <div className="absolute bg-[#e2f0d7] inset-0 rounded-[191.573px]" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[191.573px] size-full" src={imgUserPhoto} />
    </UserPhoto5>
  );
}

function UserPhoto1() {
  return (
    <UserPhoto5>
      <div className="absolute bg-[#e2f0d7] inset-0 rounded-[191.573px]" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[191.573px] size-full" src={imgUserPhoto1} />
    </UserPhoto5>
  );
}

function UserPhoto2() {
  return (
    <UserPhoto5>
      <div className="absolute bg-[#e2f0d7] inset-0 rounded-[191.573px]" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[191.573px] size-full" src={imgUserPhoto2} />
    </UserPhoto5>
  );
}

function UserPhoto3() {
  return (
    <UserPhoto5>
      <div className="absolute bg-[#e2f0d7] inset-0 rounded-[191.573px]" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[191.573px] size-full" src={imgUserPhoto3} />
    </UserPhoto5>
  );
}

function UserPhoto4() {
  return (
    <div className="bg-[#332d27] mr-[-5.843px] relative rounded-[191.573px] shrink-0 size-[27.672px]" data-name="User Photo">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['CircularXXTrial:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.93px)] not-italic text-[8.514px] text-center text-nowrap text-white top-[calc(50%+0.12px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[12.772px]">4K</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[2.129px] border-solid border-white inset-[-2.129px] pointer-events-none rounded-[193.702px]" />
    </div>
  );
}

function UserGroup() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5.843px] py-0 top-0" data-name="User Group">
      <UserPhoto />
      <UserPhoto1 />
      <UserPhoto2 />
      <UserPhoto3 />
      <UserPhoto4 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <UserGroup />
      <div className="absolute h-[19.925px] left-[125.29px] top-[3.84px] w-[80.709px]" data-name="Trustpilot_Logo_(2022) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTrustpilotLogo20221} />
      </div>
    </div>
  );
}