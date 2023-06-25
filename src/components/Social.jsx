import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";

const SocialMedia = () => {
  return (
    <ul className="list-unstyled d-flex pt-4">
      <li className="social-icon">
        <a
          href="https://www.linkedin.com/in/victorzuluaga/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin />
        </a>
      </li>
      <li className="mx-3 social-icon">
        <a
          href="https://twitter.com/VictorZulRam94"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
      </li>
      <li className="social-icon">
        <a
          href="https://github.com/VictorZ94"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
