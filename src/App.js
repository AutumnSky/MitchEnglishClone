import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";
import Header from "Components/Header";
import Welcome from "Components/Welcome";
import MitchinEnglish from "Components/MitchinEnglish";
import Application from "Components/Application";
import Tips from "Components/Tips";
import DailyEnglish from "Components/DailyEnglish";
import Contact from "Components/Contact";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */

  a {
    text-decoration: none;
  }

  button {
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <GlobalStyle />
          <Header />
          <Welcome />
          <MitchinEnglish />
          <Application />
          <Tips />
          <DailyEnglish />
          <Contact />
        </PageContainer>
      </Router>
    );
  }
}

export default App;
