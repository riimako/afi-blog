import React from "react";

type CardProps = {
  src: string;
  text: string;
  title?: string;
};

const Card = ({ src, text, title }: CardProps) => {
  return (
    <div className="max-w-sm max-h-80 rounded-lg overflow-hidden shadow-lg shadow-indigo-500/50 flex flex-col items-center">
      <img className="max-h-32 w-fit" src={src} />
      <div className="px-6 py-4">
        {title ? <div className="font-bold text-xl mb-2">{title}</div> : null}
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
