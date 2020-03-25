import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class Login extends React.Component {
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
      .post("/api/auth/login", this.state.credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        
        this.props.history.push("/dashboard");
       
      })
      .catch(error => console.log(error));
  };

  render() {
    
    return (
      <div>
        <form onSubmit={this.login}>
          <div>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handlerChange}
            />
          </div>
          <div>
            <input
              placeholder="password"
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handlerChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
