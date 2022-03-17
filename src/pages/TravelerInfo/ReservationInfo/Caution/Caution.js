import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Caution = () => {
  const content = useRef(null);
  const [height, setHeight] = useState(110);
  const toggleCaution = () => {
    setHeight(height === 0 ? content.current.scrollHeight + 30 : 0);
  };

  return (
    <CautionBox>
      <CautionHeader>
        <Container>
          <Title>유의 사항</Title>
          <button onClick={toggleCaution}>
            <img alt="arrow" src="/images/down_arrow.png" />
          </button>
        </Container>
      </CautionHeader>
      <CautionContent height={height} ref={content}>
        <Box>
          <Notion>
            <li type="disc">
              예약 후 성명 변경은 불가하오니 실제 탑승하실 분의 여권에 기재된
              영문 성명으로 정확하게 입력하시기 바랍니다.
            </li>
            <li type="disc">
              입력하신 회원번호로 탑승 마일리지가 적립되며, 마일리지 적립율은
              항공사에 따라 다를 수 있습니다.
            </li>
          </Notion>
        </Box>
      </CautionContent>
    </CautionBox>
  );
};

const CautionBox = styled.div`
  margin: 18px auto;
`;

const CautionHeader = styled.div`
  background-color: #f8f9fc;
  font-weight: bold;
  padding: 14px 0;
  border: 1px solid lightgray;
`;

const Container = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 16px;
    margin-right: 55px;

    cursor: pointer;
    background-color: #f8f9fc;
    color: #000;
    border: none;

    img {
      height: 30px;
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  letter-spacing: 1.2px;
  background-color: #f8f9fc;
  margin-left: 18px;
`;

const CautionContent = styled.div`
  display: flex;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (height > 0 ? 1 : 0)};
  background-color: #fff;
  overflow: hidden;
  transition: all 600ms ease-in-out;
  border: 1px solid lightgray;
`;

const Box = styled.form`
  display: flex;
  height: auto;
  color: black;
  padding: 30px 40px;
`;

const Notion = styled.ul`
  font-size: 15px;
  line-height: 1.8;
`;

export default Caution;
