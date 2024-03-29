import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

import MUIbutton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "@material-ui/core";
import { AddCircleOutline as AddButton, Settings, PersonAdd, PlayCircleOutline as PresentationAdd, BorderColorOutlined as EditUserPriviledge,
        Pageview as PreviewProject, OpenInNewOutlined as ExportProject, DeleteOutlined as Delete} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: props => (
        props.look === 'basic' ? {
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
                margin:"1rem",
                '&:hover': {
                    color: "#FFFFFF",
                    background:"#233550"
                }
        } :           
        props.look === 'login' ? {
                width:"227px",
                height:"53px",
                backgroundColor:"#233550",
                color:"white",
                borderRadius:"5px",
                boxShadow: "0px 3px 6px #00000029",
                margin:"1rem",
                fontSize: "20px",
                '&:hover': {
                    color: "#090909",
                    background:"#868f9d"
                }
        } :        
        props.look === 'submit' ? {
                background:"#8EFF8E",
                boxShadow: "2px 2px 0px #000000",
                borderRadius: "5px",
                margin:"1rem",
                '&:hover': {
                    color: "#FFFFFF",
                    background:"#233550"
                }
        } :          
        props.look === 'row' ? {
                color:"#000000",
                '&:hover': {
                    color: "#FFFFFF",
                    background:"#233550"
                }
        } : { /*none*/ }
        )            
    }));

export default 
function Button(props) {
        const { root } = useStyles(props);
        return (
            <MUIbutton 
                className={root}
                startIcon={
                    props.icon === 'AddButton' ?
                        <AddButton /> :
                    props.icon === 'Settings' ?
                        <Settings /> :
                    props.icon === 'PersonAdd' ?
                        <PersonAdd /> :
                    props.icon === 'EditUserPriviledge' ?
                        <EditUserPriviledge /> :
                    props.icon === 'PreviewProject' ?
                        <PreviewProject /> :
                    props.icon === 'Delete' ?
                        <Delete /> :
                    props.icon === 'ExportProject' ?
                        <ExportProject /> :
                    props.icon === 'PresentationAdd' ?
                        <PresentationAdd /> :
                    ""
                }
                {...props}  
            >
                {props.children || 'nappula'}
            </MUIbutton>
        );
}

Button.propTypes = {
    look: PropTypes.oneOf(["submit", "basic", "login", "row"]).isRequired,
    icon: PropTypes.string
}

Button.defaultProps = {
    look: "basic"
}