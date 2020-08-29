import React from "react";
import "./App.css";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Registrate from "./pages/Registrate";
import Profile from "./pages/Profile";

import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
 
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
              <Route exact path="/rooms/" component={Rooms} />
              <Route exact path="/registrate/" component={Registrate} />
              <Route exact path="/profile/" component={Profile} />


              <Route exact path="/login/" component={Login} />

        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;