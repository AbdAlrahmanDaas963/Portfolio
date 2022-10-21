import React from "react";
import Badge from "./Badge";

function Card({ img, title, tool, href }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" width={"300px"} height={"300px"} />
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-tools">
          {tool.map((item) => (
            <Badge key={item} name={item} card={"card-badge"} />
          ))}
        </div>
        <a href={href}>Visit</a>
      </div>
    </div>
  );
}

export default Card;
