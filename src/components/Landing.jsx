import React from "react";

import me from "../img/me.jpg";

function Landing() {
  return (
    <div className="landing">
      <img src={me} alt="" className="me" width={"250px"} height={"250px"} />
      <div className="hi">
        <div className="hi-title">Hi there!</div>
        <div className="hi-desc">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </div>
      </div>
    </div>
  );
}

export default Landing;
