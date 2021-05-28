import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MUIlistItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import GroupIcon from '@material-ui/icons/Group';
import LogoutIcon from '@material-ui/icons/ExitToApp';

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
      minWidth: "2rem",
      color: "white",
    },
    selected: {
      minWidth: "2rem",
      color: "black"
    }
  }));

  const ListItem = withStyles({
    root: {
      color: "white"
    },
    label: {
      textTransform: 'capitalize',
    },
    selected: {
      backgroundColor: '#E9E9E9',
      borderRadius: 3,
      border: 0,
      color: '#000000',
      fontWeight: '600',
      height: 48,
      padding: '0 0 0 -10px',
      '&:hover': {
        backgroundColor: "#868F9D"
      }
    }
  })(MUIlistItem);
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default
    function MenuSide(props) {
        const classes = useStyles();
        const menuItems = []
        return (
            <div className={classes.root}>
                <List component="nav" aria-label="main dashboard review control">
                    <img src="img/dt_logo_vaaka.png" style={{display:"grid", justifyItems:"center", margin: "0 auto 3rem", width: "88px", height: "76px"}} />
                    <ListItem button selected>
                        <ListItemIcon className={classes.selected}> 
                        <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                        <SlideshowIcon />
                        </ListItemIcon>
                        <ListItemText primary="Katselmukset" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                        <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Käyttäjänhallinta" />
                    </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary logout system">
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                          <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kirjaudu ulos" />
                    </ListItem>
                </List>
            </div>
        )
    }