import React from "react";
import MUIchip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
}));

export default 
    function Chip(props) {
        const classes = useStyles();
        return (
            <MUIchip 
            selected
                // className={classes.submit} 
                label={props.children || 'chippi'}
                {...props}
            />
        );
}