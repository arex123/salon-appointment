import React from "react";
import { FaStar } from "react-icons/fa";

const TeamInfo = ({ prop }) => {
  const bgColor = [
    "#fefbd8",
    "#f7cac9",
    "#d5f4e6",
    "#618685",
    "#b5e7a0",
    "#d5e1df",
  ];
  let currColor = bgColor[Math.floor(Math.random() * bgColor.length)];

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="h-28 w-28 flex bg-red-300 rounded-full flex-col justify-center items-center overflow-hidden">
          {prop.pic == null ? (
            <div
              className={`rounded-full object-cover h-full w-full flex justify-center items-center bg-[${currColor}] font-bold text-inherit text-3xl capitalize transition-all  hover:scale-110 cursor-pointer`}
            >
              {prop.name[0]}
            </div>
          ) : (
            <img
              className="rounded-[50%] cursor-pointer object-cover h-[100%] w-[100%] transition-all hover:scale-110"
              src={prop.pic}
            />
          )}
        </div>
        <div className="w-14 flex justify-evenly items-center relative top-[-18px] text- rounded-lg border border-gray-300  bg-white">
          <span> {prop.rating}</span> <FaStar />
        </div>
        <p className="mt-[-10px]">{prop.name}</p>
        <p className="text-gray-500 font-light">{prop.skill}</p>
      </div>
    </div>
  );
};

export default TeamInfo;
