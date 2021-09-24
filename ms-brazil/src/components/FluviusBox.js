import React, { useEffect, useState } from "react";
import {Paper, Typography, Box} from "@material-ui/core";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import {makeStyles} from '@material-ui/styles';
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
  const [satellitePic, setSatellitePic] = useState('');
  
  const displayPictures = (event) => {
    let imageObject = allData.find( ({site_no}) => site_no === popupInfo.site_no)["sample_data"]
    console.log("imageObject", imageObject)

    let imageData = imageObject.find((item) => item['sample_date'] === event.activeLabel) || '' || undefined
    console.log("imageData", imageData)


    if (typeof imageData !== 'undefined' && typeof event.activeLabel !== undefined) {
      setCameraPic(imageData["rgb_water_chip_href"])
      setSatellitePic(imageData["scl_png_href"])
    }
   
  }

  useEffect(() => {
    
  }, [cameraPic, satellitePic])

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
          <Typography>Daily Timeseries</Typography>
          <ResponsiveContainer width="100%" height={235}>
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
            <XAxis dataKey="sample_date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Q.m3.s" stroke="transparent" fill="#004983" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <Typography>SSC</Typography>
        <ResponsiveContainer width="100%" height={235}>
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
            <XAxis dataKey="sample_date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="SSC.mg.L" stroke="transparent" fill="#597d35" />
          </LineChart>
        </ResponsiveContainer>

        {/* <Typography>RGB</Typography>
        <ResponsiveContainer width="100%" height={235}>
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
            <Line type="monotone" dataKey="sentinel.2.l2a_R" stroke="#ff0000" fill="#FF0000" />
            <Line type="monotone" dataKey="sentinel.2.l2a_G" stroke="#00ff00" fill="#00ff00" />
            <Line type="monotone" dataKey="sentinel.2.l2a_B" stroke="#0000ff" fill="#0000ff" />

          </LineChart>
        </ResponsiveContainer> */}
        </Box>


        {/* Form Select and Images */}
          <Box flexGrow={0} style={{ minWidth: "500px", paddingLeft: "50px" }}>

              <Paper>
                <br></br>
                <body>Satellite Images:</body>
                <br></br>
              </Paper>

              <Paper>
                  <img style={{marginRight: "10px"}} src={cameraPic} alt="Camera Trap Photo" width="900px" height="450px">
                  </img>
                  {/* <Canvas satellitePic={satellitePic} /> */}

              </Paper>

          </Box>


      </Box>
    </>
  );
};

export default FluviusBox;
