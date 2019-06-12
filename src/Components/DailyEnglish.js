import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 34px;
`;

const Title = styled.h2`
  color: #504b4f;
  font-family: "Railway";
  font-weight: 500;
  font-size: 45px;
  letter-spacing: 0.02em;
`;

const Image = styled.img`
  width: 100%;
`;

const Blog = styled.a`
  color: #337ab7;
  font-size: 45px;
  letter-spacing: 0.02em;
  font-weight: bold;
`;

const DailyEnglish = () => {
  return (
    <Container>
      <Title>Mitch's Daily English</Title>
      <Image src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/58ccb4b9e6f2e19aff7ccd45/1521685426358/?format=2500w" />
      <Blog href="http://www.mitchinenglish.com/dailyenglishblog">
        Click to follow Mitch's Blog!
      </Blog>
    </Container>
  );
};

export default DailyEnglish;
