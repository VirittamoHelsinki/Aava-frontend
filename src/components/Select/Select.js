import React from "react";
import MUIselect from '@material-ui/core/select';
import {FormControl, InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default 
    function Select(props) {
        const classes = useStyles();
        return (
            <FormControl className={​​​​​​​​​classes.formControl}​​​​​​​​​>
              <InputLabel htmlFor="age-native-simple">​​​​​​​asd</InputLabel>
              <MUIselect
                native
                value={}​​​​​​​​​
                onChange={​​​​​​​​​handleChange}​​​​​​​​​
              >
              </MUIselect>
            </FormControl>
        );
}

