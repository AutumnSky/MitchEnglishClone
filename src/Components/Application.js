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
  font-weight: 400;
  font-size: 45px;
  letter-spacing: 0.02rem;
  padding: 17px;
`;

const Download = styled.div`
  width: 277px;
  padding: 17px;

  & img {
    width: 100%;
    border-radius: 10px;
  }

  & h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 500;
    color: #666;
  }

  & p {
    width: 100%;
    font-size: 12px;
    font-weight: 200;
    color: #666;
  }
`;

const Description = styled.p`
  font-weight: 400;
  color: #666;
  font-size: 14px;
  letter-spacing: 0.26px;
  line-height: 1.7em;
  text-align: center;
  line-height: 35px;
  margin-top: 30px;
`;

const HR = styled.div`
  width: 90%;
  border-top: 1px solid rgba(102, 102, 102, 0.15);
  margin: 50px 0;
`;

const Coupon = styled.p`
  padding-bottom: 34px;
  padding-top: 17px;
  text-align: center;
  margin-bottom: 17px;

  & h3 {
    font-size: 20px;
    color: #666;
    font-weight: 600;
    letter-spacing: 0.26px;
    margin-bottom: 10px;
  }

  & p {
    color: #666;
    letter-spacing: 0.26px;
    line-height: 1.7em;
  }

  & strong {
    font-weight: 700;
  }
`;

const PriceImage = styled.img`
  width: 100%;
`;

const Upgrade = styled.div`
  width: 100%;
  padding: 18px 0;

  & h3 {
    color: #666;
    font-size: 11.55px;
    font-weight: 700;
    letter-spacing: 0.26px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 11.55px;
    font-weight: 400;
    letter-spacing: 0.26px;
    margin-bottom: 10px;
    line-height: 20px;
  }
`;

const Application = () => {
  return (
    <Container>
      <Title>Mitch's 미친영어 Apps</Title>
      <Download>
        <a href="https://s3.ap-northeast-2.amazonaws.com/mitchin/Releases/Setup.exe">
          <img
            src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/5a14030e24a694af71733ffd/1511260988610/English_get-it-from-MS_InvariantCulture_Default.png?format=750w"
            alt=""
          />
        </a>
        <h4>- PC버전 다운로드</h4>
        <p>
          다운로드 받을 때, Smart screen 차단 메새지가 나오면 [기타 옵션]을
          누르고 [실행]버튼을 눌러 주세요.
        </p>
      </Download>
      <Download>
        <a href="https://play.google.com/store/apps/details?id=tangibleidea.net.mitchinenglish_android">
          <img
            src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/5a14021953450a4e607691de/1511260742035/en_badge_web_generic.png?format=750w"
            alt=""
          />
        </a>
        <h4>- Android 버전 다운로드</h4>
      </Download>
      <Description>
        영어 원어민 선생님들이 직접, 양방향 강의
        <br />
        코스를 통해 원어민처럼 영어를 할 수 있도록
        <br />
        여러분이 영어 배우는 것을 도와드립니다.
        <br />
        Mitch's 미친영어 양방향 어플은
        <br />
        모두 3단계로 진행됩니다.
      </Description>
      <HR />
      <Coupon>
        <h3>**Mitch's 미친영어 Application:** </h3>
        <p>
          기존 내용에 5가지 레슨이 추가되 었습니다! 오늘{" "}
          <strong>6개월 구독</strong>을 신청하시고,
          <br /> 5월 한달 동안 <strong>50% DC</strong> 혜택을 받으세요!
          <br /> 할인 쿠폰 코드는
          <strong>sale</strong> 입니다 !
        </p>
      </Coupon>
      <PriceImage src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/598b8d24f9a61e7a3f070ed6/1502317871305/?format=2500w" />
      <Upgrade>
        <h3>Upgrade Anytime!</h3>
        <p>
          결제한 개월수 단위로 자동결제가 이루어지며, 반품정책에 위반되지 않으면
          언제든지 취소가 가능합니다. 반품정책 :<br />
          소비자가 서비스 결제 후 7일 이내에 청약 철회를 요구하는 경우에는 전액
          환불(카드 결제의 경우, 카드 취소)이 가능하나, 7일 이후에는 환불이
          불가하므로이 점에 유의하시기 바랍니다.
        </p>
      </Upgrade>
      <blockquote>
        <span>“</span>미치 선생님은 한국에서
        <br />
        <br />
        오래 생활하신데다 센스가 <br />
        <br />
        있으셔서 저같은 영어초보가 <br />
        <br />
        무엇을 말하려고 하는지 척척 <br />
        <br />
        알아차리시고 편안한 맘으로 <br />
        <br />
        즐겁게 배우기에 너무 좋아요!”
        <br />
        <br />
        ~선해
      </blockquote>
    </Container>
  );
};

export default Application;
