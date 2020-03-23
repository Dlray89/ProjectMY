import React from 'react';
import axios from "axios"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Update from "./UpdateProject"




export default function FormDialog() {

  const [open, setOpen] = React.useState(false);
 
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const putMessage = projects => {
        
    axios
    .put(`http://localhost:5000/api/projects/${projects.id}`, projects)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    }) 
    
}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Button variant="outlined" color="primary" >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit your project</DialogTitle>
        <DialogContent>
          <DialogContentText>
testing                        
          </DialogContentText>
          <Update putMessage={putMessage}  />

        </DialogContent>
       
      </Dialog>
    </div>
  );
}