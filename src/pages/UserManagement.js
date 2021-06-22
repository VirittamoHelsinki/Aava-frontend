import React, {useEffect, useState} from 'react';
import { MenuSide } from '../components/MenuSide';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '../components/Paper';
import { Button } from '../components/Button';
import AddUserDiag from '../dialog/AddUser'
import { BasicTable } from '../components/Table';
import DataFetch from '../components/DataFetch/DataFetch'

export default
    function Reviews(props) {
        const [data, setData] = useState([]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            const showData = DataFetch("usermanagement", {setStatus});
            showData.then( resolved => {
                setData(resolved.resultsData);
                setStatus(resolved.setStatus)
              }, e => {
                throw new Error(e);
            });
        },[]);
        console.log(status)

        const [open, setOpen] = useState(false);
        const handleClose = () => {
            setOpen(false);
        };
  
        const handleClickOpen = () => {
            setOpen(true);
        };
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={props.menuData} />
                </Grid>
                <Grid item xs={10}>
                    <div style={{paddingLeft: "12rem", paddingTop: "8.5rem", paddingBottom: "2.5rem"}}>
                        <Button look="basic" icon="PersonAdd" onClick={handleClickOpen}>Lisää käyttäjä</Button>
                        <AddUserDiag handleClickOpen={handleClickOpen} open={open} handleClose={handleClose} />
                    </div>
                    <Container component={Paper}>
                        <Grid item xs={12}><Typography variant="h6" gutterBottom style={{padding: "1rem"}}>Käyttäjähallinta</Typography></Grid>
                        <BasicTable data={data} setData={setData} />
                    </Container>
                </Grid>

            </Grid>

        );
    }