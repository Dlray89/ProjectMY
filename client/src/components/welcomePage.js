import React from "react"
import { Card, CardContent, Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import "./welcomepage.css"


const useStyles = makeStyles(theme => ({
    root:{
        '& > *': {
            margin: theme.spacing(1),
        },
       }
}))



function WelcomePage (props){

    const classes = useStyles()
    return(
        <div className={classes.root}>
        <div  className="container">
        
      
     
    <Card style={{background: "linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b)", border:"solid 2px #D76D77", width:"40%", margin: "15% auto", textAlign: "center"}}>
        <CardContent>
        <h1>Welcome to Project.My</h1>
       <Button color="red" variant="outlined"><Link to="/login">Login</Link></Button> 
        <Button><Link to="/Register">Sign-Up</Link></Button>
        </CardContent>
    </Card>
    </div>
        </div>
    )
}
export default WelcomePage