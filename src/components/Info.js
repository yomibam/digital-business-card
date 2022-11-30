import React from "react";
import profile_photo from "../images/me-lr.jpg";

function EmailOnClick() {
  return (e) => {
    e.preventDefault();
    // window.location.href = "https://mailto:yomibamidele23@gmail.com/";
    window.open("https://mailto:yomibamidele23@gmail.com/", "_blank");
  };
}

function LinkedinOnClick() {
  return (e) => {
    e.preventDefault();
    // window.location.href = "https://www.linkedin.com/in/yomi-bamidele/";
    window.open("https://www.linkedin.com/in/yomi-bamidele/", "_blank");
  };
}

export default function Info() {
  return (
    <div>
      <img src={profile_photo} alt="" className="profile--photo" />
      <h2 className="profile--name">Bamidele Oluwayomi</h2>
      <h3 className="profile--job">Frontend Developer</h3>
      <a
        href="https://www.behance.net/yomibamidele"
        className="profile--website"
      >
        Website
      </a>
      <div className="info--buttons">
        <button
          type="button"
          onClick={EmailOnClick()}
          className="email--button"
        >
          Email
        </button>

        <button
          type="button"
          onClick={LinkedinOnClick()}
          className="linkedin--button"
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
}
