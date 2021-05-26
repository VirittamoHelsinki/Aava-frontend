import React from "react";
import MUIchip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: props => (
        props.look === 'basic' ? {
            backgroundColor:"#E9E9E9",
            border: "2px solid #090909",
            borderRadius: "12px",
            margin:"1rem"
                
        } :  
        props.look == 'secondary' ? {
            color: "#000000",
            textAlign: "left",
            margin:"1rem"


        }  : { /*none*/ }       

    )
}));

export default 
    function Chip(props) {
        const classes = useStyles();
        return (
            <MUIchip 
            className={props.look === "secondary" ? classes.secondary : classes.basic}
            >
                {props.children || 'chippi'}
            </MUIchip>
        );
}




Chip.defaultProps = {
    look: "basic"
}