import React from "react";
import FaceBookLogo from "../images/icon-facebook.svg";
import TwitterLogo from "../images/icon-twitter.svg";
import PinterestLogo from "../images/icon-pinterest.svg";
import InstagramLogo from "../images/icon-instagram.svg";

const Icons = () => {
  return (
    <div>
      <div className="p-1">
        <img className="p-2" src={FaceBookLogo} alt="" />
        <img className="p-2" src={TwitterLogo} alt="" />
        <img className="p-2" src={PinterestLogo} alt="" />
        <img className="p-2" src={InstagramLogo} alt="" />
      </div>
      <p>2021 | Loopstudios. All rights reserved</p>
    </div>
  );
};

export default Icons;
