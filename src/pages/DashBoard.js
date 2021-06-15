import React, {useEffect, useState} from 'react';
import { MenuSide } from '../components/MenuSide';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { Chip } from '../components/Chip';
import { Paper } from '../components/Paper';
import { Radio } from '../components/Radio';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import GroupIcon from '@material-ui/icons/Group';

import Typography from '@material-ui/core/Typography';
import { Table } from '@material-ui/core';
import { BasicTable } from '../components/Table';
import { DateRange } from '@material-ui/icons';
import DataFetch from '../components/DataFetch/DataFetch'

export default
    function DashBoard(props) {
        const [menuData, setMenuData] = useState([
            {key: 0, text: 'Dashboard', link: '/dashboard', icon: <DashboardIcon />},
            {key: 1, text: 'Katselmukset', link: '/reviews', icon: <SlideshowIcon />},
            {key: 2, text: 'Käyttäjät', link: '/users', icon: <GroupIcon />},
        ]);
        const [data, setData] = useState([]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            DataFetch("dashboard", {data, setData, setStatus});
        },[]);
        console.log(status)
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={menuData} />
                </Grid>
                <Grid item xs={10}>
                    <div style={{paddingLeft: "12rem", paddingTop: "8.5rem", paddingBottom: "2.5rem"}}>
                        <Button look="basic" icon="AddButton">Uusi Projekti</Button>
                        <Button look="basic" icon="Settings" disabled>Projektien asetukset</Button>
                    </div>
                    <Container component={Paper}>
                        <Grid item xs={12}><Typography variant="h6" gutterBottom style={{padding: "1rem"}}>Projektit</Typography></Grid>
                        <Grid container xs={12} justify="flex-end"><TextField /></Grid>
                        <BasicTable data={data} setData={setData} type="dashboard"/>
                    </Container>
                </Grid>

            </Grid>

        );
    }