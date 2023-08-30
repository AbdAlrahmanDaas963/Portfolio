import React from "react";
import Badge from "./common/Badge";
import { skilles } from "./../data/index";
function About() {
  const desc =
    "Greetings! I thrive on challenges and am fueled by a passion for technology. Currently in my fifth year of pursuing a degree in IT engineering, With an intensive focus spanning 2 dedicated years, I've immersed myself in the world of React and React Native. This period of devoted study has equipped me with an extensive toolkit of skills and insights that parallel conventional professional experience. ";
  return (
    <div className="about center container max-h" id="About">
      <div className="career">
        <div className="career-title">My Career So Far</div>
        <div className="career-desc">
          {/* Always up for a challenge, By using the latest technology, I am in my
          fifth year in college studying IT eng, I have 2 years of experince in
          React, handling responsive design, animation, state management, and
          converting designs into efficient readable code, And I like building
          uniquely websites */}
          {desc}
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
