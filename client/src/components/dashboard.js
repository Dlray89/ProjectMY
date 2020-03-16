import React from 'react';
import Projectlist from "./components/projectList";
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Container } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Dashboard() {
  const classes = useStyles()
  const [ anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

const handleClose = () => {
  setAnchorEl(null)
}

  return (
    <React.Fragment>
    <div  className={classes.root}>
    <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  className={classes.menuButton} color="inherit" aria-label="menu" >
                        <h1><MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} /></h1>
                    </IconButton>
                    <Menu 
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted 
                    open={Boolean(anchorEl)}
                    onClose={handleClose} >
                      <MenuItem onClick={handleClose}>MyProjects</MenuItem>
                      <MenuItem onClick={handleClose}>Tasks</MenuItem>
                      <MenuItem onClick={handleClose}>Account</MenuItem>
                    </Menu>
                    <Typography varient="h6" className={classes.title}>
                        MyProjects
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
            <CssBaseline />
            <Container fixed>
      <h1>Welcome To MyProject</h1>
      <Projectlist />
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
