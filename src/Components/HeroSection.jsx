import Morshed from "../assets/Morshed.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <div className="grid relative z-[1] w-full lg:h-screen h-full justify-center items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 text-center p-6 bg-primary text-white">
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
              <h4 className="mt-6 pop text-3xl lg:ml-3 tracking-widest"> STACK DEVELOPER</h4>
            </div> 
            <div>
              <p className=" tracking-wider mar text-2xl leading-6 mt-6  mb:mb-12 lg:mb-12 mb-4 ">
                As your PERN and MERN stack developer, I bring expertise honed
                through experience, ensuring robust solutions tailored to your
                needs. With a passion for innovation and a commitment to
                excellence, I am dedicated to crafting the perfect digital
                solution for you.
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
            <div className="md:flex mt-16 hidden justify-center gap-6">
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
        <div className="flex md:hidden mt-4 md-hidden justify-center gap-6">
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
    </div>
  );
};

export default HeroSection;
