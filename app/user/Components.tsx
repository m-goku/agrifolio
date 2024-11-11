import React from "react";

const Components = ({ details, icon }: { details: string; icon?: string }) => {
  return (
    // <div
    //   className="bg-slate-50 rounded-md space-x-4"
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     marginBottom: 10,
    //     borderRadius: 10,
    //     padding: 10,
    //   }}
    // >
    //   <div
    //     className="w-5 rounded-md bg-red-500 flex-grow"
    //     // style={{ marginRight: 10, marginLeft: 10 }}
    //   >
    //     {icon && <img src={icon} className="rounded-md" />}
    //   </div>
    //   <div>
    //     <p
    //       style={{
    //         fontSize: 14,
    //         marginLeft: 20,
    //       }}
    //     >
    //       {details}
    //     </p>
    //   </div>
    // </div>

    <div className="bg-slate-50 rounded-md flex items-center p-2 mb-2">
      <div className="flex-shrink-0 pr-4">
        {icon && (
          <img
            src={icon}
            className="w-7 h-7 rounded-md object-cover"
            alt={details}
          />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};
//
export default Components;
