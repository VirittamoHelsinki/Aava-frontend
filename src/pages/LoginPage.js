import React from 'react';
import { Button } from '../components/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField } from '../components/TextField';
import { Chip } from '../components/Chip';
import { Paper } from '../components/Paper';
 
export default
    function LoginPage(props) {
        const TextFieldWidth = {width: '400px'}
        return (
            <Container component={Paper} maxWidth="sm">
                <Grid>
                    <Grid item xs={12} style={{display:"grid", justifyItems:"center"}}>
                        <h1>Kirjaudu Sisään</h1>
                    </Grid>    
                    <Grid item xs style={{display:"grid", justifyItems:"center"}}>
                        <TextField label="username" style={TextFieldWidth}/>
                        <TextField label="password" style={TextFieldWidth} />
                    </Grid> 
                    <Grid item xs={12} style={{display:"grid", justifyItems:"center"}}>

                        <Button look="basic">kirjaudu</Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }