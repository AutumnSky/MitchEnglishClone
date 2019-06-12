import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 34px;
`;

const HR = styled.div`
  width: 100%;
  border-top: 1px solid rgba(102, 102, 102, 0.15);
  margin-bottom: 60px;
`;

const Image = styled.img`
  width: 90%;
`;

const Contact = () => {
  return (
    <Container>
      <HR />
      <Image src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/5927c670e58c623ef3a371e4/1495778930445/?format=2500w" />
    </Container>
  );
};

export default Contact;
