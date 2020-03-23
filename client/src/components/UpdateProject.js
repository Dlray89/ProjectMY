import React from "react";
import { TextField, Button } from "@material-ui/core"



export default class addProject extends React.Component {
    constructor(){
        super()

        this.state ={
            projects: {
            id: '',
            name: '',
            description:'',
         
        }
    }
    }
   
    
    

    changeHandler = e => {
        this.setState({
            projects:{
                ...this.state.projects,
                [e.target.name]: e.target.value
            }
        })
    }

    putMessage = e => {
        e.preventDefault()
        this.props.putMessage(this.state.projects)
    }

   

 

    render(){
       
        
        return(
            <div>
            <div onClick={this.useStyle}>
           
            </div>
            
                <form onSubmit={this.putMessage}>
                <h2>Update projects</h2>
                <TextField placeholder="Projects id"  type="number" name="id" value={this.state.projects.id} onChange={this.changeHandler} /> <br />
                    <TextField placeholder="Projects Name" type="text" name="name" value={this.state.projects.name} onChange={this.changeHandler} /> <br />
                    <br />
                    <TextField placeholder="Description of project" type="text" name="description" value={this.state.projects.description} onChange={this.changeHandler} /> <br />
                   
                    <br />

                    <Button type="submit" variant="contained" >update Project</Button>

                    <Button type="submit" variant="contained" onSubmit={this.deleteMessage}>Reset</Button>
                </form>
            </div>
        )
    }
}