import React from "react";

function Badge({ name, card }) {
  return <div className={`badge ${card}`}>{name}</div>;
}

export default Badge;
