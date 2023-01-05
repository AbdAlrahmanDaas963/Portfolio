import React from "react";

import { data } from "../data/index";
import { apps } from "../data/index";

import Card from "./common/Card";
import CardMob from "./common/CardMob";

function Works() {
  return (
    <div className="works container" id="Works">
      <div className="works-title">Web Apps</div>
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
      <div className="works-title">Mobile Apps</div>
      <div className="cards">
        {apps.map((item) => (
          <CardMob
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
