import React from "react";
import axios from "axios";
import AddProject from "./AddProject";
import "./projectList.css"


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

    updateHandler(){
        const projectsUpdate = {
        
            name: this.state.name,
            description:this.state.description
           
        }

        axios.put("http://localhost:5000/projects/{this.state.id}", projectsUpdate)
        .then(res => {
            console.log("State",res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
             <AddProject />
                
                <div className="projectcards">
                <h1>Current Projects</h1>
                    {this.state.projects.map(project => (
                        <div className="projects" key={project.id}>
                        <h3>Projects Name: <br />
                        {project.name}</h3> 
                        <br />
                        <p>Project Details: <br />
                        {project.description}</p>
                        <button onChange={this.updateHandler}>update</button>

                        </div>
                    ))}
                </div>
               
            </div>
        )
    }
}

