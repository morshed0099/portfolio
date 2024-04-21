import { MdOutlineContactPage } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
const ServiceCard = () => {
  return (
    <div className="p-4 relative card overflow-hidden mb-24 flex justify-evenly gap-2 shadow-md  border-[#1e293b] border rounded-md">
      <div className=" flex justify-center items-center  h-full">
        <div className="flex-col mb-2">
          <div className="flex justify-center mb-4">
            <MdOutlineContactPage className="text-white" size={40} />
          </div>
          <h2 className="pop text-3xl text-white font-semibold">
            Landing Page
          </h2>
        </div>
      </div>
      <div>
        <div className="">
          <h4 className=" text-2xl font-semibold text-[#9ec89b]">
            Why choose me{" "}
          </h4>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span>
            <BiSupport size={20} className="text-[#9ec89b]" />
          </span>
          <p className="text-[#9ec89b]">Unlimited Support</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span>
            <BiSupport size={20} className="text-[#9ec89b]" />
          </span>
          <p className="text-[#9ec89b]">Custome Content Writting</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span>
            <BiSupport size={20} className="text-[#9ec89b]" />
          </span>
          <p className="text-[#9ec89b]">Lifetime Support</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span>
            <BiSupport size={20} className="text-[#9ec89b]" />
          </span>
          <p className="text-[#9ec89b]">Smooth Animated Interactive</p>
        </div>
      </div>
      <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
      <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
    </div>
  );
};

export default ServiceCard;
