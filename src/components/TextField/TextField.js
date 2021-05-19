import React from "react";
import MUItextfield from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default 
    function TextField(props) {
        const classes = useStyles();
        return (
            <MUItextfield 
                className={classes.submit} 
            >
                {props.children}
            </MUItextfield>
        );
}

