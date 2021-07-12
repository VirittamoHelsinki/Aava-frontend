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

/**
 *
 * TODO:
 * Add more input fields according to the usestate postData, setPostData useState object values. 
 * Check with backend which "POST" and "GET" values should be shown here.
 */

export default 
    function AddUserDiag(props) {
      const [listData, setListData] = useState([
          {key: 0, text: 'Kaikki', value: '1', disabled: false},
          {key: 1, text: 'Luku', value: '2', disabled: false},
          {key: 2, text: 'Kirjoitus', value: '3', disabled: false}
      ]);
      const [postData, setPostData] = useState(
        {"username": "", "first_name": "", "last_name": "", "email": "", "is_staff": "", "is_active": "", "is_superuser": ""}
      )
      const multiHandler = (event) => {
        setPostData(prevState => ({
          ...prevState,
          [event.target.id]: event.target.value
        }))
      }
        return (
          <>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle>Lisää Käyttäjä {!postData.first_name ? "" : postData.first_name }</DialogTitle>
              <DialogContent>
                <TextField
                  id="first_name" 
                  autoFocus
                  label="Nimi"
                  fullWidth
                  value=""
                  onChange={multiHandler}
                />
                <TextField
                  id="last_name"
                  autoFocus
                  label="Sukunimi"
                  fullWidth
                  value=""
                  onChange={multiHandler}
                />
                <TextField
                  id="username"
                  autoFocus
                  label="Nimimerkki"
                  fullWidth
                  value=""
                  onChange={multiHandler}
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