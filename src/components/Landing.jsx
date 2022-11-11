import React from "react";

import me from "../img/me.jpg";

function Landing() {
  return (
    <div className="landing ">
      <img src={me} alt="" className="me" width={"250px"} height={"250px"} />
      <div className="hi">
        <div className="hi-title gradiant-text">Hi there!</div>
        <div className="hi-desc">
          Fuelled by a passion for developing websites and creating mobile apps,
          Learn more about my journey below.
        </div>
      </div>
    </div>
  );
}

export default Landing;
