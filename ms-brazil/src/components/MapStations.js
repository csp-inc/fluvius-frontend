import React, {useState} from "react";
import { InputLabel, FormControl, Select, Paper, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      width: 550,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    box: {
        minWidth: 600,
        minHeight: 650,
    },
    paper: {
        padding: "35px",
        marginTop: "-20px"
  }
  }));

const MapStations = (props) => {
    const classes = useStyles();
    const allData = props.allData;
    const selectedStation = props.selectedStation;
    const setSelectedStation = props.setSelectedStation;

  const handleChange = (event) => {
    setSelectedStation(event.target.value, console.log("event.target.value", console.log(event.target.value)))
  };

  return (
    <>
    <Paper variant="outlined" elevation={3} className={classes.box}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select a station:</InputLabel>
            <Select
                id="selectBox"
                native
                value={selectedStation}
                onChange={handleChange}
                label="Select a station"
            >
              {allData.map((station, index) => (
                 <option key={index} value={station}>{station.site_name}</option>
              ))}
            </Select>
      </FormControl>

      <Paper className={classes.paper} elevation={0}>
      <Typography variant="body1">
        Name: {selectedStation.site_name}
        <hr></hr>
        Description:
        <hr></hr>
        Latitude:
        <hr></hr>
        Longitude:
        <hr></hr>
        Summary:
        <hr></hr>
        Station Owner:
      </Typography>
      </Paper>

      </Paper>
    </>
  );
};

export default MapStations;
