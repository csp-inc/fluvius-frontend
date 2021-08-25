import React, { useState } from "react";
import {Paper, Typography, Box} from "@material-ui/core";
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, AreaChart, Area} from "recharts";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: "20px"
  },
  formControl: {
    // margin: theme.spacing(3),
    width: '500px',
    marginTop: '5px',
    marginBottom: "10px"
  },
  photoBox: {
    padding: "10px",
      minWidth: 500,
      minHeight: 575,
  },
}));

const FluviusBox = (props) => {
  const classes = useStyles();
  const data = props.popupInfo["img_data"];
  const allData = props.allData;

  const [variable, setVariable] = React.useState('');

  const handleChange = (event) => {
    setVariable(event.target.value);
  };

  const [cameraPic, setCameraPic] = useState('');
  const [satellitePic, setSatellitePic] = useState('');
  
  const displayPictures = (event) => {
    console.log(event.activeLabel);
    let objectWithPicData = allData.find( ({Date}) => Date === event.activeLabel)
    //This^^ object returns undefined and I'm not sure why
    console.log(objectWithPicData);

    if (objectWithPicData === undefined) {
      setCameraPic('');
     } else {
        setCameraPic(objectWithPicData["rgh_href"])
      }

    if (objectWithPicData === undefined) {
      setSatellitePic('')
     } else {
        setSatellitePic(objectWithPicData["scl_href"])
      }
  }

  
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        className={classes.containerBox}
      >

        <Box style={{ minWidth: "500px", height: "400px" }}>
          <Typography>Daily Timeseries</Typography>
          <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date.Time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Q..m3.s." stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date.Time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="SSC..mg.L." stroke="#82ca9d" fill="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>


        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date.Time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sentinel.2.l2a_R" stroke="#82ca9d" fill="#82ca9d" />
            <Line type="monotone" dataKey="sentinel.2.l2a_G" stroke="#82ca9d" fill="#82ca9d" />
            <Line type="monotone" dataKey="sentinel.2.l2a_B" stroke="#82ca9d" fill="#82ca9d" />

          </LineChart>
        </ResponsiveContainer>
        </Box>


        {/* Form Select and Images */}
          <Box style={{ minWidth: "500px", height: "400px" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Select a variable:</InputLabel>
                        <Select
                            id="selectBox"
                            defaultValue={''}
                            value={variable}
                            onChange={handleChange}
                            label="Select a variable"
                        >
                            <MenuItem value={"Flow"}>Flow</MenuItem>
                            <MenuItem value={"Stage"}>Stage</MenuItem>
                        </Select>
              </FormControl>
              <Paper>
                  <img src={cameraPic} alt="Camera Trap Photo" width="300px" height="300px">
                  </img>
                  <img src={satellitePic} alt="Satellite Image" width="300px" height="300px">
                  </img>
              </Paper>
          </Box>
      </Box>
    </>
  );
};

export default FluviusBox;
