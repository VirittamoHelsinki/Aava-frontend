import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(projektit, status, muokkauspvm, tiimi, näkyvyys) {
    return { projektit, status, muokkauspvm, tiimi, näkyvyys};
}


const rows = [
    createData('Awesome React app', "käynnissä", "11/06/2021" , "ICT", "true"),
    createData('Awesome React app', "keskeytynyt", "11/06/2021", "Media", "true"),
    createData('Awesome React app', "käynnissä", "11/06/2021", "Softa", "false"),
    createData('Awesome React app', "valmis", "11/06/2021", "Softa", "true"),
    createData('Awesome React app', "valmis", "11/06/2021", "Media", "true"),
];



export default function BasicTable() {
    const classes = useStyles();


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Projektit</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Muokkauspvm</TableCell>
                        <TableCell align="right">Tiimi</TableCell>
                        <TableCell align="right">Näkyvyys</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.projektit}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.muokkauspvm}</TableCell>
                            <TableCell align="right">{row.tiimi}</TableCell>
                            <TableCell align="right">{row.näkyvyys}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}