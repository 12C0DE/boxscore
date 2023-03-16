import React from "react";

export const TeamName = ({ name, side }) => {
  return (
    <div
      className="xs:text-center flex-col mr-2 pt-4"
      style={{
        marginLeft: side === "AWAY" ? "0px" : "10px",
        marginRight: side === "HOME" ? "0px" : "10px",
      }}
    >
      <div className="text-xs font-semibold sm:text-sm">{name}</div>
      <div className="text-center text-gray-400" style={{ fontSize: "10px" }}>
        {side}
      </div>
    </div>
  );
};
