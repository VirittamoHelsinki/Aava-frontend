import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default 
    function Select(props) {
        return(
            <FormControl component="fieldset">
              <FormLabel component="legend">valitse</FormLabel>
              <RadioGroup aria-label="valitse" name="valitse">
                <FormControlLabel value="vaihtoehto 1" control={<Radio />} label="vaihtoehto 1" />
                <FormControlLabel value="vaihtoehto 2" control={<Radio />} label="vaihtoehto 2" />
                <FormControlLabel value="vaihtoehto 3" control={<Radio />} label="vaihtoehto 3" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
              </RadioGroup>
            </FormControl>
    );
}
