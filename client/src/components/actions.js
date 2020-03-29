import React from "react"
import {axiosWithAuth } from "../utils/axiosWithAuth";


export default class actions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Projects:[]
        }
    }

    componentDidMount() {
        axiosWithAuth()
        .get("/api/actions")
        .then(res => {
            console.log(res)
            this.setState({
                projects: res.data.actions.status
                
            })
        })
        .catch(error => console.log("something has happens", error))
    }

    render(){
        return(
            <div>
                <div>
                    {this.state.projects.map(project => (
                      <div>
                          <h3>{project.description}</h3>

                      </div>  
                    ))}
                </div>
            </div>
        )
    }
}