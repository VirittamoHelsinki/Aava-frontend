import React from "react";
import MUIselect from '@material-ui/core/select';
import {FormControl, InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:"1rem 0",
    width: "20%"
  }
}));

export default 
    function Select(props) {
        const classes = useStyles();
        return (
            <FormControl className={classes.root}>
              <InputLabel>Valitse</InputLabel>
              <MUIselect>
                {props.selectData && 
                  props.selectData.map ((data) => {
                    return (
                        <React.Fragment 
                            key={data.key}
                        >
                          <MenuItem value={data.value}>{data.text}</MenuItem>
                        </React.Fragment>
                    );
                  })
                } 
              </MUIselect>
            </FormControl>
        );

}

