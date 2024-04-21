import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="bg-primary relative z-[1]">
      <h1 className="text-6xl  text-center uppercase bg-gradient-to-r  from-red-800 to-textColor text-transparent font-bold tracking-widest bg-clip-text p-2 lg:pb-[60px] rub">
        Service
      </h1>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <ServiceCard />
      </div>
      <div className="absolute z-[-1] w-[200px] h-[200px] bg-white right-0 top-0 blur-[180px]"></div>
    </div>
  );
};

export default Service;
