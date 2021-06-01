import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { Chip } from '../components/Chip';
import { Paper } from '../components/Paper';
import { MenuSide } from '../components/MenuSide';
import { Radio } from '../components/Radio';
import Typography from '@material-ui/core/Typography';

// COMPONENTS TESTING AREA 

export default
    function ComponentTest(props) {
        const handleDelete = (chipToDelete) => () => {
          setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        };
        const [chipData, setChipData] = useState([
            {key: 0, label: 'test1'},
            {key: 1, label: 'test2'},
            {key: 2, label: 'test3'},
            {key: 3, label: 'test4'},
        ]);
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
                        <Chip>JavaScript</Chip> <Chip>UI/UX</Chip>
                        <Chip>Node.js</Chip>
                        <Chip>Angular</Chip>
                        <Chip>MySQL</Chip>
                        <Chip>Power Bi</Chip>
                        <Chip>Wordpress</Chip>
                        <Chip>Python</Chip>
                        <Chip>MongoDB</Chip>
                            {chipData.map((data) => {
                                return (
                                    <React.Fragment 
                                        key={data.key}
                                    >
                                        <Chip
                                            onDelete={handleDelete(data)}
                                        >
                                            {data.label}
                                        </Chip>
                                    </React.Fragment>
                                );
                            })}
                        <TextField style={{margin:"4px"}} />
                        <TextField placeholder="Teknologian nimi" style={{margin:"4px"}} />
                        <TextField label="password" type="password" style={{margin:"4px"}} />
                        <TextField label="test" placeholder="test holder" style={{margin:"4px"}} />
                        <a href="#">test</a>
                        <Radio />
                    </Container>
                </Grid>
                <Grid item xs={1} />    
            </Grid>
        )
    }