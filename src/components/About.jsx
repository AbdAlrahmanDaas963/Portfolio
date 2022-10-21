import React from "react";
import Badge from "./common/Badge";
function About() {
  const skilles = [
    "HTML/CSS",
    "JavaScript",
    "Responsive Design",
    "Animation",
    "React-js",
    "React native",
    "MUI",
    "Framermotion",
    "Redux Toolkit",
    "React-query",
    "RESTful APIs",
    "npm",
    "Git",
    "Github",
    "Vercel",
    "Netlify",
  ];
  return (
    <div className="about center h-100vh">
      <div className="career">
        <div className="career-title">My Career So Far</div>
        <div className="career-desc">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content.
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
