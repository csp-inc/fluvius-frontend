import React, {useMemo, useState} from "react";
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
    const {allData, popupInfo, setPopupInfo, onClick, stationName} = props;

    ///TO GET THIS TO WORK WE NEED TO WRITE A PROMISE FOR ALLDATA.
    //SET THE SELECT VALUE TO allData[0][0], but need to give it time to load before calling it otherwise app will crash!
    //WHY ADDING THE DEFAULT VALUE WORKS
    
  const handleChange = (event) => {
    event.preventDefault();
    console.log("event", console.log(event))
    setPopupInfo(allData.find( ({site_name}) => site_name === event.target.value )
    )
    onClick(event.target.value); 
  };

  return (
    <>
    <Paper variant="outlined" elevation={3} className={classes.box}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select a station:</InputLabel>
            <Select
                id="selectBox"
                defaultValue={''}
                value={allData[0][0]}
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
        Name: &nbsp;&nbsp;&nbsp;<b>{popupInfo.site_name}</b>
        <hr></hr>
        Description: 
        <hr></hr>
        Latitude: &nbsp;&nbsp;&nbsp;<b>{popupInfo.Latitude}</b>
        <hr></hr>
        Longitude: &nbsp;&nbsp;&nbsp;<b>{popupInfo.Longitude}</b>
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
