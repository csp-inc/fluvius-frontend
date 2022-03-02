import React from "react";
import {Typography, Box} from "@material-ui/core";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label} from "recharts";
import {makeStyles} from '@material-ui/styles';
import moment from 'moment';
import LegendSSC from "./LegendSSC";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: "10px",
    backgroundColor: "#000000",
    color: "white"
  },
  graphTitle: {
    marginBottom: "20px",
  }
}));

const FluviusBox = (props) => {
  const classes = useStyles();
  const data = props.popupInfo["sample_data"];
  const data2 = props.popupInfo["predictions"];
  console.log("data2", data2)
  console.log("data", data);
  const popupInfo = props.popupInfo;
  const cameraPic = props.cameraPic;
  const setCameraPic = props.setCameraPic;

  const [variable, setVariable] = React.useState('');

  setCameraPic(data2[0]["pred_chip"])

  const displayPictures = (event) => {
    let imageData = data2.find((item) => item['timestamp'] === event.activeLabel) || '' || undefined

    if (typeof imageData !== 'undefined' && typeof event.activeLabel !== undefined) {
      setCameraPic(imageData["pred_chip"])
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
    return (
      <div className='customTooltip'>
        <p>{Number.parseFloat(payload[0].value).toFixed(1)} mg/L</p>
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

        <Box flexGrow={0} style={{ minWidth: "950px", backgroundColor: "black", color: "white", borderRadius: "5px", padding: "15px", marginBottom: "10px"  }}>
        <Typography className={classes.graphTitle}>Suspended Sediment Concentration at Station {popupInfo.site_name}</Typography>
        <ResponsiveContainer width="97%" height={250} marginRight="22px">
          <LineChart
            width={980}
            height={220}
	    data={data2}
            syncId="anyId"
            margin={{
              top: 0,
              right: 5,
              left: 0,
              bottom: 20,
            }}
            onMouseMove={displayPictures}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis ticks={[1420156800000, 1451777744000, 1483400144000, 1514936144000, 1546472144000, 1578008144000, 1609630544000, 1641166544000]} dataKey="timestamp" domain={['auto', 'auto']} tickFormatter={(timestamp) => moment(timestamp).format('YYYY')} type='number' scale="time" >
              <Label value="Date" offset={-15} position="insideBottom" fill="#ffffff"/>
            </XAxis>
            <YAxis domain={[0, 200]}>
              <Label value="SSC (mg/L)" angle={-90} style={{ textAnchor: 'middle' }} position="insideLeft" fill="white"/>
            </YAxis> 

            <Line type="monotone" name="SSC" dataKey="SSC.mg.L" stroke="transparent" fill="#def001"  activeDot={{ r: 8 }}/>
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
        </Box>

        <Box flexGrow={0} style={{padding: "0px", backgroundColor: "black", borderRadius: "5px", marginLeft: "20px", marginBottom: "10px", }}>
                <br></br>
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
