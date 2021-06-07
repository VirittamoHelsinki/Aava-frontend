import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withTheme } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: "24px",
    height: "24px;",
    background: "#E9E9E9 0% 0% no-repeat padding-box",
    border: "2px solid #233550",
    borderRadius: "6px",
    opacity: "1",
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: "",
    backgroundImage: "",
    // '&:before': {
    //   display: 'block',
    //   width: 16,
    //   height: 16,
    //   backgroundImage: "",
    //   content: '""',
    // },
    // 'input:hover ~ &': {

    // },
  },
});


function StyledRadio(props) {
  const classes = useStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<CheckBoxIcon  color={props.theme.black}/>}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const RadioButton = withTheme(StyledRadio); 



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
                          <FormControlLabel value={data.value} control={<RadioButton />} label={data.text} />
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
