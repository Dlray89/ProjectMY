import React from "react"
import axios from "axios"


export default function ProjectCard (props){

    const getid = projects => {
           
            axios
            .get(`http://localhost:5000/api/projects/${projects.id}`, projects)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(`${error}`))
        }
    
    return(
        <div>
            <h1>
              {props.name}
            </h1>
        </div>
    )
}