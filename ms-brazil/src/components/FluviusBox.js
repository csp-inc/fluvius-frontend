import React, { useState } from "react";
import {Paper, Typography, Box} from "@material-ui/core";
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: "20px",
    height: "730px",
    backgroundColor: "#ffffff"
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
  const popupInfo = props.popupInfo;

  const [variable, setVariable] = React.useState('');

  const handleChange = (event) => {
    setVariable(event.target.value);
  };

  const [cameraPic, setCameraPic] = useState('');
  const [satellitePic, setSatellitePic] = useState('');
  
  const displayPictures = (event) => {
    console.log(popupInfo);
  //   let objectWithPicData = allData.find( ({Date}) => Date === event.activeLabel)
  //   console.log(objectWithPicData)




    let imageData = allData.find( ({site_no}) => site_no === popupInfo.site_no)['img_data'].find(({dateAndTime}) => dateAndTime === event.activeLabel)

    if (imageData === undefined) {
      setCameraPic('');
     } else {
        setCameraPic(imageData["rgb_png_href"])
      }

    if (imageData === undefined) {
      setSatellitePic('')
      } else {
        setSatellitePic(imageData["scl_png_href"])
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
        // style={{borderRight: "150px solid #636466", borderLeft: "150px solid #636466"}}
      >

        <Box style={{ minWidth: "500px" }}>
          <Typography>Daily Timeseries</Typography>
          <ResponsiveContainer width="100%" height={210}>
          <LineChart
            width={580}
            height={220}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            onMouseMove={displayPictures}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date.Time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Q..m3.s." stroke="#def000" fill="#def000" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <Typography>SSC</Typography>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart
            width={580}
            height={220}
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
            <Line type="monotone" dataKey="SSC..mg.L." stroke="#597d35" fill="#597d35" />
          </LineChart>
        </ResponsiveContainer>

        <Typography>RGB</Typography>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart
            width={580}
            height={220}
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
            <Line type="monotone" dataKey="sentinel.2.l2a_R" stroke="#ff0000" fill="#FF0000" />
            <Line type="monotone" dataKey="sentinel.2.l2a_G" stroke="#00ff00" fill="#00ff00" />
            <Line type="monotone" dataKey="sentinel.2.l2a_B" stroke="#0000ff" fill="#0000ff" />

          </LineChart>
        </ResponsiveContainer>
        </Box>


        {/* Form Select and Images */}
          <Box style={{ minWidth: "500px", height: "400px", paddingLeft: "25px" }}>
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
                  <img style={{marginRight: "10px", marginLeft: "5px"}} src={cameraPic} alt="Camera Trap Photo" width="240px" height="240px">
                  </img>
                  <img src={satellitePic} alt="Satellite Image" width="240px" height="240px">
                  </img>
              </Paper>
              <Paper>
                  
              </Paper>
          </Box>
      </Box>
    </>
  );
};

export default FluviusBox;
