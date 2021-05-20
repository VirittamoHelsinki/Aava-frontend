import React from 'react';
import { Button } from '../components/Button';
import Container from '@material-ui/core/Container';
import { TextField } from '../components/TextField';
import { Chip } from '../components/Chip';
import { Paper } from '../components/Paper';
 
export default
    function ComponentTest(props) {
        return (
            <Container>
                <h1>Komponenttien testaussivusto</h1>
                <Paper>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
                test</Paper>
                <Chip>test</Chip>
                <TextField></TextField>
            </Container>
        )
    }