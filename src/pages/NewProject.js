import React, {useEffect, useState} from 'react';
import { MenuSide } from '../components/MenuSide';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '../components/Paper';
import { Radio } from '../components/Radio';
import { Chip } from '../components/Chip';
import NameIcon from '@material-ui/icons/Apps';
import StartIcon from '@material-ui/icons/Today';
import EndIcon from '@material-ui/icons/EventAvailable';
import StatusIcon from '@material-ui/icons/BlurCircular';
import TeamIcon from '@material-ui/icons/PeopleAlt';
import TechIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import LinkIcon from '@material-ui/icons/Link';

import { BasicTable } from '../components/Table';
import { Select } from '../components/Select';
import DataFetch from '../components/DataFetch/DataFetch'
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

// @ts-check

function ChipComponent(props) {
    return (<>
            {props.data.map((row) => {
                return (
                    <React.Fragment 
                        key={row.id}
                    >
                        <Chip clickable>
                            {row.technology_name}
                        </Chip>
                    </React.Fragment>
                );
            })
            }
    </>)
}

export default
    function NewProject(props) {
        const [data, setData] = useState([]);
        const [listData, setListData] = useState([
          {key: 0, text: 'SoftDev', value: '/test', disabled: false},
          {key: 1, text: 'ICT', value: '/login', disabled: false},
          {key: 2, text: 'Media', value: '/test2', disabled: false}
        ]);
        const [selectData, setSelectData] = useState([
            {key: 0, text: 'Aloitettu', value: '/test', disabled: false},
            {key: 1, text: 'Kesken', value: '/login', disabled: false},
            {key: 2, text: 'Valmis', value: '/test2', disabled: false}
        ]);

        const [fields, addFields] = useState([
            {key: 0, text: 'Nimi', icon: <NameIcon />, component: <TextField />},
            {key: 1, text: 'Aloituspäivämäärä', icon: <StartIcon />, component: <TextField />},
            {key: 2, text: 'Lopetuspäivämäärä', icon: <EndIcon />, component: <TextField />},
            {key: 3, text: 'Status', icon: <StatusIcon />, component: <Select selectData={selectData} />},
            {key: 4, text: 'Tiimit', icon: <TeamIcon />, component: <Radio listData={listData} />},
            {key: 5, text: 'Teknologiat', icon: <TechIcon />, component:""},
            {key: 6, text: 'Tekijät', icon: <TeamIcon />, component: <TextField />},
            {key: 7, text: 'Kuvaus', icon: <DescriptionIcon />, component: <TextField multiline={true} rows={4}/>},
            {key: 8, text: 'Linkkejä', icon: <LinkIcon />, component: <TextField />},
          ]);
        const [status, setStatus] = useState("Idle");
        useEffect(() => {         
            DataFetch("technology", {setData, setStatus});
        },[]);
        
        console.log(data)
        console.log(status)
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide menuData={props.menuData} />
                </Grid>
                <Grid item xs={10}>
                    <Container component={Paper}>
                        <Grid item xs={12}><Typography variant="h6" gutterBottom style={{padding: "1rem"}}>Luo uusi projekti</Typography></Grid>
                        <Grid container alignItems="center" spacing={2}>
                        {fields.map((row) => {
                            return (
                                <><Grid item xs={1}>{row.icon}</Grid><Grid item xs={2}><Typography>{row.text}</Typography></Grid><Grid item xs={5}>{row.component ? row.component : <ChipComponent data={data} /> }</Grid><Grid item xs={4}></Grid></>
                            )
                        })}
                        </Grid>
                        <Grid container xs={12} justify="flex-end"><Button >Hylkää</Button><Button look="submit">Syötä</Button></Grid>
                    </Container>
                </Grid>

            </Grid>

        );
    }