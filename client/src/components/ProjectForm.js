import React from "react";
import axios from "axios";


class ProjectForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            description: ''
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios
        .post('http://localhost:5000/api/projects', this.state)
        .then( res =>{
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const { name, description} = this.state
        return(
            <div>
                <h1>Add new project</h1>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Name of the project" type="text" name="name" value={name} onChange={this.changeHandler} />
                    <input placeholder="Description of the project" type="description" name="description" value={description} onChange={this.changeHandler} />
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default ProjectForm;