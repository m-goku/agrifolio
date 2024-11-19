import React from "react";

const Details = ({ details }: { details?: string; }) => {


  return (
    <div className="bg-slate-50 p-1 rounded-s mt-2">
      <div className="">
        <p className=" text-sm">{details}</p>
      </div>
    </div>
  );
};


//
export default Details;
