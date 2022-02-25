import "./App.css";
import Main from "./Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Box} from "@material-ui/core";

const App = () => {
  return (
    <Box height="100vh">
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
