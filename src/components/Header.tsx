import React from "react";
import {ReactTyped} from "react-typed";
import resumeFile from "../assets/Aman_Singh_Gautam_Resume.pdf"

interface HeaderProps{
    headerRef: React.RefObject<HTMLDivElement>;
}

const Header = ({headerRef} : HeaderProps) => {

  return (
    <div className="header-wrapper" ref={headerRef}>
      <div className="main-info">
        <h1>Welcome To My Portfolio</h1>
        <ReactTyped
          className="typed-text"
          strings={["Code", "Eat", "Sleep", "Repeat"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
        <button className="download-resume"><a  className="link-resume" href={resumeFile} download="Aman_Singh_Gautam_Resume">Download Resume</a></button>
      </div>
    </div>
  );
};

export default Header;
