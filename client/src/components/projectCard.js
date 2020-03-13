import React from "react"
import ProjectForm from "./ProjectForm"

const ProjectCard = props => {
return(
   <div>
      <h1>testing</h1>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <ProjectForm />
   </div>
)
}

export default ProjectCard