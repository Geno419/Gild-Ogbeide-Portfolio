import React from "react";
import linkedinLogo from "../images/linkedinLogo.png";
import githubLogo from "../images/githubLogo.png";
import logo from "../images/logo.jpg";

function Welcome() {
  return (
    <>
      <div id="welcomeInfo">
        <h1>Hi! there I'm Gild</h1>
        <p>
          Hello, I'm Gild Emmanuel Ogbeide, a dedicated full-stack Software
          Developer located in the West Midlands, U.K.&#x1F4CD;
        </p>
        <a href="https://www.linkedin.com/in/gild-ogbeide-5329b4250">
          <img src={linkedinLogo} alt="linkedin logo " className="logo" />
        </a>
        <a href="https://github.com/Geno419?tab=overview&from=2023-11-01&to=2023-11-30">
          <img src={githubLogo} alt="github logo" className="logo" />
        </a>
      </div>
      <div>
        <img
          src={logo}
          alt="animation with picture"
          className="logo"
          id="sitelogo"
        />
      </div>
    </>
  );
}

export default Welcome;
