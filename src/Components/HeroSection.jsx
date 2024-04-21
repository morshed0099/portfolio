import { useState } from "react";
import Morshed from "../assets/Morshed.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import SkillSection from "./SkillSection";
import Service from "./Service";
const HeroSection = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="">
      <div className="z-[50] sticky top-0">
        <div className="absolute top-10 right-12 z-[50]">
          <div
            className="hover:opacity-75 duration-300  space-y-2"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`px-6 py-[2px] duration-500 ease-linear  bg-white ${
                open ? "rotate-45 absolute" : ""
              }`}
            ></div>
            <div
              className={`px-6 z-30 py-[2px] duration700  ease-linear  bg-white ${
                open ? "moveDiv absolute"  : ""
              }`}
            ></div>
            <div
              className={`px-6 py-[2px] duration-500 ease-linear  bg-white ${
                open ? "-rotate-45 mt-[-8px]" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`z-[40] fixed top-0 right-0 rounded-bl-[200%] bg-black duration-300 ease-linear  ${
          open
            ? " opacity-1  top-0  h-screen  w-full  rounded-bl-none"
            : "w-0 h-0"
        } `}
      >
        <div
          className={`${
            open
              ? "flex justify-center absolute items-center w-full h-full"
              : "hidden"
          }`}
        >
          <a
            className="text-center w-[200] h-[200] bg-white  text-textColor font-semibold pop text-2xl"
            href="#"
          >
            Name
          </a>
        </div>
      </div>
      <div className="bg-primary overflow-hidden ">
        <div className="grid relative 2x:px-[200px] xl:px-[100px] lg:px-[60px] px-[4px] mx-auto  overflow-hidden z-[1] w-full lg:h-screen h-full justify-center items-center lg:grid-cols-2 md:grid-cols-1 grid-cols-1 text-center p-6  text-white">
          <div className="z-[1]">
            <div className="flex flex-col gap-6">
              <h1 className="rub text-6xl  bg-gradient-to-r from-red-800 to-textColor bg-clip-text text-transparent font-bold tracking-widest">
                Golam Morshed
              </h1>
              <div className="justify-center items-center  font-semibold text-2xl leading-10 text-textColor">
                <div className="flex w-[100%] justify-center gap-6">
                  <div>
                    <span className="rotet">M</span>
                  </div>
                  <div className="ml-2">
                    <span className="rotet2">E</span>
                  </div>
                  <div>
                    <span className="rotet3">R</span>
                  </div>
                  <div>
                    <span className="rotet4">N</span>
                  </div>
                  <div>
                    <span className="text-4xl font-bold pop text-red-800 ml-2">
                      &
                    </span>
                  </div>
                  <div>
                    <span className="rotet">P</span>
                  </div>
                  <div>
                    <span className="rotet2">E</span>
                  </div>
                  <div>
                    <span className="rotet3">R</span>
                  </div>
                  <div>
                    <span className="rotet4">N</span>
                  </div>
                </div>
                <div>
                  <h4 className="mt-6 pop text-3xl lg:ml-3 tracking-widest">
                    {" "}
                    STACK DEVELOPER
                  </h4>
                </div>
                <div>
                  <p className=" tracking-wider mar text-2xl leading-6 mt-6  mb:mb-12 lg:mb-12 mb-4 ">
                    As your PERN and MERN stack developer, I bring expertise
                    honed through experience, ensuring robust solutions tailored
                    to your needs. With a passion for innovation and a
                    commitment to excellence, I am dedicated to crafting the
                    perfect digital solution for you.
                  </p>
                </div>
                <div>
                  <div className="flex gap-4 mt-6 items-center justify-center">
                    <div className="relative inline-flex  group">
                      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        title="Get quote now"
                        className="relative pop inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-textColor transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none   "
                      >
                        Resume Download
                      </button>
                    </div>
                    <div>
                      <div className="relative inline-flex  group">
                        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <button
                          title="Get quote now"
                          className="relative pop inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-textColor transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none   "
                        >
                          Resume Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex mt-16 hidden justify-center gap-6">
                  <FaFacebook
                    size={40}
                    className="text-textColor p-1 border rounded-full"
                  />
                  <FaTwitter
                    size={40}
                    className="text-textColor p-1 border rounded-full"
                  />
                  <FaGithub
                    size={40}
                    className="text-textColor p-1 border rounded-full"
                  />
                  <FaLinkedin
                    size={40}
                    className="text-textColor p-1 border rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="z-[1] p-4 mb-4 ">
            <div className="flex justify-center">
              <div className="p-4 border border-white rounded-full">
                <img className="rounded-full" src={Morshed} alt="" />
              </div>
            </div>
            <div className="flex lg:hidden mt-4  justify-center gap-6">
              <FaFacebook
                size={40}
                className="text-textColor p-1 border rounded-full"
              />
              <FaTwitter
                size={40}
                className="text-textColor p-1 border rounded-full"
              />
              <FaGithub
                size={40}
                className="text-textColor p-1 border rounded-full"
              />
              <FaLinkedin
                size={40}
                className="text-textColor p-1 border rounded-full"
              />
            </div>
          </div>
          <div className="absolute opacity-0 animation bottom-0 bg-slate-400 left-[0px] w-[20px] h-[20px] rounded-full shadow-slate-400 shadow-xl"></div>
          <div className="absolute opacity-0 animation2 bottom-0 bg-slate-400 left-[0px] w-[20px] h-[20px] rounded-full shadow-slate-400 shadow-xl"></div>
          <div className="absolute htmlAnimation w-[100px] bottom-0 opacity-0">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png"
              alt=""
            />
          </div>
          <div className="absolute cssAnimation w-[100px] top-0 opacity-0">
            <img
              src="https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png"
              alt=""
            />
          </div>
          <div className="absolute jsAnimation w-[100px] opacity-30 right-[50%] top-[30%] ">
            <img
              src="https://logospng.org/download/javascript/logo-javascript-icon-512.png"
              alt=""
            />
          </div>
          <div className="absolute top-0 right-0 blur-[150px] bg-white w-[200px] h-[200px]"></div>
        </div>
      </div>
      <SkillSection />
      <Service />
    </div>
  );
};

export default HeroSection;
