import React from "react";
import { data } from "../data/index";
import Card from "./common/Card";

function Works() {
  return (
    <div className="works container" id="Works">
      <div className="works-title">My Works</div>
      <div className="cards">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            tool={item.tool}
            href={item.href}
            under={item.underDevelopment}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
