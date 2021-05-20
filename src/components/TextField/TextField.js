import React from "react";
import MUItextfield from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        basic: {
                border:"2px solid #000000",
                width: "426px",
                height: "178px",
                margin:"1rem"
                }
}));

export default 
    function TextField(props) {
        const classes = useStyles();
        return (
            <MUItextfield 
                className={classes.basic} 
            >
                {props.children}
            </MUItextfield>
        );
}

