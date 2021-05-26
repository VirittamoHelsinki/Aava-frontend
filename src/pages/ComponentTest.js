import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { Chip } from '../components/Chip';
import { Paper } from '../components/Paper';
import MenuSide from '../components/MenuSide/MenuSide';

// COMPONENTS TESTING AREA 

export default
    function ComponentTest(props) {
        return (
            <Grid container>
                <Grid item xs={2}>
                    <MenuSide />
                </Grid>
                <Grid item xs={9} sm={4.5}>
                    <Container component={Paper}>
                        <h1>Komponenttien testaussivusto</h1>
                        <Button look="submit">submit button</Button>
                        <Button look="basic">basic button</Button>
                        <Button look="row">row button</Button>
                        <Button look="login">login button</Button>

                        <Button look="login" icon="AddButton" color="primary">icon button #1</Button>
                        <Button look="basic" icon="Settings">icon button #2</Button>
                        <Button look="submit" icon="PersonAdd">icon button #3</Button>
                        <Button look="submit" icon="PresentationAdd">icon button #4</Button>

                        <Button look="row" disabled>EI KÄYTÖSSÄ</Button>
                        <Chip>test</Chip><Chip>test</Chip><Chip>test</Chip>
                        <TextField style={{margin:"4px"}} />
                        <TextField placeholder="Teknologian nimi" style={{margin:"4px"}} />
                        <TextField label="password" type="password" style={{margin:"4px"}} />
                        <TextField label="test" placeholder="test holder" style={{margin:"4px"}} />
                    </Container>
                </Grid>
                <Grid item xs={1} />    
            </Grid>
        )
    }