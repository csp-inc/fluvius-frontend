import React from "react";
import { InputLabel, FormControl, Select, Paper, Typography, MenuItem } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formControlPaper: {
    backgroundColor: "#000000"
  },  
  formControl: {
      margin: theme.spacing(3),
      width: '490px',
      marginTop: '45px',
      marginLeft: '25px',
      marginRight: '25px',
      marginBottom: '-15px',
      backgroundColor: "#000",
      color: "#fff"
    },
    darkLabel: {
      backgroundColor: "#000",
      color: '#fff',
    },
    darkUnderline: {
      '&:hover:not($disabled):before': {
        backgroundColor: '#000', 
        color: "#fff"   
      },
    },
    darkInkbar: {
      '&:after': {
        backgroundColor: '#000',
        color: "#fff"    
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

const MapStationsPT = (props) => {
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
      <FormControl color="primary" variant="filled" FormControlClasses={{ focused: classes.darkLabel }} className={classes.formControl}>
        <InputLabel style={{color: "black"}} htmlFor="outlined-age-native-simple">Selecione uma esta????o:</InputLabel>
            <Select
                id="selectBox"
                defaultValue={''}
                value={selectValue}
                onChange={handleChange}
                label="Selecione uma esta????o"
                style={{backgroundColor: "white"}}
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
              Nome: &nbsp;&nbsp;&nbsp;<b>{popupInfo.site_name}</b>
              <hr></hr>
              Latitude: &nbsp;&nbsp;&nbsp;<b>{popupInfo.Latitude}</b>
              <hr></hr>
              Longitude: &nbsp;&nbsp;&nbsp;<b>{popupInfo.Longitude}</b>
              <hr></hr>
              Cidade Mais Pr??xima: &nbsp;&nbsp;&nbsp;<b>{popupInfo.nearest_city}</b>
              <hr></hr>
              Rio Mais Pr??ximo: &nbsp;&nbsp;&nbsp;<b>{popupInfo.nearest_river}</b>
              <hr></hr>
              Dono da esta????o:  &nbsp;&nbsp;&nbsp;<b>{popupInfo.region}</b>
              <hr></hr>
          </Typography>
      </Paper>

      </Paper>
    </>
  );
};

export default MapStationsPT;
