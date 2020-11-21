import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";

const AppContainer = styled.div`
  border: 1px solid darkblue;
  border-radius: 8px;
  margin: 300px auto;
  padding: 25px;
  text-align: center;
  width: 40%;
  background-color: #e2e2e2;
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
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
