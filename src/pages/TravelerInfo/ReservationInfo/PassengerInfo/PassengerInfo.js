import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const PassengerInfo = props => {
  const content = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleAccordion = () => {
    setHeight(height === 0 ? content.current.scrollHeight + 30 : 0);
  };

  const validateLast_name = last_name => {
    const last_namereg = /^[가-힣]+$/;
    const isLast_nameValid = last_namereg.test(last_name);
    return isLast_nameValid;
  };

  const validateFisrt_name = first_name => {
    const first_namereg = /^[가-힣]+$/;
    const isFirst_nameValid = first_namereg.test(first_name);
    return isFirst_nameValid;
  };

  const validateEmail = email => {
    const emailreg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const isEmailValid = emailreg.test(email);
    return isEmailValid;
  };

  const validateBirth = birth => {
    const birthreg =
      /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

    const isBirthValid = birthreg.test(birth);
    return isBirthValid;
  };

  const checkInfo = () => {
    const { last_name, first_name, gender, birth, email } = props.list;
    if (last_name === '' || !validateLast_name(last_name)) {
      alert('성을 확인해주세요');
    } else if (first_name === '' || !validateFisrt_name(first_name)) {
      alert('이름을 확인해주세요');
    } else if (gender === '') {
      alert('성별을 확인해주세요');
    } else if (birth === '' || !validateBirth(birth)) {
      alert('생년월일을 확인해주세요');
    } else if (email === '' || !validateEmail(email)) {
      alert('이메일을 확인해주세요');
    } else {
      setHeight(0);
    }
  };

  return (
    <Container>
      <PassengerInfoHeader>
        <Header>
          <Title>승객</Title>
          <button onClick={toggleAccordion}>
            <img alt="arrow" src="/images/down_arrow_white.png" />
          </button>
        </Header>
      </PassengerInfoHeader>
      <InfoContent height={height} ref={content}>
        <InputWrapper>
          <PassengerName>
            <LastName>
              승객 성<Required>필수 입력</Required>
              <Input
                type="text"
                data-row="last_name"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.last_name}
                placeholder="예)김"
              />
            </LastName>
            <FirstName>
              승객 이름<Required>필수 입력</Required>
              <Input
                type="text"
                data-row="first_name"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.first_name}
                placeholder="예)근성"
              />
            </FirstName>
          </PassengerName>
          <AddInfo>
            <Gender>
              성별<Required>필수 입력</Required>
              <BtnRadio>
                <Checkbox
                  id="male"
                  type="radio"
                  data-row="gender"
                  onChange={props.handlePassengerInfo}
                  name={props.id}
                  value="남자"
                />
                <GenderFont htmlFor="male">남자</GenderFont>
                <Checkbox
                  id="female"
                  type="radio"
                  data-row="gender"
                  onChange={props.handlePassengerInfo}
                  name={props.id}
                  value="여자"
                />
                <GenderFont htmlFor="female">여자</GenderFont>
              </BtnRadio>
            </Gender>
            <Birth>
              생년월일 (YYYY-MM-DD) <Required>필수 입력</Required>
              <Input
                type="text"
                data-row="birth"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.birth}
              />
            </Birth>
          </AddInfo>
          <NumText htmlFor="phone">
            <Email>
              이메일<Required>필수 입력</Required>
              <Input
                type="text"
                data-row="email"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.email}
              />
            </Email>
          </NumText>
          <SummitBox>
            <button type="button" onClick={checkInfo}>
              확인
            </button>
          </SummitBox>
        </InputWrapper>
      </InfoContent>
    </Container>
  );
};

const Container = styled.div`
  margin: 18px auto;
`;

const PassengerInfoHeader = styled.div`
  background-color: navy;
  font-weight: bold;
  padding: 14px 0;
`;

const Header = styled.div`
  width: 100%;
  max-width: 930px;
  height: 30px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 20px;
    margin-right: 20px;
    cursor: pointer;
    background-color: navy;
    color: #fff;
    border: none;

    img {
      height: 30px;
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  letter-spacing: 1.2px;
  color: #fff;
`;

const InfoContent = styled.div`
  display: flex;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (height > 0 ? 1 : 0)};
  background-color: #fff;
  overflow: hidden;
  transition: all 600ms ease-in-out;
  border: 1px solid lightgray;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  color: black;
  padding: 30px 40px;

  p {
    font-size: 15px;
    line-height: 1.6;
  }
`;

const PassengerName = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LastName = styled.div`
  width: 50%;
  padding-top: 10px;
  margin: 10px 0;
  color: gray;
`;

const FirstName = styled.div`
  width: 50%;
  margin: 10px 0;
  padding-top: 10px;
  color: gray;
`;

const Required = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  position: relative;
  width: 0.5rem;
  font-size: inherit;
  vertical-align: bottom;
  top: -10px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: #de001b;
  }
`;

const Input = styled.input`
  width: 410px;
  height: 48px;
  margin-top: 10px;
  border: 0;
  border-bottom: 1px solid #00256c;

  &:hover {
    padding-left: 10px;
    transition: all 100ms;
    border: rgb(87, 124, 192) 1px solid;
    border-radius: 00.2rem;
  }
`;
const AddInfo = styled.label`
  display: flex;
  flex-wrap: row wrap;
  justify-content: space-between;
`;

const Gender = styled.div`
  width: 50%;
  padding-top: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: gray;
`;

const BtnRadio = styled.div`
  margin-top: 20px;
`;

const Checkbox = styled.input`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  font-size: 15px;
  cursor: pointer;

  :checked + label {
    color: #3490e5;
  }
`;

const GenderFont = styled.label`
  margin-right: 15px;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`;

const Birth = styled.div`
  width: 50%;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
  color: gray;
`;

const NumText = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Email = styled.div`
  width: 50%;
  margin: 10px 0;
  padding-top: 10px;
  color: gray;
`;

const SummitBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: inline-block;
    width: 150px;
    height: 45px;
    margin: 10px 50px 0 0;
    border: 0;
    border-radius: 0.2rem;
    background-color: #0064de;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    appearance: none;
    font-size: 16px;
  }
`;
export default PassengerInfo;
