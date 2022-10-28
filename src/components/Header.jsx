import React from "react";
import { hrefs } from "../data/index";
import { motion, useScroll, useSpring } from "framer-motion";

function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const links = [
    { href: hrefs.github, title: "Github" },
    { href: hrefs.linkedin, title: "Linkedin" },
    { href: "#About", title: "About" },
    { href: "#Contact", title: "Contact" },
  ];
  return (
    <div className="header">
      <motion.div className="progress" style={{ scaleX }} />
      <div className="logo">
        <div></div>
        <div>Abdalrahman Daas</div>
      </div>
      <div className="ul">
        {links.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            key={item.title}
            className="li"
          >
            <a href={item.href}>{item.title}</a>
          </motion.div>
        ))}
        <div className="li li-dark">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            href="#Works"
          >
            view work
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Header;
