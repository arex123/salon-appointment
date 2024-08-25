import React from "react";

const ServiceCardInfo = ({ prop }) => {
  return (
    <div
      key={prop.key}
      className="border my-5 flex items-center justify-between rounded-md border-gray-200 p-5 hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
    >
      <div>
        <h2 className="text-xl">{prop.title}</h2>
        <div className="flex space-x-3 font-light my-2">
          <span>{prop.time} </span>
          <li> {prop.benefits.length} services</li>
        </div>
        <div>
          {prop.benefits.map((item, idx) => (
            <span key={item}>
              {item} {idx < prop.benefits.length - 1 ? "+" : ""}{" "}
            </span>
          ))}
        </div>
      </div>
      <div><button  className="border border-gray-300 rounded-3xl py-1 px-3 text-sm hover:border-gray-400 hover:bg-gray-200">Book</button></div>
    </div>
  );
};

export default ServiceCardInfo;
