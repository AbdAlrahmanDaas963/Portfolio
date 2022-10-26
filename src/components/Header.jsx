import React from "react";
import { hrefs } from "../data/index";

function Header() {
  const links = [
    { href: hrefs.github, title: "Github" },
    { href: hrefs.linkedin, title: "Linkedin" },
    { href: "#About", title: "About" },
    { href: "#Contact", title: "Contact" },
  ];
  return (
    <div className="header">
      <div className="logo">
        <div></div>
        <div>Abdalrahman Daas</div>
      </div>
      <div className="ul">
        {links.map((item) => (
          <div key={item.title} className="li">
            <a href={item.href}>{item.title}</a>
          </div>
        ))}
        <div className="li li-dark">
          <a href="#Works">view work</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
