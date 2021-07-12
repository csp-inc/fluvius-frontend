import React, {useState} from "react";
import { InputLabel, FormControl, Select, Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      width: 550,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    paper: {
        minWidth: 600,
        minHeight: 600,
    }
  }));

const MapStations = () => {
    const classes = useStyles();
    const [station, setStation] = useState('');

  const handleChange = (event) => {
    setStation(event.target.value);
  };
  return (
    <>
    <Paper variant="outlined" elevation={3} className={classes.paper}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select a station:</InputLabel>
            <Select
                id="selectBox"
                native
                value={station}
                onChange={handleChange}
                label="Select a station"
            >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
            </Select>
      </FormControl>
      </Paper>
    </>
  );
};

export default MapStations;
