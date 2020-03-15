import React from "react";
import axios from "axios";
import { Button } from "@material-ui/core"
import AddProject from "./AddProject";


export default class ProjectList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[]
        };
    }

    componentDidMount(){
        axios
        .get('http://localhost:5000/api/projects/')
        .then(res => {
            this.setState({
                projects: res.data
            })
        })
        .catch(error => console.log("something has happened", error))
    }
    render(){
        return(
            <div>
                <h1>Current Projects</h1>
                <div>
                    {this.state.projects.map(project => (
                        <div key={project.id}>
                        {project.name} <br />
                        {project.description}</div>
                    ))}
                </div>
                <AddProject />
            </div>
        )
    }
}

