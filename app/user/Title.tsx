import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="mb-5 mt-2">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
