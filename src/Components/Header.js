import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 9.5);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: none;
`;

const SLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Raleway", Courier, monospace;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 1rem;
  display: inline-block;
`;

const Header = () => {
  return (
    <Container>
      <SLink>welcome</SLink>
      <SLink>Mitch's 미친영어</SLink>
      <SLink>application</SLink>
      <SLink>Mitch's 10 tips</SLink>
      <SLink>mitch's daily English</SLink>
      <SLink>contact</SLink>
    </Container>
  );
};

export default Header;
