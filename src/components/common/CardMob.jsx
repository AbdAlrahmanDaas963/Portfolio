import React from "react";
import { motion } from "framer-motion";

import Badge from "./Badge";

function Card({ img, title, tool, href, under, showLink }) {
  // const UnderDevelpment = (
  //   <div className="under-development">Under Develpment</div>
  // );
  // const Link = (
  //   <a
  //     className="visit gradiant-text"
  //     href={href}
  //     target={"_blank"}
  //     rel="noreferrer"
  //   >
  //     Source
  //   </a>
  // );
  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "linear" }}
        className="card card-mob"
      >
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-body card-body-m">
          <div className="card-title">{title}</div>
          <div className="card-tools">
            {tool.map((item) => (
              <Badge key={item} name={item} card={"card-badge"} />
            ))}
          </div>
          {/* {Link} */}
        </div>
        {/* {under && UnderDevelpment} */}
      </motion.div>
    </a>
  );
}

export default Card;
