import React, {useEffect, useState} from 'react';
import { MenuSide } from '../components/MenuSide';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '../components/Paper';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import NameIcon from '@material-ui/icons/Apps';
import StartIcon from '@material-ui/icons/Today';
import EndIcon from '@material-ui/icons/EventAvailable';
import StatusIcon from '@material-ui/icons/BlurCircular';
import TeamIcon from '@material-ui/icons/PeopleAlt';

import { BasicTable } from '../components/Table';
import DataFetch from '../components/DataFetch/DataFetch'
import { TextField } from '../components/TextField';

export default
    function NewProject(props) {
        const [data, setData] = useState([]);

        const [fields, addFields] = useState([
            {key: 0, text: 'Nimi', icon: <NameIcon />, component: <TextField />},
            {key: 1, text: 'Aloituspäivämäärä', icon: <StartIcon />, component: <TextField />},
            {key: 2, text: 'Lopetuspäivämäärä', icon: <EndIcon />, component: <TextField />},
            {key: 3, text: 'Status', icon: <StatusIcon />, component: <TextField />},
            {key: 4, text: 'Team', icon: <TeamIcon />, component: <TextField />},
            {key: 5, text: 'Tiimit', icon: "", component: <TextField />},
            {key: 5, text: 'Teknologiat', icon: "", component: (
                data.map((row) => {
                    return (
                        <React.Fragment 
                            key={row.id}
                        >
                            <Chip>
                                {row.technology_name}
                            </Chip>
                        </React.Fragment>
                    );
                })
            )},
            {key: 5, text: 'Tekijät', icon: "", component: <TextField />},
            {key: 5, text: 'Kuvaus', icon: "", component: <TextField />},
            {key: 5, text: 'Linkkejä', icon: "", component: <TextField />},
          ]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            DataFetch("technology", {setData, setStatus});
        },[]);
        console.log(status)
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={props.menuData} />
                </Grid>
                <Grid item xs={10}>
                    <Container component={Paper}>
                        <Grid item xs={12}><Typography variant="h6" gutterBottom style={{padding: "1rem"}}>Luo uusi projekti</Typography></Grid>
                        <Grid container alignItems="center">
                        {fields.map((row) => {
                            return (
                                <><Grid item xs={1}>{row.icon}</Grid><Grid item xs={2}><Typography>{row.text}</Typography></Grid><Grid item xs={9}>{row.component}</Grid></>
                            )
                        })}
                        </Grid>
                    </Container>
                </Grid>

            </Grid>

        );
    }