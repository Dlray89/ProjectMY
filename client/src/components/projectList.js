import React from "react";
import axios from "axios";
import Update from "./UpdateProject"
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

    putMessage = projects => {
        
        axios
        .put(`http://localhost:5000/api/projects/${projects.id}`, projects)
        .then(res => {
            this.setState({
                putSuccessMessage: res.data.SuccessMessage,
                putError:''
        })
        
        })
        .catch(error => {
            this.setState({
                putSuccessMessage:'',
                putError: error
            })
        }) 
        
    }


    render(){
        return(
            <div>
            
                
                <div className="projectcards">
                <h1>Current Projects</h1>
                    {this.state.projects.map(project => (
                        <div className="projects" key={project.id} >
                        <h3>Projects Name: <br />
                        {project.name}</h3> 
                        <br />
                        <p>Project Details: <br />
                        {project.description}
                        {project.completed}</p>
                       <Update putMessage={this.putMessage} putSuccessMessage={this.putSuccessMessage} put={this.state.putError} />

                        </div>
                    ))}
                </div>
               
            </div>
        )
    }
}

