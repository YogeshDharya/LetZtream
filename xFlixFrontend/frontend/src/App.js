import './App.css';
import { Route, Switch } from "react-router-dom";
import Videos from "./components/Videos";
import VideoPage from "./components/VideoPage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import ipconfig from "./ipConfig.json";
 
export const config = { 
  endpoint: `https://37aa0518-677b-4b44-9995-689f4bfe0700.mock.pstmn.io`//Works fine but on hitting any video --> BUGS  
};  
//TODO  
//Place ur postman mock server link as value of the above endpoint property of config const variable 
//It will seem fine on the landing page but 
//As soon as u will hit any video of ur choice 
//U will see a bunch of errors on the display itself apart from the console. It worked for a different mock server 
//but few videos did not have thumbnails which looked a lot ugly for the landing page 
//So kindly try to do something about this . Thank u so much 
function App() {
  return (
    <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Switch>
        <Route exact path="/"><Videos/></Route>
        <Route exact path="/videopage/:id" ><VideoPage/></Route>
      </Switch>
     </LocalizationProvider>
    </div>
  );
}

export default App;