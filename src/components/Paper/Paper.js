import React from "react";
import MUIPaper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default 
    function Paper(props) {
        const classes = useStyles();
        return (
            <MUIPaper                
                className={classes} 
            >
                {props.children}
            </MUIPaper>
        );
}

