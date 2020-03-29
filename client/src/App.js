import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import WelcomePage from "../src/components/welcomePage"
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/dashboard"
import Login from "./components/login"
import Register from "./components/register"
import AddProject from "./components/AddProject"
import Actions from "./components/actions"


function App(){
return(
  <>
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register} />
    <PrivateRoute exact path="/dashboard" component={Dashboard}/>
    <PrivateRoute exact path="/addProject" component={AddProject} />
    <PrivateRoute exact path="/tasks" component={Actions} />
    <PrivateRoute path="/projects/:id" />
<Redirect from="/login" to="/dashboard" />
  </Switch>

  </>
)
}

export default App