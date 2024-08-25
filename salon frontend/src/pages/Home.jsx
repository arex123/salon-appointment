import React from "react";
import { FaStar } from "react-icons/fa";
import { Tabs } from "antd";

import Services from "../component/Services";
import Team from "../component/Team";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Tab 1",
    children: <Services />,
  },
  {
    key: "2",
    label: "Tab 2",
    children: <Services />,
  },
  {
    key: "3",
    label: "Tab 3",
    children: <Services />,
  },
];

const Home = () => {
  const images = [
    "https://images.fresha.com/locations/location-profile-images/445734/464018/5911eb39-de4c-44b5-b506-eeab6d9147e4.jpg?class=gallery-modal-large&dpr=2&watermark=true",
    "https://images.fresha.com/locations/location-profile-images/445734/464019/da145117-1f8d-4f0f-aa34-c6b9035bab89.jpg?class=gallery-modal-large&dpr=2&watermark=true",
    "https://images.fresha.com/locations/location-profile-images/445734/464020/50e727ef-8096-4ce2-85c5-d69906af433e.jpg?class=gallery-modal-large&dpr=2&watermark=true",
    "https://www.fresha.com/a/the-stars-barber-dubai-540-jumeirah-street-iebwlr0v#modal-gallery",
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <h2 className="text-5xl font-semibold mt-10 mb-2">The Stars Barber</h2>
        <div>
          <div className="flex space-x-3 items-center">
            <span className="font-semibold">5.0</span>
            <span className="flex items-center space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> <span>(849)</span>
            </span>
            <li className="font-light">Open until 23:55</li>
            <li className="font-light">new delhi, india</li>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <img
            className="col-span-2 row-span-2 object-cover h-full w-full rounded-md cursor-pointer"
            src={images[0]}
          />
          <img className="cursor-pointer rounded-md" src={images[1]} />
          <img className="cursor-pointer rounded-md" src={images[2]} />
        </div>

        <div className="w-[65%]">
          <div>
            <h2 className="text-4xl font-semibold mt-14 mb-2">Services</h2>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

            <div className="my-6">
              {" "}
              <span className="border font-semibold cursor-pointer border-gray-200 p-3 text-sm rounded-md hover:border-gray-300 hover:bg-gray-300">
                See All
              </span>
            </div>
          </div>

          <div>
          <h2 className="text-4xl font-semibold mt-16 mb-7">Team</h2>

          <Team/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
