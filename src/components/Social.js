import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "skyblue" }}
            size="2x"
          />
        </a>
        <a href="https://github.com/Saifak34" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/saifalikhan3103/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#e95950" }}
            size="2x"
          />
        </a>
        <a href="https://www.facebook.com/khantastic34" target="_blank">
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: "blue" }}
            size="2x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/saifalikhan-pathan-538057102/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#2867B2" }}
            size="2x"
          />
        </a>
      </div>
    );
  }
}

export default Social;
