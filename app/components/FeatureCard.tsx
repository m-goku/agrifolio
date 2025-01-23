import React from "react";

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title?: string;
  description?: string;
  icon?: string;
}) => {
  return (
    <div className="p-5 flex justify-center">
      <div className="card w-full max-w-xs shadow-md  bg-white">
        {/* <figure className="px-10 pt-10">
          <img src={icon} alt="icon" className="rounded-xl size-10 " />
        </figure> */}
        <div className="card-body items-center text-center">
          <h2 className="card-title text-green-800">{title}</h2>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
