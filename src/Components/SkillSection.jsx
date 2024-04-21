import SkillsCard from "./SkillsCard";

const SkillSection = () => {
  return (
    <div className="2x:px-[200px] relative xl:px-[100px]  lg:px-[60px] lg:py-[80px] lg:pb-[150px] pb-6  px-4 mx-auto bg-slate-800">
      <h1 className="text-6xl  lg:pb-[60px] pb-6  text-center uppercase bg-gradient-to-r from-red-800 to-textColor text-transparent font-bold tracking-widest bg-clip-text p-8 rub">
        Skills
      </h1>

      <div className="grid z-[1] lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-1">
        <SkillsCard
          img="https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png"
          description=" learn Html form Youtube chanel and w3school.started learning HTML from 2014.I love HTML sementic tag and also input type like data color password  I love html.         
          "
          name="HTML"
        />
        <SkillsCard
          img="https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png"
          description=" learn css form Youtube chanel and w3school.started learning css from 2016.I love cess Flex and Grid
           Trying to learn css3 deeply and stray update.         
          "
          name="CSS"
        />
        <SkillsCard
          img="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"
          description=" learn css form P-hero and w3school.started learning css from 2022.I love flex system, gutter and row ,col based desgin "
          name="Bootstrap"
        />
        <SkillsCard
          img="https://logospng.org/download/javascript/logo-javascript-icon-512.png"
          description=" learn javascript form P-hero solving more than 40+ problems trying learn
          deeply ES6,DOM etc."
          name="Javascript"
        />
        <SkillsCard
          img="https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png"
          description=" learn React form P-hero and create more than 50+ react project stated learning from 2022 I love react state and hooks its very usefull. And learn React Router Dom ,etc"
          name="ReactJS"
        />
        <SkillsCard
          img="https://th.bing.com/th/id/R.983066421ffe3cb16d451a2f71b0aa92?rik=8FCyd63gdSu47w&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fN%2f0%2f4%2fq%2f4%2fR%2freact-redux.svg.hi.png&ehk=m2WGOTaA0s8lecLBln2rlOmjd3f69MQHxTuTCfYAJfY%3d&risl=&pid=ImgRaw&r=0https://spng.pinpng.com/pngs/s/44-449531_redux-logo-hd-png-download.png"
          description=" learn Redux  form P-hero level-2 course and create redux pactice project stated learning from 2024 I love redux toolkit and RTK Query"
          name="Redux"
        />
        <SkillsCard
          img="https://lidiakovac.it/assets/typescript.png"
          description=" learn typescript form anisul haque and also form P-hero level-2 course and create typescript pactice project stated learning from 2024 I love Typescript for type scure and it's very usefull for backend code auto suggest and also forntend but i love to youse backend coading .learn Typescript enum ,truple,union, and more  "
          name="TypeScript"
        />
        <SkillsCard
          img="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
          description=" learn mongoose form P-hero level-2 course and create mongoose pactice project stated learning from 2024 I love mongoose schema and pre,post and also vitual and static or instence of method"
          name="Mongoose"
        />
        <SkillsCard
          img="https://th.bing.com/th/id/R.785df5444d71022977e06196da29aec0?rik=jKknldU%2fOo83DQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmongodb-png--770.png&ehk=1Ecjmlu5gnco8zY32mwOvjePZII%2buwaOdTJnSCGntZ4%3d&risl=&pid=ImgRaw&r=0"
          description=" learn Mongodb form P-hero level-1 course and create mongodb many pactice project stated learning from 2022 I love Mogodb collection system and mogodb compas and mongodb oparetor like $in, $lt, $gt, $all, $pull, $push and finaly agrigate"
          name="Mongodb"
        />
        <SkillsCard
          img="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png"
          description=" learn postgres form P-hero level-2 course and create prostges many pactice project stated learning from 2024 I love postges oparetor like where,like,alike,count,skip,take, and gorupBy,orderBy"
          name="Postgres"
        />
        <SkillsCard
          img="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png"
          description=" learn prisma form P-hero level-2 course and create prisma postgresSql many pactice project stated learning from 2024 I love Prisma cnetalise schema define systems"
          name="Prisma ORM"
        />
        <SkillsCard
          img="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png"
          description=" learn NestJS form P-hero level-2 course and create NestJS  many pactice project stated learning from 2024 I love Nestjs Auto routing system and"
          name="NestJs"
        />
      </div>
      <div className="w-[200px] z[-1] blur-[150px]  h-[100px] bg-white absolute top-0 left-0">

      </div>
    </div>
  );
};

export default SkillSection;
