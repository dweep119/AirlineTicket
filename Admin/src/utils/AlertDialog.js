import * as React from 'react';
import { Button } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';

const AlertDialog = (props) => {
  const { open } = props;

  const handleClickNo = () => {
    props.setopen(false);
  };

  const handleClickYes = () => {
    props.setopen(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Anjali Enterprise Notification"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickNo}>No</Button>
          <Button onClick={handleClickYes}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;