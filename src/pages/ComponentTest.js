import React from 'react';
import { Button } from '../components/Button';
import Container from '@material-ui/core/Container';
import { TextField } from '../components/TextField';
import { Chip } from '../components/Chip';
import { Paper } from '../components/Paper';
 
export default
    function ComponentTest(props) {
        return (
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
                <Chip>test</Chip>
                <TextField></TextField>
            </Container>
        )
    }