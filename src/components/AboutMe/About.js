import React, { Component } from "react";
import "./About.css";
import { Details } from "./Details.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHsXcaFxm_RBg/profile-displayphoto-shrink_200_200/0/1654078616317?e=1669248000&v=beta&t=EKHx7KCmYFX1PB3cg_XYZjGsF5ezYGx7iFsjR3fgo1E"
              alt="Anand"
              height="300"
              width="300"
            />
          </div>
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
              I’m a Front End Developer. I have around 5 years of experience
              into building scalable and responsive applications. I have worked
              with Fiserv and currently I am working with Xoriant as a Software
              Engineer
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
