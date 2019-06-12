import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 34px;
`;

const TipGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    padding: 17px;
  }
`;

const Subscribe = styled.div`
  margin-top: 20px;
  & p {
    font-weight: 700;
    color: #666;
    line-height: 1.7em;
    letter-spacing: 0.26px;
  }

  & input {
    border: 1px solid rgb(204, 204, 204);
    width: 100%;
    padding: 6px 12px;
    border-radius: 3px;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  & button {
    padding: 14px 35px;
    color: white;
    background-color: #272727;
    border-radius: 2rem;
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Tip = styled.div`
  & h3 {
    font-size: 45px;
    color: #504b4f;
    letter-spacing: 0.02em;
    line-height: 1.21em;
    font-weight: 700;
    font-family: "Raleway";
  }

  & h4 {
    font-size: 14px;
    color: #504b4f;
    letter-spacing: 0.02em;
    line-height: 1.21em;
    font-weight: 700;
    font-family: "Raleway";
  }

  & p {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    margin: 20px 0;
    letter-spacing: 0.02em;
    line-height: 2.2em;
    font-family: "Raleway";
  }
`;

const Tips = () => {
  return (
    <Container>
      <TipGrid>
        <div>
          <Image src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/582c4430725e2588383d9909/1479296059338/Mitch%27s+Daily+English+tips.jpg?format=1000w" />
          <Subscribe>
            <p>
              30페이지 분량의 미치의 10가지 비밀 PDF 파일과 함께 영어공부에
              도움이 되는 자료들을 정기적으로 보내드립니다. (무료!)
            </p>
            <input type="text" placeholder="이메일 주소를 입력해주세요." />
            <button>구독하기</button>
          </Subscribe>
        </div>
        <Tip>
          <h3>Mitch's 10 Tips</h3>
          <h4>유창하게 영어 말하기!</h4>
          <p>
            영어 배우는 걸 도와준다고 약속한 영어 수업들과
            <br />
            영어 책들에 시간과 돈을쓰는 상황에 싫증이
            <br />
            나셨나요? 그래서 이제 막 실망하고 포기하려던
            <br />
            순간인가요?
          </p>
          <p>
            Mitch 선생님은 한국에 15년 동안 살면서 한국
            <br />
            사람들에게 15년 이상 영어를 가르쳐왔습니다.
            <br />
            현재 대학교에서 영어를 가르치는 교수이기도
            <br />
            합니다.
          </p>
          <p>
            따라서 한국 사람들과 영어 원어민과의 차이, 즉<br />
            한국 사람들이 영어를 하는 방식과 영어 원어민이
            <br />
            영어를 하는 방식의 차이에 어떻게 접근해야
            <br />
            하는지 잘 알고 있습니다.
          </p>
          <p>
            여러분 인생에서 처음으로 유창한 영어 배우기를
            <br />
            정말 시작하고 싶으시다면, Mitch’s 10 Tips은
            <br />
            여러분의 시간과, 돈, 그리고 에너지를 아낄
            <br />
            수있도록 도와드리는 출발포인트가 될 것입니다.
          </p>
          <p>
            이메일 주소를 입력하신 후 Free PDF
            <br />
            (Mitch’s 10 Tips)를 다운받으세요! 그리고
            <br />
            Mitch’s 미친영어를 시작하세요! 오늘 !<br />
          </p>
        </Tip>
      </TipGrid>
      <blockquote>
        <span>“</span>영어정복을 위한 10tips는, <br />
        <br />
        영어를 잘 하기 위한 강력한 <br />
        <br />
        비밀들을 아주 쉽게 <br />
        <br />
        설명해 줍니다. <br />
        <br />
        그래서, 완전한 이해를 <br />
        <br />
        바탕으로 자발적이고 <br />
        <br />
        적극적으로 따라갈 수 있게 <br />
        <br />해 주었습니다.”
        <br />
        <br />
        ~은진
      </blockquote>
    </Container>
  );
};

export default Tips;
