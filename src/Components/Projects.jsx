const Projects = () => {
  return (
    <div className="relative 2x:px-[200px] z-[1] xl:px-[100px]  lg:px-[60px] lg:py-[80px] lg:pb-[100px] pb-6  px-4 mx-auto">
      <h1 className="text-6xl pt-[80px]  text-center uppercase bg-gradient-to-r  from-red-800 to-textColor text-transparent font-bold tracking-widest bg-clip-text p-2 lg:pb-[60px] rub">
        Project
      </h1>
      <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="p-2 card-project relative  overflow-hidden  max-h-[400px] rounded-md border border-[#1e293b]">
          <div className="z-[-1]">
            <img
              className="w-full  rounded-md"
              src="https://th.bing.com/th/id/OIP.oCn9jAXD6FObA4U-AYXIkwHaKy?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="duration-500 over-lay ease-linear absolute z-[1] bg-primary bg-opacity-0 top-[-200]">
            <p className="flex justify-center items-center h-full">dfjlslfsf</p>
          </div>
        </div>
        <div className="p-2 card-project relative  overflow-hidden  max-h-[400px] rounded-md border border-[#1e293b]">
          <div className="z-[-1]">
            <img
              className="w-full  rounded-md"
              src="https://th.bing.com/th/id/OIP.oCn9jAXD6FObA4U-AYXIkwHaKy?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="duration-500 over-lay ease-linear absolute z-[1] bg-primary bg-opacity-0 top-[-200]">
            <p className="flex justify-center items-center h-full">dfjlslfsf</p>
          </div>
        </div>
        <div className="p-2 card-project relative  overflow-hidden  max-h-[400px] rounded-md border border-[#1e293b]">
          <div className="z-[-1]">
            <img
              className="w-full  rounded-md"
              src="https://th.bing.com/th/id/OIP.oCn9jAXD6FObA4U-AYXIkwHaKy?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div className="duration-500 over-lay ease-linear absolute z-[1] bg-primary bg-opacity-0 top-[-200]">
            <p className="flex justify-center items-center h-full">dfjlslfsf</p>
          </div>
        </div>  
      </div>
      <div className="w-[200px] h-[200px] bg-white blur-[180px] z-[-1] absolute top-0 left-0"></div>
    </div>
  );
};

export default Projects;
