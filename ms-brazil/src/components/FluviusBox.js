import React, { useEffect, useState } from "react";
import {Paper, Typography, Box} from "@material-ui/core";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label} from "recharts";
import {makeStyles} from '@material-ui/styles';
import {Radio, RadioGroup, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
// import Canvas from "./SatelliteCanvas";
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: "10px",
    backgroundColor: "#000000",
    color: "white"
  },
  formControl: {
    // margin: theme.spacing(3),
    width: '100%',
    marginTop: '5px',
    marginBottom: "10px"
  },
  graphTitle: {
    marginBottom: "20px"
  }
}));

const FluviusBox = (props) => {
  const classes = useStyles();
  const data = props.popupInfo["sample_data"];
  console.log("data", data);
  const allData = props.allData;
  const popupInfo = props.popupInfo;
  const cameraPic = props.cameraPic
  const setCameraPic = props.setCameraPic;
  const cirPic = props.cirPic;
  const setCirPic = props.setCirPic;
  const swirPic = props.swirPic;
  const setSwirPic = props.setSwirPic;
  const satellitePic = props.satellitePic;
  const setSatellitePic = props.setSatellitePic;

  const [variable, setVariable] = React.useState('');
  const [radioValue, setRadioValue] = useState('rgb');

  const handleChange = (event) => {
    setVariable(event.target.value);
  };

  const displayPictures = (event) => {
    let imageObject = allData.find( ({site_no}) => site_no === popupInfo.site_no)["sample_data"]
    console.log("imageObject", imageObject)

    let imageData = imageObject.find((item) => item['sample_timestamp'] === event.activeLabel) || '' || undefined
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

  const dateFormatter = item => moment(item).format("MMM DD");

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        className={classes.containerBox}
      >

        <Box flexGrow={0} style={{ minWidth: "550px", backgroundColor: "black", color: "white", borderRadius: "5px", padding: "15px", marginBottom: "10px"  }}>
          <Typography className={classes.graphTitle}>Discharge at Station {popupInfo.site_name}</Typography>
          <ResponsiveContainer width="100%" height={250} >
          <LineChart
            width={580}
            height={220}
            data={data}
            syncId="anyId"
            margin={{
              top: 0,
              right: 25,
              left: 10,
              bottom: 30,
            }}
            onMouseMove={displayPictures}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sample_timestamp" domain={['auto', 'auto']} tickFormatter={(timestamp) => moment(timestamp).format('MMM YY')} type='number' scale="time" >
              <Label value="Date" offset={-15} position="insideBottom" />
            </XAxis>
            <YAxis >
              <Label value="Discharge (m³/s)" angle={-90} offset={15} position="insideBottomLeft" />
            </YAxis>
            <Line type="monotone" dataKey="Q.m3.s" stroke="transparent" fill="#def001" activeDot={{ r: 8 }} />
            <Tooltip labelFormatter={dateFormatter}/>
          </LineChart>
        </ResponsiveContainer>

        <Typography className={classes.graphTitle}>Suspended Sediment Concentration at Station {popupInfo.site_name}</Typography>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={580}
            height={220}
            data={data}
            syncId="anyId"
            margin={{
              top: 0,
              right: 25,
              left: 10,
              bottom: 20,
            }}
            onMouseMove={displayPictures}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sample_timestamp" domain={['auto', 'auto']} tickFormatter={(timestamp) => moment(timestamp).format('MMM YY')} type='number' scale="time" >
              <Label value="Date" offset={-15} position="insideBottom" style={{color: "white"}}/>
            </XAxis>
            <YAxis>
              <Label value="SSC (mg/L)" angle={-90} offset={15} position="insideBottomLeft" />
            </YAxis> 
            <Line type="monotone" dataKey="SSC.mg.L" stroke="transparent" fill="#def001"  activeDot={{ r: 8 }}/>
            <Tooltip labelFormatter={dateFormatter} />
          </LineChart>
        </ResponsiveContainer>
        </Box>

        <Box flexGrow={0} style={{padding: "15px", backgroundColor: "black", color: "white", borderRadius: "5px", marginLeft: "10px", marginBottom: "10px", }}>
                <br></br>
                <FormControl component="fieldset" style={{color: "white", marginTop: "10px", marginBottom: "10px"}}>
                  <FormLabel component="legend" style={{color: "white"}}>Color Composite</FormLabel>
                  <RadioGroup row aria-label="color composite" name="row-radio-buttons-group" defaultValue="rgb" onChange={handleRadioChange}>
                    <FormControlLabel value="rgb" control={<Radio style={{color: "#def001"}} />} label="Natural Color" />
                    <FormControlLabel value="cir" control={<Radio style={{color: "#def001"}} />} label="Color Infrared" />
                    <FormControlLabel value="swir" control={<Radio style={{color: "#def001"}} />} label="Short-wave Infrared" />
                  </RadioGroup>
                </FormControl>                
                <br></br>
                {radioValue === "" && (
                  <>
                  <br></br>
                  </>
                )}

                {radioValue === "rgb" && (
                  <img src={radioValue === "rgb" ? cameraPic : "Select a station and hover over the graph to see images."} alt="Camera Trap Photo" width="850px" height="425px" /> 
                )}

                {radioValue === "cir" && (
                  <img src={radioValue === "cir" ? cirPic : "Select a station and hover over the graph to see images."} alt="Camera Trap Photo" width="850px" height="425px" />
                )}

                {radioValue === "swir" && (
                  <img src={radioValue === "swir" ? swirPic : "Select a station and hover over the graph to see images."} alt="Camera Trap Photo" width="850px" height="425px" />
                )}
                  {/* <Canvas satellitePic={satellitePic} /> */}


          </Box>


      </Box>
    </>
  );
};

export default FluviusBox;
