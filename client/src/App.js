import React from "react"
import { Switch, Route } from "react-router-dom"
import WelcomePage from "./welcomePage"


function App(){
return(
  <>
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route />
  </Switch>

  </>
)
}

export default App