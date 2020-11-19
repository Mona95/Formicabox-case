import React from "react";
import Login from "./components/Login/Login";
import styled from "styled-components";

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
      <Login />
    </AppContainer>
  );
};

export default App;
