import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Welcome from "Components/Welcome";
import MitchinEnglish from "Components/MitchinEnglish";
import Application from "Components/Application";
import Tips from "Components/Tips";
import DailyEnglish from "Components/DailyEnglish";
import Contact from "Components/Contact";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  * {
    box-sizing: border-box;
    font-family: "Raleway";
  }
  
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  input {
    border: none;
    &:focus {
      outline: none;
    }
  }

  blockquote {
    padding: 34px;
    color: #87847d;
    line-height: 1em;
    text-align: center;
    font-weight: 200;
    font-size: 17.5px;
    font-style: italic;
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
          <Footer />
        </PageContainer>
      </Router>
    );
  }
}

export default App;
