import React from "react";
import { WorkCardProps } from "../../types/Types";

const WorkCard: React.FC<WorkCardProps> = ({ image, name, description }) => {
  return (
    // <div className="w-[315px] md:w-[220px] msc:w-[243px] lg:w-[235px] xl:w-[330px] h-[157px] md:h-[337px] lg:h-[439px] fs:w-[400px] flex-row md:flex-col justify-between md:justify-center items-center inline-flex rounded-[20px] p-[20px] md:px-[20px] md:pt-[10px] lg:p-[10px] xl:px-[10px] md:pb-[30px] bg-[#3B3B3B]">
    <div className="w-[325px] md:w-[230px] msc:w-[253px] lg:w-[245px] xl:w-[340px] h-[167px] md:h-[347px] lg:h-[449px] fs:w-[410px] flex-row md:flex-col justify-between md:justify-center items-center inline-flex rounded-[20px] p-[20px] md:px-[20px] md:pt-[15px] lg:p-[15px] xl:px-[15px] md:pb-[35px] bg-[#3B3B3B]">
      {/* <div className="w-[130px] md:w-[160px] lg:w-[235px] h-[120px] xl:w-[330px] md:h-[160px] lg:h-[250px] fs:h-[260px] xl:h-[280px]"> */}
      <div className="w-[140px] md:w-[170px] lg:w-[245px] h-[130px] xl:w-[340px] md:h-[170px] lg:h-[260px] fs:h-[270px] xl:h-[290px]">
        <img
          // className="w-[130px] md:w-[160px] lg:w-[250px] h-[120px] xl:w-[330px] md:h-[160px] fs:h-[260px] lg:h-[250px]"
          className="w-[140px] md:w-[170px] lg:w-[260px] h-[130px] xl:w-[340px] md:h-[170px] fs:h-[270px] lg:h-[260px]"
          src={image}
          alt="Setup Your wallet"
        />
      </div>
      {/* <div className="w-[155px] md:w-full h-[117px] md:h-[100px] lg:h-[129px] flex-col items-center gap-[10px] flex"> */}
      <div className="w-[165px] md:w-full h-[127px] md:h-[110px] lg:h-[139px] flex-col items-center gap-[20px] flex">
        {/* <div className="text-center text-white text-[16px] lg:text-[22px] font-semibold font-work-sans capitalize leading-[30.80px]"> */}
        <div className="text-center text-white text-[26px] lg:text-[28px] font-semibold font-work-sans capitalize leading-[30.80px]">
          {name}
        </div>
        {/* <div className="text-center text-[12px] md:text-[12px] lg:text-[16px] text-white font-normal font-work-sans leading-[16.8px] lg:leading-[22.4px]"> */}
        <div className="text-center text-[22px] md:text-[22px] lg:text-[20px] text-white font-normal font-work-sans leading-[16.8px] lg:leading-[22.4px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
