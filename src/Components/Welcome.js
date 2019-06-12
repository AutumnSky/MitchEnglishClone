import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/58b8d0f8db29d626269154d0/1488507594476/mitch1.jpg?format=2500w");
  background-size: cover;
  background-position: right center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 300px;
`;

const DonwloadButton = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 3px;
  padding: 21px 34px;
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: 700;
  font-family: "Raleway", Courier, monospace;
`;

const Image1 = styled.img`
  width: 80%;
`;

const Image2 = styled.img`
  width: 80%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Welcome = () => {
  return (
    <Container>
      <Logo src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/58a3a486e4fcb5cd4ba9d09b/1560122972716/?format=1500w" />
      <DonwloadButton>download free for pc and android!</DonwloadButton>
      <Image1 src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/58be6a38c534a57a90f8cd8b/1489719734368/main.png?format=2500w" />
      <Image2 src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/58be3a4b44024341e95af455/1488861784449/?format=2500w" />
      <SocialContainer>
        <i class="fab fa-facebook-square" />
        <i class="fab fa-twitter-square" />
        <i class="fab fa-youtube-square" />
        <i class="fas fa-music" />
        <i class="fab fa-instagram" />
        <i class="fas fa-envelope-square" />
      </SocialContainer>
    </Container>
  );
};

export default Welcome;
