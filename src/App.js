import "./App.css";
import React from "react";

import { Switch, Route } from "react-router-dom";
import { Signup } from "./components/Signin";
import { Login } from "./components/Login";
import { Container } from "@material-ui/core";
import ListOfUsers from "./components/ListOFUsers";
function App() {
  return (
    <Container maxWidth="md">
      <div className="App">
        <header>
          <h1 style={{ borderBottom: "5px solid blue" }}> User List</h1>
        </header>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/listofusers" exact component={ListOfUsers} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
