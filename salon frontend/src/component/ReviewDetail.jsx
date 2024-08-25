import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewDetail = ({ prop }) => {
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
    <div className="w-[40%] mt-20">
      <div className="flex items-center space-x-2">
        {/* <img src={prop.pic} className="h-[60px] w-[60px] rounded-full" alt="" /> */}
        {prop.pic == null ? (
            <div
              className={`h-[60px] w-[60px] rounded-full object-cover flex justify-center border border-gray-200 items-center bg-[${currColor}] font-bold text-inherit text-3xl capitalize`}
            >
              {prop.name[0]}
            </div>
          ) : (
            <img
              className="h-[60px] w-[60px] rounded-full"
              src={prop.pic}
            />
          )}
        <div className="flex flex-col">
          <span className="font-medium capitalize">{prop.name}</span>
          <span className="font-light text-sm">
            {prop.date} at {prop.time}
          </span>
        </div>
      </div>
      <div className="flex mt-4">
      {Array(prop.stars).fill(null).map((_, index) => (
        <FaStar key={index} />
      ))}
      </div>
      <p className="mt-3">{prop.message}</p>
    </div>
  );
};

export default ReviewDetail;
