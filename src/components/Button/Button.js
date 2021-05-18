import React from "react";
import MUIbutton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // esimerkki:
        // margin: "10px",
        // minWidth: "1em",
  
    },
    label: {

    },  
    disabled: {

    },
}));

export default 
    function Button(props) {
        const classes = useStyles();
        return (
            <MUIbutton className={classes}>
                {props.children || 'nappula'}
            </MUIbutton>
        );
}