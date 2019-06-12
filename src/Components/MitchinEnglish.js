import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const SIFrame = styled.iframe`
  width: 100%;
  height: 50vw;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const MitchinEnglish = () => {
  return (
    <Container>
      <SIFrame
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7-294VPXvEg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <SIFrame
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L0FyJR0cp6Y"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Container>
  );
};

export default MitchinEnglish;
