import React from "react";

export const TeamName = ({ name, abbr, side }) => {
  return (
    <div
      className="xs:text-center flex-col mr-2 pt-4 grid"
      style={{
        marginLeft: side === "AWAY" ? "0px" : "10px",
        marginRight: side === "HOME" ? "0px" : "10px",
      }}
    >
      <div className="order-0 text-xs font-semibold sm:invisible sm:order-2 sm:w-0 sm:h-0">
        {abbr}
      </div>
      <div className="invisible w-0 h-0 order-2 text-xs font-semibold flex-wrap sm:order-first sm:text-sm sm:visible sm:w-auto sm:h-auto">
        {name}
      </div>
      <div
        className="text-center text-gray-400 order-1"
        style={{ fontSize: "10px" }}
      >
        {side}
      </div>
    </div>
  );
};
