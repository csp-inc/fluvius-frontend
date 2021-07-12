import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import MapStations from "./components/MapStations"
import {Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import API from "./utils/API"

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center"
  },
}));

function App() {
const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
        <Box md={6} sm={12} xs={12} flexGrow={1}>
          <Map />
        </Box>

        <Box item md={6} sm={12} xs={12} >
          <MapStations />
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center">
        <Box md={6} sm={12} xs={12} flexGrow={1}>
          <MapStations />
        </Box>

        <Box md={6} sm={12} xs={12} flexGrow={1}>
          <MapStations />
        </Box>
      </Box>
    </div>
  );
}

export default App;
