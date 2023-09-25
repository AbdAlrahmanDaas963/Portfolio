import React from "react";
import { useLocation } from "react-router";
import Card from "../components/common/Card";
import "./showWorks.css";

function ShowWorks() {
  const location = useLocation();
  const { data, title } = location.state || {};
  console.log("data from Link :>> ", data);

  return (
    <div className="w-container">
      <div className="w-head">{title}</div>
      <div className="cards">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            tool={item.tool}
            href={item.href}
            under={item.underDevelopment}
            showLink={item.showLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowWorks;
