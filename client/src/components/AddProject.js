import React from "react";
import axios from "axios";


export default class addProject extends React.Component {
    constructor(){
        super()

        this.state ={
            name: '',
            description:''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/projects', this.state)
        .then(res => {
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
                <form onSubmit={this.submitHandler}>
                <h2>Add projects</h2>
                    <input placeholder="Projects Name" type="text" name="name" value={name} onChange={this.changeHandler} />
                    <input placeholder="Description of project" type="text" name="description" value={description} onChange={this.changeHandler} />
                    <button>Add Project</button>
                </form>
            </div>
        )
    }
}