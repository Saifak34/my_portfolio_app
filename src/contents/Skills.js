import React, { Component } from "react";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "PHP", "REACT JS", "FIREBASE", "NODE JS"],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <div className="myinfo">
          <ul>
            {this.state.myskills.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Skills;
