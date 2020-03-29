import React from "react"
import { Card, CardContent, Button, CardActionArea, Paper } from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "../helperComp/welcomeNav"
import "./welcomepage.css"


const useStyles = makeStyles(theme => ({
    root: {
        border: "solid 2px blue",
        background: "black",
        height: "120vh",
        width: "100%",
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    Card: {
        background: "linear-gradient(to right, #d38312, #a83279)",
        border: "solid 1px #D38312",
        width: "30%",
        height: "100%",
        margin: "0 auto",
        padding: "2%",
        textAlign: "center"
    },
    PaperContent: {
        background: "linear-gradient(to right, #d38312, #a83279)",
        border: 'solid 2px red',
        padding: "1%",
        marginTop: "3%",
        display: "flex",
        justifyContent: "space-around",
        margin: "0 auto",
        width:"70%"
    }
}))



function WelcomePage(props) {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Navbar />



            <div className="cardContainer">
                <Card className={classes.Card}>
                    <CardContent className={classes.Content}>
                        <div>
                            <h1>Welcome to Pro.ject</h1>
                            <p className="intro">Where pros meet project</p>
                        </div>

                        <CardActionArea>
                            <Button color="red" variant="outlined"><Link to="/login">Login</Link></Button>
                            <Button><Link to="/Register">Sign-Up</Link></Button>
                        </CardActionArea>
                    </CardContent>
                </Card>
            </div>
            <Paper className={classes.PaperContent}>
                <p className="introp">
                    Lormemskdjncjdsknvckjsnvcjsanvckjsblvhbsucgusukcnklabciubweikcjsnkjnnjkbnjksdbksjdb kjb hj bhb jksjsb kjszb kjbkjbk
                    </p>

                <p className="pic"> image </p>
            </Paper>
        </div>
    )
}
export default WelcomePage