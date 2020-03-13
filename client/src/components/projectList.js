import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import axios from "axios"

const ProjectList = props => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
       
        axios
        .get('http://localhost:5000/api/projects/1')
        .then( res => {
            console.log(res.data)
            const projects = res.data;
            setProjects(projects)
        })
        .catch(error => {
            console.log("this is an error", error)
        })
    }, [])
    return(
        <div>
        <h2>Projects</h2>
        <ProjectCard name={projects.name} description={projects.description} />
        
        </div>
    )
}

export default ProjectList