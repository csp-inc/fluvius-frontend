import React, { useEffect, useState } from "react";
import {Paper, Typography, Box} from "@material-ui/core";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label} from "recharts";
import {makeStyles} from '@material-ui/styles';
import {FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
// import Canvas from "./SatelliteCanvas";
import moment from 'moment';
import LegendSSC from "./LegendSSC";

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
  const data2 = props.popupInfo["predictions"];
  console.log("data2", data2)
  console.log("data", data);
  const allData = props.allData;
  // console.log("allData", allData);
  const popupInfo = props.popupInfo;
  const cameraPic = props.cameraPic;
  const setCameraPic = props.setCameraPic;
  const cirPic = props.cirPic;
  const setCirPic = props.setCirPic;
  const swirPic = props.swirPic;
  const setSwirPic = props.setSwirPic;
  const satellitePic = props.satellitePic;
  const setSatellitePic = props.setSatellitePic;

  const [variable, setVariable] = React.useState('');
  const [legend, setLegend] = React.useState('');

  const handleChange = (event) => {
    setVariable(event.target.value);
  };

  const displayPictures = (event) => {
    let imageObject = allData.find( ({site_no}) => site_no === popupInfo.site_no)["predictions"]
    let imageData = imageObject.find((item) => item['prediction_timestamp'] === event.activeLabel) || '' || undefined

    if (typeof imageData !== 'undefined' && typeof event.activeLabel !== undefined) {
      setCameraPic(imageData["pred_chip"])
    }
  }

  const dateFormatter = item => moment(item).format("MMM DD");
        //<p>{Number.parseFloat(payload[0].value).toFixed(1)} mg/L</p>
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
    return (
      <div className='customTooltip'>
        <p>{payload[0].value} mg/L</p>
        <p>{payload[1].value} mg/L</p>
      </div>
    )
    }

    return null;
  }

  const CustomTooltip2 = ({ active, payload, label }) => {
    // console.log("payload", payload);
    // console.log("label", label);
    if (active && payload && payload.length) {
    return (
      <div className='customTooltip'>
        <p>{Number.parseFloat(payload[0].value).toFixed(1)} m³/s</p>
      </div>
    )
    }

    return null;
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

        <Box flexGrow={0} style={{ minWidth: "550px", backgroundColor: "black", color: "white", borderRadius: "5px", padding: "15px", marginBottom: "10px"  }}>
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
            <XAxis ticks={[1420156800000, 1451777744000, 1483400144000, 1514936144000, 1546472144000, 1578008144000, 1609630544000, 1641166544000]} dataKey="sample_timestamp" domain={['auto', 'auto']} tickFormatter={(timestamp) => moment(timestamp).format('YYYY')} type='number' scale="time" >
              <Label value="Date" offset={-15} position="insideBottom" fill="#ffffff"/>
            </XAxis>
            <YAxis>
              <Label value="SSC (mg/L)" angle={-90} offset={15} position="insideBottomLeft" fill="white"/>
            </YAxis> 

            <Line type="monotone" name="SSC" dataKey="SSC.mg.L" stroke="transparent" fill="#def001"  activeDot={{ r: 8 }}/>

            <Line type="monotone" name="SSC" dataKey="Q.m3.s" stroke="transparent" fill="#00ffff"  activeDot={{ r: 8 }}/>

            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
        </Box>

        <Box flexGrow={0} style={{padding: "0px", backgroundColor: "black", color: "white", borderRadius: "5px", marginLeft: "20px", marginBottom: "10px", }}>
                <br></br>
                <FormControl component="fieldset" style={{color: "white", marginTop: "0px", marginBottom: "10px"}}>
                  <FormLabel component="legend" style={{color: "white"}}>Pirate Ipsum</FormLabel>
                </FormControl>                
                <br></br>
                  <>
                  <img src={cameraPic} alt=" " width="850px" height="425px" />

                    <div style={{marginLeft: "675px", marginTop: "4px"}}>
                      <LegendSSC />
                    </div> 
                  </>
          </Box>


      </Box>
    </>
  );
};

export default FluviusBox;
