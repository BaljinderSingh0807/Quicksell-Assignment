import React from "react";
import { BiSolidInfoSquare } from "react-icons/bi";
import { TbAntennaBars5 } from "react-icons/tb";
import { TbAntennaBars4 } from "react-icons/tb";
import { TbAntennaBars3 } from "react-icons/tb";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const PriorityDescriptions = () => {
  return {
    4: {
      text: "Urgent",
      icon: <BiSolidInfoSquare size={24} color="rgb(169, 34, 34)" />,
    },
    3: { text: "High", icon: <TbAntennaBars5 size={24} /> },
    2: { text: "Medium", icon: <TbAntennaBars4 size={24} /> },
    1: { text: "Low", icon: <TbAntennaBars3 size={24} /> },
    0: { text: "No Priority", icon: <BiDotsHorizontalRounded size={24} /> },
  };
};

export default PriorityDescriptions;
