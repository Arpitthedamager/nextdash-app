import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Card = () => {
  const stats = [
    {
      title: "Total Users",
      value: "10,928",
      description: "12% more than previous week",
      icon: <AiOutlineUser className="text-2xl" />,
      growthClass: "text-green-500",
    },
    {
      title: "Total Users",
      value: "10,928",
      description: "12% more than previous week",
      icon: <AiOutlineUser className="text-2xl" />,
      growthClass: "text-green-500",
    },
    {
      title: "Total Users",
      value: "10,928",
      description: "12% more than previous week",
      icon: <AiOutlineUser className="text-2xl" />,
      growthClass: "text-green-500",
    },
  ];

  return (
    <div className="flex gap-4 p-4 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="card bg-base-200 w-96 shadow-md rounded-xl p-8 flex flex-col  gap-4"
        >
          <div className="icon bg-base-300 rounded-full w-6 h-6 ">{stat.icon}</div>
          <div className="flex flex-col text-left">
            <h3 className="text-sm font-semibold text-gray-500">
              {stat.title}
            </h3>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p className={`text-sm ${stat.growthClass}`}>{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
