import React from "react";
import MUIselect from '@material-ui/core/select';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default 
    function Select(props) {
        const classes = useStyles();
        return (
            <MUIselect
                className={classes.basic} 
            >
                {props.children}
            </MUIselect>
        );
}

