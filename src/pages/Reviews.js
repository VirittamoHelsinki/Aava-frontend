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
    function Reviews(props) {
        const [menuData, setMenuData] = useState([
            {key: 0, text: 'Dashboard', link: '/dashboard', icon: <DashboardIcon />},
            {key: 1, text: 'Katselmukset', link: '/reviews', icon: <SlideshowIcon />},
            {key: 2, text: 'Käyttäjät', link: '/usermanagement', icon: <GroupIcon />},
        ]);
        const [data, setData] = useState([]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            DataFetch("dashboard", {setData, setStatus});
        },[]);
        console.log(status)
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={menuData} />
                </Grid>
                <Grid item xs={10}>
                    <Container component={Paper}>
                        <BasicTable data={data} setData={setData} />
                    </Container>
                </Grid>

            </Grid>

        );
    }