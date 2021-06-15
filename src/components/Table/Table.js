import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { Visibility, VisibilityOff }from '@material-ui/icons';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = [
    {
        "id": 3,
        "project_name": "Aarnivalkea",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 4,
        "project_name": "Valokuvausmetodillinen tutkiminen",
        "status": "FU",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 5,
        "project_name": "Nopea ohjelmistokehitys",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 6,
        "project_name": "Ancible palvelimen ymmärtäminen",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 7,
        "project_name": "Uusien yhteistyökumppaneiden löytäminen",
        "status": "HA",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 8,
        "project_name": "UKM (Uusi Kilpailija Microsoftille)",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 9,
        "project_name": "Chlas Ohlson Fikaus Viikko",
        "status": "FU",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 10,
        "project_name": "Työvälinevaraston avajaiset",
        "status": "FI",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 11,
        "project_name": "World Ablaze The Second World War 1939-1945",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": false
    },
    {
        "id": 12,
        "project_name": "Miksi ohjelmiston versionhallinta on tärkeää",
        "status": "HA",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 13,
        "project_name": "Projektin luonti työkalu",
        "status": "FI",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 14,
        "project_name": "I pressed the HRE control and ahead of me rockets blazed through the sky",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 15,
        "project_name": "Maailmantäyttö kissakuvilla",
        "status": "FI",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 16,
        "project_name": "Koirien paijaus projekti",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 17,
        "project_name": "Pyykinpesu",
        "status": "FI",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 18,
        "project_name": "Vaatteiden lian poisto",
        "status": "HA",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 19,
        "project_name": "Kasvuprojekti",
        "status": "FI",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 20,
        "project_name": "koiraprojekti",
        "status": "IN",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 21,
        "project_name": "Coca Cola Enjuo",
        "status": "FI",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 22,
        "project_name": "Osa-aikainen hieno homma",
        "status": "HA",
        "modified": "2021-06-02T00:00:00Z",
        "team": "SO",
        "visible": true
    },
    {
        "id": 23,
        "project_name": "Oishi green tean juominen",
        "status": "FU",
        "modified": "2021-06-02T00:00:00Z",
        "team": "ME",
        "visible": false
    },
    {
        "id": 24,
        "project_name": "This is the name of the project",
        "status": "FU",
        "modified": "2021-06-04T09:16:48.658539Z",
        "team": "ME",
        "visible": false
    },
    {
        "id": 25,
        "project_name": "Mörkö sanoo pööö",
        "status": "FU",
        "modified": "2021-06-04T13:47:42.299026Z",
        "team": "ME",
        "visible": false
    },
    {
        "id": 26,
        "project_name": "This is the name of the project",
        "status": "FU",
        "modified": "2021-06-04T13:52:42.054756Z",
        "team": "ME",
        "visible": false
    }
];



export default function BasicTable(props) {
    const classes = useStyles();
    function checkCodeName(code) {
        return {
            FU: "Suunnitteilla", IN:"Kesken", FI:"Valmis", HA:"Keskeytetty",
            CO: "Core", IC:"ICT", SO:"SoftDev", ME:"Media"
        }[code]
    }
    function checkVisibility(visible) {
        return {
            false: <VisibilityOff />, true: <Visibility />
        }[visible]
    }
    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.project_name}
                            </TableCell>
                            <TableCell align="right">{checkCodeName(row.status)}</TableCell>
                            <TableCell align="right">{row.modified}</TableCell>
                            <TableCell align="right">{checkCodeName(row.team)}</TableCell>
                            <TableCell align="right">{checkVisibility(row.visible)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}