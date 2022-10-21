import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">Contact me</div>
      <div className="footer-links">
        <LinkedInIcon />
        <GitHubIcon />
        <TelegramIcon />
        <EmailIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Footer;
