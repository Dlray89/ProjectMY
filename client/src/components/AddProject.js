import React from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core"



export default class addProject extends React.Component {
   state ={
            name: '',
            description:''
        }
    
   

    handleClick = e => {
        e.preventDefault()
        console.log("It works")
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/projects', this.state)
        .then(res => {
            this.setState({
                ...this.state.projects,
                [res.data.id] : res.data
            })
            console.log(res)
        })
        .catch( error => {
            console.log(error)
        })
    }

    

 

    render(){
        const { name, description} = this.state
        
        return(
            <div>
            <div onClick={this.useStyle}>
           
            </div>
            
                <form onSubmit={this.submitHandler}>
                <h2>Add projects</h2>
                    <TextField placeholder="Projects Name" type="text" name="name" value={name} onChange={this.changeHandler} />
                    <br />
                    <TextField placeholder="Description of project" type="text" name="description" value={description} onChange={this.changeHandler} />
                    <br />
                    <Button type="submit" variant="contained">Add Project</Button>

                    <Button type="reset" variant="contained">Reset</Button>
                </form>
            </div>
        )
    }
}