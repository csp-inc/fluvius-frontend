import React, {useState} from "react";
import { InputLabel, FormControl, Select, Paper, Typography, MenuItem } from '@material-ui/core';
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
    const {allData, popupInfo, onClick, stationName} = props;

  const handleChange = (event) => {
    console.log("event", console.log(event))
    onClick(event.target.value); 
  };

  return (
    <>
    <Paper variant="outlined" elevation={3} className={classes.box}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select a station:</InputLabel>
            <Select
                id="selectBox"
                value={stationName}
                onChange={handleChange}
                label="Select a station"
            >
              {allData.map((station, index) => (
                 <MenuItem key={index} value={station.site_name}>{station.site_name}</MenuItem>
              ))}
            </Select>
      </FormControl>

      <Paper className={classes.paper} elevation={0}>
      <Typography variant="body1">
        Name: {popupInfo.site_name}
        <hr></hr>
        Description: 
        <hr></hr>
        Latitude: {popupInfo.Latitude}
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
