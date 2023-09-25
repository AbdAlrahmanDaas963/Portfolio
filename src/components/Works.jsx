import React from "react";
import { Link } from "react-router-dom";

// import LaunchIcon from "@mui/icons-material/Launch";

import { data } from "../data/index";
import { apps } from "../data/index";

import Card from "./common/Card";
// import CardMob from "./common/CardMob";

function Works() {
  const displayedWebsites = data.slice(0, 5);
  const displayedApps = apps.slice(0, 3);
  return (
    <div className="works container" id="Works">
      <div className="works-title">Web Apps</div>
      <div className="cards">
        {displayedWebsites.map((item) => (
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
        <Link to={"/projects"} state={{ data, title: "Web Applications" }}>
          <div
            style={{
              width: "300px",
              height: "255px",
              borderRadius: "7px",
              backgroundColor: "gray",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#04bf9d",
            }}
          >
            <div
              style={{
                textTransform: "uppercase",
                color: "#101113",
                fontWeight: "lighter",
                fontSize: "25px",
              }}
            >
              See All
            </div>
          </div>
        </Link>
      </div>
      {/* --- */}
      {/* <div className="works-title">Mobile Apps</div>
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
      </div> */}
      <div className="works-title">Android & ios Apps</div>
      <div className="cards">
        {displayedApps.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            tool={item.tool}
            href={item.href}
            under={item.underDevelopment}
          />
        ))}
        <Link
          to={"/projects"}
          state={{ data: apps, title: "Android & ios Apps" }}
        >
          <div
            style={{
              width: "300px",
              height: "255px",
              borderRadius: "7px",
              backgroundColor: "gray",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#04bf9d",
            }}
          >
            <div
              style={{
                textTransform: "uppercase",
                color: "#101113",
                fontWeight: "lighter",
                fontSize: "25px",
              }}
            >
              See All
            </div>
          </div>
        </Link>
      </div>
      {/*  */}
      <div className="works-title">Backend Development</div>
      <div className="cards">
        <div
          style={{
            width: "300px",
            height: "255px",
            borderRadius: "7px",
            backgroundColor: "gray",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#04bf9d",
          }}
        >
          <div
            style={{
              textTransform: "uppercase",
              color: "#101113",
              fontWeight: "lighter",
              fontSize: "25px",
            }}
          >
            Soon...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
