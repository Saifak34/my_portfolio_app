import React, { Component } from "react";
import Social from "./../components/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <div className="myinfo">
          <h3>Email : spath310394@gmail.com</h3>
          <h3>Instagram : @saifalikhan3103</h3>
        </div>
        <Social />
      </div>
    );
  }
}

export default Contact;
