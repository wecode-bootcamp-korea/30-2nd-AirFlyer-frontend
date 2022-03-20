import React from 'react';
import styled from 'styled-components';

//TODO: 추후 백엔드가 보내준 PDF 링크를 src에 넣어줄 것. ticketList를 prop으로 내려 받아서, map으로 반복 렌더링한다
//TODO: 티켓 하나는 복수의 인원 정보를 갖고 있다 (현재는 PDF 하나에 예매자 이름, 인원 수만 적혀있음)

function PdfModal() {
  return (
    <Container>
      <Wrapper>
        <PdfLink href="/pdf/ticket_sample.pdf" target="_blank">
          <Button>
            <Icon alt="blankIcon" src="/images/blank.png" />새 창으로 열기
          </Button>
        </PdfLink>
        <Iframe src="/pdf/ticket_sample.pdf" title="pdf" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Iframe = styled.iframe`
  width: 500px;
  height: 300px;
  margin: 10px 0;
  border: none;
`;

const PdfLink = styled.a`
  text-decoration: none;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  background: white;
  border: none;
  text-align: left;
  color: ${p => p.theme.backgroundColorDarkblue};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export default PdfModal;
