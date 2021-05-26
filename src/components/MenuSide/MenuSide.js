import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      color: "white",
      backgroundColor: "#233550",
      position:"absolute",top: "0",
            left:" 0px",
            width: "198px",
            height: "100vh",
            zIndex: "1",
    },
    icon: {
      minWidth: "2rem"
    },
    selected: {
        background: "pink",
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: "transparent"
        }
    }
  }));

  const ListItemStyled = withStyles({
    root: {
      background: 'linear-gradient(45deg, #E9E9E9 30%, #F1F1F1 90%)',
      borderRadius: 3,
      border: 0,
      color: '#000000',
      fontWeight: '600',
      height: 48,
      padding: '0 0 0 -10px',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(ListItem);
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default
    function MenuSide(props) {
        const classes = useStyles();
        const menuItems = []
        return (
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <img src="img/dt_logo_vaaka.png" style={{display:"grid", justifyItems:"center", margin: "0 auto 3rem", width: "88px", height: "76px"}} />
                    <ListItemStyled button selected>
                        <ListItemIcon className={classes.icon}> 
                        <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemStyled>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                        <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Katselmukset" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                        <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Käyttäjänhallinta" />
                    </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Kirjaudu ulos" />
                    </ListItem>
                </List>
            </div>
        )
    }