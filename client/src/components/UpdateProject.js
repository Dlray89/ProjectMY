import React from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core"



export default class addProject extends React.Component {
    constructor(){
        super()

        this.state ={
            id: '',
            name: '',
            description:''
        }
    }
   

    

    changeHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value})
    }

    putHandler = (e , id, updateProject) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/projects/${id}`, updateProject)
        .then(res => {
            console.log(res)
        })
        .catch( error => {
            console.log(error)
        })
    }

 

    render(){
        const {id, name, description} = this.state
        
        return(
            <div>
            <div onClick={this.useStyle}>
           
            </div>
            
                <form onSubmit={this.putHandler}>
                <h2>Update projects</h2>
                <TextField placeholder="Projects id" type="text" name="id" value={id} onChange={this.changeHandler} />
                    <TextField placeholder="Projects Name" type="text" name="name" value={name} onChange={this.changeHandler} />
                    <br />
                    <TextField placeholder="Description of project" type="text" name="description" value={description} onChange={this.changeHandler} />
                    <br />
                    <Button type="submit" variant="contained" >update Project</Button>

                    <Button type="reset" variant="contained">Reset</Button>
                </form>
            </div>
        )
    }
}