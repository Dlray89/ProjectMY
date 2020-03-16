import React from "react"
import { Card, CardContent, Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import Projects from "./components/projectList"




function WelcomePage (props){
    return(
        <div>
      
        <Projects  />
    <Card style={{border:"solid 2px red", width:"50%", margin: "0 auto"}}>
        <CardContent>
        <h1>Welcome to Project.My</h1>
       <Button><Link to="login">Login</Link></Button> 
        <Button><Link to="Register">Sign-Up</Link></Button>
        </CardContent>
    </Card>
       
        </div>
    )
}
export default WelcomePage