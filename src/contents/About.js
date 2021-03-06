import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="myinfo">
          <h4>Hey there,</h4>
          <h1>I'm Saifalikhan Pathan</h1>
          <h3>
            Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u>
          </h3>
          <br></br>
          <p>
            I always wanted to learn fullstack development and finally when I
            got chance I started with Frontend Web Development specifically with
            React.js. Since then It has been a great learning curve for me. I
            have gone through some amazing online courses and tutorials taught
            by some extraordinary developers and after that I have started
            creating my own applications. I wish I will continue with such
            passsion and I will continue to develop unique and robust
            applications.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
