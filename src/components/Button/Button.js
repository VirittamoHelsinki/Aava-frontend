import React from "react";
import MUIbutton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";
import { AddCircleOutline, Settings, PersonAdd, PlayCircleOutline } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    login: {
        width:"227px",
        height:"53px",
        backgroundColor:"#233550",
        color:"white",
        borderRadius:"5px",
        boxShadow: "0px 3px 6px #00000029",
        margin:"1rem"

        // esimerkki:
        // margin: "10px",
        // minWidth: "1em",
  
    },
   

    basic: {
        icons: {
            add:AddCircleOutline,
            settings:Settings,
            addUser:PersonAdd,
            addPresentation:PlayCircleOutline
        },

        color:"black",
        textDecoration:"none",
        fontWeight:"bold",
        backgroundColor:"white",
        paddingRight:"7px",
        paddingLeft:"7px",
        paddingTop:"5px",
        paddingBottom:"5px", 
        borderRadius: "5px",
        boxShadow: "0px 3px 6px #00000029",
        margin:"1rem"
      
    },

    submit: {
 
    },

    row: {

    }
}));

export default 
    function Button(props) {
        const classes = useStyles();
        return (
            <MUIbutton className={classes.login}>
                {props.children || 'nappula'}
            </MUIbutton>
        );
}