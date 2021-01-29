import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import "./App.css";
import HomeScreen from "./HomeScreen";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
          <HomeScreen />
          </Route>
        </Switch>
    </Router>


    </div>
  );
}
// https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/ed5e04cf-cf4a-45ff-a715-533f6b6f1b0c/CA-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg
export default App;
