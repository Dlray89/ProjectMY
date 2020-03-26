import React from "react";
import axios from "axios";
import { Card } from "@material-ui/core";

import EditButton from "./backDrop";
import "./projectList.css";

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects/")
      .then(res => {
        this.setState({
          projects: res.data
        });
      })
      .catch(error => console.log("something has happened", error));
  }

  

  render() {
    return (
      <div>
        <Card
          className="projectcards"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {this.state.projects.map(project => (
            <Card className="projects" key={project.id}>
              
            <p>Project id#: {project.id}</p>
              <h3>
                Projects Name: <br />
                {project.name}
              </h3>
              <br />
              <p>
                Project Details: <br />
                {project.description}
                {project.completed}
              </p>
              <EditButton></EditButton>
            </Card>
          ))}
        </Card>
      </div>
    );
  }
}
