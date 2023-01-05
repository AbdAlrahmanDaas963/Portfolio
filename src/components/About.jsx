import React from "react";
import Badge from "./common/Badge";
import { skilles } from "./../data/index";
function About() {
  return (
    <div className="about center container max-h" id="About">
      <div className="career">
        <div className="career-title">My Career So Far</div>
        <div className="career-desc">
          Always up for a challenge, By using the latest technology, I am in my
          fifth year in college studying IT eng, I have 2 years of experince in
          React, handling responsive design, animation, state management, and
          converting designs into efficient readable code, And I like building
          uniquely websites
        </div>
      </div>
      <div className="badges">
        {skilles.map((item) => (
          <Badge key={item} name={item} />
        ))}
      </div>
    </div>
  );
}

export default About;
