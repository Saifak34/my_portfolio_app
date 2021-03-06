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
            Full Stack Web <u>Developer</u>
          </h3>
          <br></br>
          <p>
            I have been learning Website Development since a while now,I started
            my journey with Frontend Web Development specifically with React.js.
            Since then It has been a great learning curve for me. I have had
            opportunity to learn from some amazing developers and colleagues.I
            have been creating different applications mostly using ReactJS and
            Node.js. I wish I will continue to develop unique and interesting
            web applications.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
