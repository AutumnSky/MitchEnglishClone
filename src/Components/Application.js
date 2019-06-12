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
  letter-spacing: 0.02rem;
`;

const Application = () => {
  return (
    <Container>
      <Title>Mitch's 미친영어 Apps</Title>
      <img src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/5a14030e24a694af71733ffd/1511260988610/English_get-it-from-MS_InvariantCulture_Default.png?format=750w" />
      - PC버전 다운로드 다운로드 받을 때, Smart screen 차단 메새지가 나오면
      [기타 옵션]을 누르고 [실행]버튼을 눌러 주세요.
      <img src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/5a14021953450a4e607691de/1511260742035/en_badge_web_generic.png?format=750w" />
      -Android 버전 다운로드
      <p>
        영어 원어민 선생님들이 직접, 양방향 강의 코스를 통해 원어민처럼 영어를
        할 수 있도록 여러분이 영어 배우는 것을 도와드립니다. Mitch's 미친영어
        양방향 어플은 모두 3단계로 진행됩니다:
      </p>
      **Mitch's 미친영어 Application:** 기존 내용에 5가지 레슨이 추가되
      었습니다! 오늘 6개월 구독을 신청하시고, 5월 한달 동안 50% DC 혜택을
      받으세요! 할인 쿠폰 코드는 sale 입니다 !
      <img src="https://static1.squarespace.com/static/582578e93e00be283bf5079b/t/598b8d24f9a61e7a3f070ed6/1502317871305/?format=2500w" />
      Upgrade Anytime! 결제한 개월수 단위로 자동결제가 이루어지며, 반품정책에
      위반되지 않으면 언제든지 취소가 가능합니다. 반품정책 : 소비자가 서비스
      결제 후 7일 이내에 청약 철회를 요구하는 경우에는 전액 환불(카드 결제의
      경우, 카드 취소)이 가능하나, 7일 이후에는 환불이 불가하므로이 점에
      유의하시기 바랍니다. “ “미치 선생님은 한국에서 오래 생활하신데다 센스가
      있으셔서 저같은 영어초보가 무엇을 말하려고 하는지 척척 알아차리시고 편안한
      맘으로 즐겁게 배우기에 너무 좋아요!” ~선해
    </Container>
  );
};

export default Application;
