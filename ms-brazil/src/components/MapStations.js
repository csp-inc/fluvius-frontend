import React, {useState} from "react";
import { InputLabel, FormControl, Select, Paper, Typography, MenuItem } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formControlPaper: {
    backgroundColor: "#f2f2f2"
  },  
  formControl: {
      margin: theme.spacing(3),
      width: '490px',
      marginTop: '35px',
      marginLeft: '25px',
      marginRight: '25px',
    },
    darkLabel: {
      color: '#0f0',
    },
    darkUnderline: {
      '&:hover:not($disabled):before': {
        backgroundColor: '#040',    
      },
    },
    darkInkbar: {
      '&:after': {
        backgroundColor: '#0f0',    
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    box: {
        minWidth: 500,
        minHeight: 575,
        backgroundColor: "black"
    },
    stationDetails: {
        width: "430px",
        marginLeft: "30px",
        color: "white",
        fontWeight: 800,
        padding: "25px",
        backgroundColor: "black"
  }
  }));

const MapStations = (props) => {
    const classes = useStyles();
    const {allData, popupInfo, setPopupInfo, selectValue, setSelectValue, onSelectStation} = props;

  async function loadAllData(stationName) {
      return setSelectValue(stationName); 
  }
    
  const handleChange = (event) => {
    event.preventDefault();
    loadAllData(event.target.value);
    console.log("event.target.value", console.log(event.target.value))
    setPopupInfo(allData.find( ({site_name}) => site_name === event.target.value))
    setSelectValue(allData.find( ({site_name}) => site_name === event.target.value))
    onSelectStation(allData.find( ({site_name}) => site_name === event.target.value))
  };

  return (
    <>
    <Paper elevation={3} className={classes.box}>
      <Paper className={classes.formControlPaper}>
      <FormControl variant="outlined" FormControlClasses={{ focused: classes.darkLabel }} className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select a station:</InputLabel>
            <Select
                id="selectBox"
                defaultValue={''}
                value={selectValue}
                onChange={handleChange}
                label="Select a station"
            >
              {allData.map((station, index) => (
                 <MenuItem key={index} value={station.site_name}>{station.site_name}</MenuItem>
              ))}
            </Select>
      </FormControl>
      </Paper>

      <Paper className={classes.stationDetails} elevation={0}>
        <br></br>
          <Typography variant="body1">
              Name: &nbsp;&nbsp;&nbsp;<b>{popupInfo.site_name}</b>
              <hr></hr>
              Description: 
              <hr></hr>
              Latitude: &nbsp;&nbsp;&nbsp;<b>{popupInfo.Latitude}</b>
              <hr></hr>
              Longitude: &nbsp;&nbsp;&nbsp;<b>{popupInfo.Longitude}</b>
              <hr></hr>
              Station Owner:  &nbsp;&nbsp;&nbsp;<b>{popupInfo.region}</b>
              <hr></hr>
          </Typography>
          <br></br>
          <Typography variant="body1">
            <br></br>
                <b>Project Overview:</b>
                <p>Project Fluvius uses satellite images and AI to monitor the health of Amazon and U.S. rivers by enabling near real-time prediction of suspended sediment concentration. </p>
          </Typography>
      </Paper>

      </Paper>
    </>
  );
};

export default MapStations;
