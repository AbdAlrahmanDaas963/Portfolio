import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { hrefs } from "../data/index";

function Footer() {
  const links = [
    {
      href: hrefs.linkedin,
      content: <LinkedInIcon />,
    },
    {
      href: hrefs.github,
      content: <GitHubIcon />,
    },
    {
      href: hrefs.telegram,
      content: <TelegramIcon />,
    },
    {
      href: hrefs.email,
      content: <EmailIcon />,
    },
    {
      href: hrefs.facebook,
      content: <FacebookIcon />,
    },
    {
      href: hrefs.instagram,
      content: <InstagramIcon />,
    },
  ];
  return (
    <div className="footer" id="Contact">
      <div className="footer-title">Contact me</div>
      <div className="footer-links">
        {links.map((item) => (
          <a key={item.href} href={item.href} target={"_blank"}>
            {item.content}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
