import React, {useEffect, useState} from 'react';
import { MenuSide } from '../components/MenuSide';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { Paper } from '../components/Paper';

import Typography from '@material-ui/core/Typography';
import { BasicTable } from '../components/Table';
import DataFetch from '../components/DataFetch/DataFetch'

export default
    function DashBoard(props) {
        const [data, setData] = useState([]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            DataFetch("dashboard", {data, setData, setStatus});
        },[]);
        console.log(status)
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={props.menuData} />
                </Grid>
                <Grid item xs={10}>
                    <div style={{paddingLeft: "12rem", paddingTop: "8.5rem", paddingBottom: "2.5rem"}}>
                        <Button look="basic" icon="AddButton" component="a" href="/new-project">Uusi Projekti</Button>
                        <Button look="basic" icon="Settings" disabled>Projektien asetukset</Button>
                    </div>
                    <Container component={Paper}>
                        <Grid item xs={12}><Typography variant="h6" gutterBottom style={{padding: "1rem"}}>Projektit</Typography></Grid>
                        <BasicTable data={data} setData={setData} type="dashboard"/>
                    </Container>
                </Grid>

            </Grid>

        );
    }