import React from 'react';
import { Button } from '../components/Button';
import Container from '@material-ui/core/Container';
import { TextField } from '../components/TextField';

export default
    function ComponentTest(props) {
        return (
            <Container>
                <h1>Komponenttien testaussivusto</h1>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
                <TextField></TextField>
            </Container>
        )
    }