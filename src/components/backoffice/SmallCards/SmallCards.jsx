import React from "react";

const SmallCards = ({ data }) => {
  const { title, sales, iconBg, icon: Icon, llb } = data;
  return (
    <div className={`rounded-lg shadow-lg bg-slate-700 flex p-4`}>
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBg}`}
        >
          <Icon />
        </div>
        <div className="">
          <p>{title}</p>
          {llb ? <p className="text-red-600">({llb})</p> : null}
          <h3 className="text-2xl font-bold">{sales}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
