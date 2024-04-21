import { MdOutlineContactPage } from "react-icons/md";
import { BiLayout, BiSupport } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { MdAnimation } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BsArrowsExpandVertical } from "react-icons/bs";
import { MdDriveFolderUpload } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { MdArchitecture } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { AiFillLayout } from "react-icons/ai";

const ServiceCard = () => {
  return (
    <>
      <div className="p-4 relative card overflow-hidden mb-4  shadow-md  border-[#1e293b] border rounded-md">
        <div className=" ">
          <div className="">
            <div className="flex justify-center mb-2">
              <CgWebsite className="text-white" size={40} />
            </div>
            <h2 className="mar mb-2 text-3xl text-center  text-white font-semibold">
              PERN Stack Web App
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
              <BsArrowsExpandVertical size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Frontend & backend</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <TfiWrite size={20} className="text-[#9ec89b]" />
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
              <BsCartDash size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Ecomers,Dashboard, etc</p>
          </div>
        </div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
      </div>
      <div className="p-4 relative card overflow-hidden mb-4 text-justify gap-2 shadow-md  border-[#1e293b] border rounded-md">
        <div className="">
          <div className="flex-col mb-2">
            <div className="flex justify-center mb-4">
              <CgWebsite className="text-white" size={40} />
            </div>
            <h2 className="mar text-3xl text-center text-white font-semibold">
              MERN Stack Web App
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
              <BsArrowsExpandVertical size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Frontend & backend</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <TfiWrite size={20} className="text-[#9ec89b]" />
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
              <BsCartDash size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Ecomers,Dashboard etc</p>
          </div>
        </div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
      </div>
      <div className="p-4 relative card overflow-hidden mb-4  shadow-md  border-[#1e293b] border rounded-md">
        <div className="">
          <div className="flex-col mb-2">
            <div className="flex justify-center mb-4">
              <MdOutlineContactPage className="text-white" size={40} />
            </div>
            <h2 className="mar text-center mb-2 text-3xl text-white font-semibold">
              Front-End Degsin
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
              <DiResponsive size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Fully Resposive</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <MdDriveFolderUpload size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]"> Image And content upload</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <MdAnimation size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Smooth Animated Interactive</p>
          </div>
        </div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
      </div>
      <div className="p-4 relative card overflow-hidden mb-4 shadow-md  border-[#1e293b] border rounded-md">
        <div className="">
          <div className="flex-col mb-2">
            <div className="flex justify-center mb-4">
              <MdOutlineContactPage className="text-white" size={40} />
            </div>
            <h2 className="mar text-center mb-2 text-3xl text-white font-semibold">
              Back-End Development
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
              <TfiWrite size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Token Based Login system</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <GrSecure size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Secure API </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <MdArchitecture size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">MVC Architectures</p>
          </div>
        </div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
      </div>
      <div className="p-4 relative card overflow-hidden mb-4 shadow-md  border-[#1e293b] border rounded-md">
        <div className="">
          <div className="flex-col mb-2">
            <div className="flex justify-center mb-4">
              <MdOutlineContactPage className="text-white" size={40} />
            </div>
            <h2 className="mar text-center mb-2 text-3xl text-white font-semibold">
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
              <TfiWrite size={20} className="text-[#9ec89b]" />
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
              <MdAnimation size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Smooth Animated Interactive</p>
          </div>
        </div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
      </div>
      <div className="p-4 relative card overflow-hidden mb-4  shadow-md  border-[#1e293b] border rounded-md">
        <div className="">
          <div className="flex-col mb-2">
            <div className="flex justify-center mb-4">
              <MdOutlineContactPage className="text-white" size={40} />
            </div>
            <h2 className="mar text-center mb-2 text-3xl text-white font-semibold">
              Re-Degsin & Layout & Burg Fix
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
              <AiFillLayout size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Changinge Old Layout</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <BiLayout size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Re-Degsin Web Page</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <BiSupport size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Lifetime Support</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <MdAnimation size={20} className="text-[#9ec89b]" />
            </span>
            <p className="text-[#9ec89b]">Smooth Animated </p>
          </div>
        </div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] right-[-50px] rotate-45 top-[-50px] h-[100px] bg-[#1e293b]"></div>
        <div className="absolute transition duration-500 ease-linear angel w-[100px] left-[-50px] rotate-45 bottom-[-50px] h-[100px] bg-[#1e293b]"></div>
      </div>
    </>
  );
};

export default ServiceCard;
