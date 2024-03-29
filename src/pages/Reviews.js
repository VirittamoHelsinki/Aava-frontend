import React, {useEffect, useState} from 'react';
import { MenuSide } from '../components/MenuSide';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '../components/Paper';
import { Button } from '../components/Button';

import { BasicTable } from '../components/Table';
import DataFetch from '../components/DataFetch/DataFetch'

// @ts-check

export default
    function Reviews(props) {
        const [data, setData] = useState([]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            const showData = DataFetch("presentation", {setStatus});
            showData.then( resolved => {
                setData(resolved.resultsData);
                setStatus(resolved.setStatus)
              }, e => {
                throw new Error(e);
            });
        },[]);
        console.log(status)
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={props.menuData} />
                </Grid>
                <Grid item xs={10}>
                    <div style={{paddingLeft: "12rem", paddingTop: "8.5rem", paddingBottom: "2.5rem"}}>
                        <Button look="basic" icon="PresentationAdd">Lisää esitys</Button>
                    </div>
                    <Container component={Paper}>
                        <Grid item xs={12}><Typography variant="h6" gutterBottom style={{padding: "1rem"}}>Katselmukset</Typography></Grid>
                        <BasicTable data={data} setData={setData} />
                    </Container>
                </Grid>

            </Grid>

        );
    }