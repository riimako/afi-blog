import React from "react";
import { Card, CustomFlowbiteTheme } from "flowbite-react";

type CardProps = {
  src: string;
  text: string;
  title?: string;
};

const customTheme: CustomFlowbiteTheme["card"] = {
  img: {
    base: "max-h-16 md:max-h-32 w-fit mt-2",
    horizontal: {
      off: "rounded-t-lg",
    },
  },
  root: {
    children: "flex h-full flex-col justify-center gap-2 md:px-6 px-1 py-1",
  },
};

const ReasonCard = ({ src, text, title }: CardProps) => {
  return (
    <Card
      className="hover:bg-white max-w-sm max-h-80 items-center my-2 md:m-0"
      imgSrc={src}
      theme={customTheme}
    >
      <div className="px-3">
        {title ? <div className="font-bold text-xl mb-2">{title}</div> : null}
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </Card>
    /* 
    
    <div className="max-w-sm max-h-80 rounded-lg overflow-hidden shadow-lg shadow-blue-500/50 flex flex-col items-center">
     
    </div> */
  );
};

export default ReasonCard;
