import React from "react";
import { Link } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Navbar from "./loginNavBar"
import { Card, CardContent, TextField } from "@material-ui/core"


export default class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handlerChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
  
    axiosWithAuth()
      .post("/api/auth/register", this.state.credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        
        this.props.history.push("/dashboard");
       
      })
      .catch(error => console.log(error));
  };

  render() {
    
    return (
      <div>
  <Navbar />
  <Card style={{width:"40%", margin: "10% auto", textAlign: "center"}}>
  <h1>SIGNUP</h1>

  <Link to="login">Already have an account? Sign-in here</Link>
    <CardContent>

        <form onSubmit={this.login}>
          <div>
            <TextField
            required
            id="password"
            label="username"
            defaultValue="username"
            variant="outlined"
             
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handlerChange}
            />
          </div>
          <div>
            <TextField
            required
            id="password"
            label="Password"
            defaultValue="password"
            variant="outlined"
             
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handlerChange}
            />
          </div>
          <button>Submit</button>
        </form>
        </CardContent>
  </Card>
      </div>
    );
  }
}
