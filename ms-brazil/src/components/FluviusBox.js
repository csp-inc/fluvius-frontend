import React, { useEffect, useState } from "react";
import {Paper, Typography, Box} from "@material-ui/core";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from "recharts";
import {makeStyles} from '@material-ui/styles';
import {Radio, RadioGroup, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
import Canvas from "./SatelliteCanvas";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: "20px",
    height: "730px",
    backgroundColor: "#ffffff"
  },
  formControl: {
    // margin: theme.spacing(3),
    width: '100%',
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
  const data = props.popupInfo["sample_data"];
  const allData = props.allData;
  const popupInfo = props.popupInfo;

  const [variable, setVariable] = React.useState('');

  const handleChange = (event) => {
    setVariable(event.target.value);
  };

  const [cameraPic, setCameraPic] = useState('');
  const [cirPic, setCirPic] = useState('');
  const [swirPic, setSwirPic] = useState('');
  const [satellitePic, setSatellitePic] = useState('');
  const [radioValue, setRadioValue] = useState('')
  
  const displayPictures = (event) => {
    let imageObject = allData.find( ({site_no}) => site_no === popupInfo.site_no)["sample_data"]
    console.log("imageObject", imageObject)

    let imageData = imageObject.find((item) => item['sample_date'] === event.activeLabel) || '' || undefined
    console.log("imageData", imageData)

    if (typeof imageData !== 'undefined' && typeof event.activeLabel !== undefined) {
      setCameraPic(imageData["rgb_water_chip_href"])
      setCirPic(imageData["cir_water_chip_href"])
      setSwirPic(imageData["swir_water_chip_href"])
      setSatellitePic(imageData["scl_png_href"])
    }
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  useEffect(() => {
    
  }, [cameraPic, cirPic, swirPic, satellitePic])

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        className={classes.containerBox}
      >

        <Box flexGrow={0} style={{ minWidth: "550px" }}>
          <Typography>Discharge at Station {popupInfo.site_name}</Typography>
          <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={580}
            height={220}
            data={data}
            syncId="anyId"
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 20,
            }}
            onMouseMove={displayPictures}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sample_date" >
              <Label value="Date" offset={-8} position="insideBottom" />
            </XAxis>
            <YAxis >
              <Label value="Discharge (m³/s)" angle={-90} offset={15} position="insideBottomLeft" />
            </YAxis>
            <Tooltip />
            <Line type="monotone" dataKey="Q.m3.s" stroke="transparent" fill="#004983" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <Typography>Suspended Sediment Concentration at Station {popupInfo.site_name}</Typography>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={580}
            height={220}
            data={data}
            syncId="anyId"
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 20,
            }}
            onMouseMove={displayPictures}

          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sample_date" >
              <Label value="Date" offset={-8} position="insideBottom" />
            </XAxis>
            <YAxis>
            <Label value="SSC (mg/L)" angle={-90} offset={15} position="insideBottomLeft" />

              </YAxis> 
            <Tooltip />
            <Line type="monotone" dataKey="SSC.mg.L" stroke="transparent" fill="#597d35" />
          </LineChart>
        </ResponsiveContainer>
        </Box>


        {/* Form Select and Images */}
          <Box flexGrow={0} style={{ minWidth: "500px", paddingLeft: "50px" }}>

              <Paper elevation="0">
                <br></br>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Color Composite</FormLabel>
                  <RadioGroup row aria-label="color composite" name="row-radio-buttons-group" onChange={handleRadioChange}>
                    <FormControlLabel value="rgb" control={<Radio />} label="Natural Color" />
                    <FormControlLabel value="cir" control={<Radio />} label="Color Infrared" />
                    <FormControlLabel value="swir" control={<Radio />} label="Short-wave Infrared" />
                  </RadioGroup>
                </FormControl>                
                <br></br>
                {radioValue === "rgb" && (
                  <img style={{marginRight: "10px"}} src={radioValue === "rgb" ? cameraPic : "Select a station and hover over the graph to see images."} alt="Camera Trap Photo" width="900px" height="450px" /> 
                )}

                {radioValue === "cir" && (
                  <img style={{marginRight: "10px"}} src={radioValue === "cir" ? cirPic : "Select a station and hover over the graph to see images."} alt="Camera Trap Photo" width="900px" height="450px" />
                )}

                {radioValue === "swir" && (
                  <img style={{marginRight: "10px"}} src={radioValue === "swir" ? swirPic : "Select a station and hover over the graph to see images."} alt="Camera Trap Photo" width="900px" height="450px" />
                )}
                  {/* <Canvas satellitePic={satellitePic} /> */}

              </Paper>

          </Box>


      </Box>
    </>
  );
};

export default FluviusBox;
