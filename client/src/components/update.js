import React from "react";
import axios from "axios";



export default class Update extends React.Component {
    constructor(){
        super()

        this.state = {
            name:'',
            description:''
        }
    }
   

    changeHandler = e => {
        this.setState({[ e.target.name] : e.target.value})
    }

    updateHandler = e => {
        e.preventDefault();
        console.log(this.state)
    }

    fetchProject = id => {
          axios
        .put(`localhost:5000/api/projects/${id}`, this.state)
        .then(res => {
            console.log(res)
        })
        .ctach(error => {
            console.log(error)
        })
    }


    render(){
        const { name, description} = this.state

        return(
            <div>
                 <form onSubmit={this.updateHandler}>
                    <input placeholder="Name of the project" type="text" name="name" value={name} onChange={this.changeHandler} />
                    <input placeholder="Description of the project" type="description" name="description" value={description} onChange={this.changeHandler} />
                 <button type="submit" onClick={this.fetchProject}>Submit</button>
                 
                </form>
            </div>
        )
    }


}

