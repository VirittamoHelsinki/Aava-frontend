import React, {useState, useRef, useLayoutEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { Paper } from '../components/Paper';

export default
    function LoginPage(props) {
        const TextFieldWidth = {width: '400px'}
        const [login, setLogin] = useState(false);
        const [username, setUsername] = useState([]);
        const [password, setPassword] = useState([]);

        const timer = useRef();

        // reset the login back to false after certain time.
        useLayoutEffect(() => {
           timer.current = window.setTimeout(() => {
               setLogin(false)
           }, 1000)
        }, [login]);

        // check if inputs have anything.
        const validateInputs = () => {
            return username.length > 0 && password.length > 0;
        }

        // check if not logged in and then show login page, if logged in then redirect.
        if (!login) {
            return (
                <Container component={Paper} maxWidth="sm">
                    <Grid>
                        <form>
                            <Grid item xs={12} style={{display:"grid", justifyItems:"center"}}>
                                <h1>Kirjaudu Sisään</h1>
                            </Grid>    
                            <Grid item xs style={{display:"grid", justifyItems:"center"}}>
                                <TextField label="username" style={TextFieldWidth} value={username} onChange={e => setUsername(e.target.value)} />
                                <TextField label="password" type="password" style={TextFieldWidth} value={password} onChange={e => setPassword(e.target.value)} />
                            </Grid> 
                            <Grid item xs={12} style={{display:"grid", justifyItems:"center"}}>
                                <Button look="login" onClick={() => setLogin(true)} disabled={!validateInputs()}>kirjaudu</Button>
                            </Grid>
                        </form>
                    </Grid>
                </Container>
            )
        }

        if (login === true) {
            return <Redirect to="/dashboard" />;
        }
    }