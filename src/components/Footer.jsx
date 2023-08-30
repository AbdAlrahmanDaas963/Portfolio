import React from "react";

import { motion } from "framer-motion";

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
    <div className="footer container" id="Contact">
      <div className="footer-title">Get in Touch</div>

      <div className="footer-links">
        {links.map((item) => (
          <motion.a
            whileHover={{ scale: 1.2 }}
            key={item.href}
            href={item.href}
            target={"_blank"}
            rel="noreferrer"
          >
            {item.content}
          </motion.a>
        ))}
      </div>
      <div className="career-desc">
        While my journey might not be laden with traditional job titles, the
        skills I've acquired during these formative years of study stand as a
        testament to my dedication and expertise in React and React Native. I'm
        excited to bring this foundation to real-world projects, ready to tackle
        challenges with the enthusiasm of someone who's already deeply immersed
        in the field.
      </div>
    </div>
  );
}

export default Footer;
