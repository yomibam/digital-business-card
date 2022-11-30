import React from "react";
import twitter_logo from "../images/twitter-icon.png";
import github_logo from "../images/github-icon.png";
import behance_logo from "../images/behance-icon.png";

export default function Socials() {
  return (
    <div className="social--icons">
      <a href="https://twitter.com/manlikeyomi">
        <img src={twitter_logo} alt="" />
      </a>
      <a href="https://github.com/yomibam">
        <img src={github_logo} alt="" />
      </a>
      <a href="https://www.behance.net/yomibamidele">
        <img src={behance_logo} alt="" />
      </a>
    </div>
  );
}
