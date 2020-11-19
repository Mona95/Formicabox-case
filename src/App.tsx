import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppContainer = styled.div`
  border: 1px solid green;
  border-radius: 8px;
  margin: auto;
  position: relative;
  text-align: center;
  top: 0%;
  width: 20%;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
