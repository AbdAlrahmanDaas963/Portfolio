import React from "react";

import Badge from "./Badge";

function Card({ img, title, tool, href, under }) {
  const UnderDevelpment = (
    <div className="under-development">Under Develpment</div>
  );
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-tools">
          {tool.map((item) => (
            <Badge key={item} name={item} card={"card-badge"} />
          ))}
        </div>
        <a href={href} target={"_blank"}>
          Visit
        </a>
      </div>
      {under && UnderDevelpment}
    </div>
  );
}

export default Card;
