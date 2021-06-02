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
                {props.listData ? 
                  props.listData.map ((data) => {
                    return (
                        <React.Fragment 
                            key={data.key}
                        >
                          <FormControlLabel value={data.value} control={<Radio />} label={data.text} />
                        </React.Fragment>
                    );
                  })
                  : (
<> 
</>
                  )
                }
              </RadioGroup>
            </FormControl>
    );
}
