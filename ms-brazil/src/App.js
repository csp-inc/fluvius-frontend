import "./App.css";
import Main from "./Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Box} from "@material-ui/core";

const App = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexGrow={1}>
        <Box height="100%">
	  <Navbar />
	</Box>
      </Box>
      <Box flexGrow={18}>
        <Box height="100%">
	  <Main />
	</Box>
      </Box>
      <Box flexGrow={1}>
        <Box display="flex" justifyContent="right" alignItems="flex-end" height="100%">
	    <Footer />
	</Box>
      </Box>
    </Box>
  );
}

export default App;
