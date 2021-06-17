import React from 'react';
import MUIchip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    basic: {
        border: "2px solid #090909",
        margin: "0.3rem",
        borderRadius: "12px",
        backgroundColor: "#E9E9E9",
        font: "normal normal 600 12px/11px Poppins",
        height: "17px",
        placeItems: "center"
    },
    secondary: {
        color: "#000000",
        textAlign: "left",
        margin:"1rem",
        backgroundColor: "transparent"
    }
}));

export default 
    function Chip(props) {
        const classes = useStyles();
        return (
            <MUIchip 
            selectable
                className={props.look === "secondary" ? classes.secondary : classes.basic}
                label={props.children || 'chippi'}
                {...props}
            />
        );
}

Chip.defaultProps = {
    look: "basic"
}