import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment";
import Chat from "./pages/Chat/Chat";
import Credentials from "./pages/Credentials/Credentials";
import Diagnostics from "./pages/Diagnostics/Diagnostics";
import Emergency from "./pages/Emergency/Emergency";
import Feedback from "./pages/Feedback/Feedback";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Roadside from "./pages/Roadside/Roadside";
import Settings from "./pages/Settings/Settings";

const App = () =>  (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/appointment" component={Appointment}/>
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/credentials" component={Credentials}/>
        <Route exact path="/diagnostics" component={Diagnostics}/>
        <Route exact path="/emergency" component={Emergency}/>
        <Route exact path="/feedback" component={Feedback}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/roadside" component={Roadside}/>
        <Route exact path="/settings" component={Settings}/>
      </Switch>
    </div>
  </Router>
);

export default App;