import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="bg-primary">
      <h1 className="text-6xl  text-center uppercase bg-gradient-to-r from-red-800 to-textColor text-transparent font-bold tracking-widest bg-clip-text p-8 rub">
        Service
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
