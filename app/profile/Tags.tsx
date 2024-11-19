import React from "react";

const Tags = ({ details, icon }: { details: string; icon?: string }) => {


  return (
    <div className="bg-green-50 
    rounded-md  
    p-2 
    mb-1 
    mr-1 
    h-6  
    inline-flex 
    items-center
    border border-green-300
    ">
      <div className="">
        <p className="text-xs text-green-700">{details}</p>
      </div>
    </div>
  );
};


//
export default Tags;
