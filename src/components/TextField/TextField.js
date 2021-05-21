import React from "react";
import MUItextfield from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        basic: {
            border:"2px solid #000000",
            margin:"1rem 0"
        }
}));

export default 
    function TextField(props) {
        const classes = useStyles();
        return (
            <MUItextfield 
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    className: classes.basic
                }}
                {...props}  
            />
        );
}

