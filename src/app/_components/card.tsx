import React from "react";

type CardProps = {
  src: string;
  text: string;
  title?: string;
};

const Card = ({ src, text, title }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={src} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        {title ? <div className="font-bold text-xl mb-2">{title}</div> : null}
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
