import React, {useState} from 'react';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { Radio } from '../components/Radio';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default 
    function AddUserDiag(props) {
      const [listData, setListData] = useState([
          {key: 0, text: 'Kaikki', value: '1', disabled: false},
          {key: 1, text: 'Luku', value: '2', disabled: false},
          {key: 2, text: 'Kirjoitus', value: '3', disabled: false}
      ]);
        return (
          <>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle>Lisää Käyttäjä</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  label="Nimi"
                  fullWidth
                />
                <Radio listData={listData} />
                <Grid container spacing={1.5} alignItems="center">
                  <Grid item>
                    <LinkedInIcon />
                  </Grid>
                  <Grid item>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} alignItems="center">
                  <Grid item>
                    <GitHubIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      autoFocus
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={props.handleClose} look="submit">
                  Tallenna
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
}