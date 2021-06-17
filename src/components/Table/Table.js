import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { VisibilityOutlined as Visibility, VisibilityOffOutlined as VisibilityOff }from '@material-ui/icons';
import Button from '../Button/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable(props) {
    const classes = useStyles();
    function checkCodeName(code) {
        return {
            FU: "Suunnitteilla", IN:"Kesken", FI:"Valmis", HA:"Keskeytetty",
            CO: "Core", IC:"ICT", SO:"SoftDev", ME:"Media"
        }[code]
    }
    function checkVisibility(visible) {
        if (visible === true) {
            return <Visibility />;
        } else {
            return <VisibilityOff />;
        }
    }
    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row.id}>
                            {row.project_name && 
                                <TableCell component="th" scope="row">{row.project_name}</TableCell>}
                            {row.status && <TableCell align="right">{checkCodeName(row.status)}</TableCell>}
                            {row.user && <TableCell align="left">{row.user.first_name}{row.user.last_name}</TableCell>}
                            {row.modified && <TableCell align="right">{row.modified}</TableCell>}
                            {row.team && <TableCell align="left">{checkCodeName(row.team)}</TableCell>}
                            {row.visible && <TableCell align="right">{checkVisibility(row.visible)}</TableCell>}
                            {row.user && <TableCell align="right"><Button look="row" icon="EditUserPriviledge">Muokkaa oikeuksia</Button></TableCell>}
                            {(row.project_name && !row.visible && !row.modified) && 
                                <>
                                    <TableCell align="right"><Button look="row" icon="PreviewProject">Näytä</Button></TableCell>
                                    <TableCell align="right"><Button look="row" icon="ExportProject">Vie</Button></TableCell>
                                    <TableCell align="right"><Button look="row" icon="EditUserPriviledge">Muokkaa</Button></TableCell>
                                    <TableCell align="right"><Button look="row" icon="Delete">Poista</Button></TableCell>
                                </>
                            }
                        </TableRow>
                    ))}
                </TableBody> 
            </Table>
        </TableContainer>
    );
}