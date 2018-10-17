import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./components/Appointment";
import Chat from "./components/Chat";
import Credentials from "./components/Credentials";
import Diagnostics from "./components/Diagnostics";
import Emergency from "./components/Emergency";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Roadside from "./components/Roadside";
import Settings from "./components/Settings";

class App extends Component {
  render() {
    return(
      <Router>
      <div>
        <div>
          <Header/>
        </div>
        <div className="content">
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
        <div>
          <Footer/>
        </div>
      </div>
  </Router>
    )
  }
}
export default App;