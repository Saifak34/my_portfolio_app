import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <div>
          <h1 className="subtopic">My projects</h1>
        </div>
        <div className="projects">
          <ul>
            <li>
              <a href="https://photogram34.herokuapp.com/" target="blank">
                PictureGram Application <p>(React and Firebase)</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Saifak34/Facebook-clone-app.git"
                target="blank"
              >
                Facebook Clone Page <p>(React) </p>
              </a>
            </li>
            <li>
              <a href="https://todoitemss.herokuapp.com/" target="blank">
                A To-Do List Application <p>(React) </p>
              </a>
            </li>
            <li>
              <a
                href="https://saifalikhanportfolio.herokuapp.com/"
                target="blank"
              >
                Portfolio using React <p>(React) </p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Saifak34/recipe-app/tree/main/src" target="blank">
                Recipe Application with edmam API <p>(React) </p>
              </a>
            </li>
            <li>
              <a href="https://todoitemss.herokuapp.com/" target="blank">
                A To-Do List Application <p>(React) </p>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="git">
            <a
              href="https://github.com/Saifak34?tab=repositories"
              target="blank"
            >
              Click here to check out all other projects/repositories and source
              code
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default Projects;
