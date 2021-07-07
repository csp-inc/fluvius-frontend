import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
        </Grid>

        <Grid item xs={6} >
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
