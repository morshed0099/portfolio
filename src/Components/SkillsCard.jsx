

const SkillsCard = ({img,description,name}) => {
    return (
        <div className="bg-primary shadow-md  border-gray-900 border-2 relative card-skill  flex justify-between items-center rounded-lg px-4 py-1">
        <div>
          <h2 className="ruk text-2xl font-bold text-textColor">{name}</h2>
          <div className=" shadow-lg hidden border-stone-800 bg-secondary  p-4 rounded-xl border-2 absolute info-skill">
            <h1 className="text-textColor text-2xl font-semibold">
             {description}
            </h1>
          </div>
        </div>
        <div>
          <img
             className="w-[100px] h-[120px]" 
            src={img}
            alt=""          
          />
        </div>
      </div>
      
    );
};

export default SkillsCard;