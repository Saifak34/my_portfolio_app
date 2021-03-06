import React, { Component } from "react";
import Widecard from "./../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>

        <Widecard
          title="Master of Engineering"
          field="Systems and Computer Engineering"
          where={
            <a
              href="https://carleton.ca/"
              target="blank"
              style={{ color: "orange" }}
            >
              Carleton University
            </a>
          }
          from="August 2016"
          to="May 2018"
        />
        <Widecard
          title="Bachelor of Engineering"
          field="Electronics and Communications Engineering"
          where={
            <a
              href="https://www.gtu.ac.in/"
              target="blank"
              style={{ color: "orange" }}
            >
              Gujarat Technological University
            </a>
          }
          from="August 2011"
          to="May 2015"
        />
      </div>
    );
  }
}

export default Education;
