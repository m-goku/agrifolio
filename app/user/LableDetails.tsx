import React from "react";

const LabelDetails = ({
  label,
  details,
}: {
  label?: string;
  details: string;
}) => {
  return (
    <div
      className="bg-slate-50  space-x-6"
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        paddingBottom: 3,
        paddingTop: 3,
      }}
    >
      <p>{details}</p>
    </div>
  );
};

export default LabelDetails;
