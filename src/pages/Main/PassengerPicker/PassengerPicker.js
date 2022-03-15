import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, update } from 'redux/counter';
import { close } from 'redux/isModalOpen';
import { resetInfo } from 'redux/modalInfo';
import { PASSENGER_TYPE_LIST } from './passengerTypeData';

// FIXME: import 순서 여쭤뵈고 고치기
function PassengerPicker() {
  const counter = useSelector(store => store.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const updateNumber = e => {
    dispatch(update(e.target.value));
  };

  const closeModal = () => {
    dispatch(close());
  };

  const resetModalInfo = () => {
    dispatch(resetInfo());
  };

  return (
    <Container>
      <Wrapper>
        {PASSENGER_TYPE_LIST.map(item => (
          <NumberWrap key={item.id}>
            <Age>{item.type}</Age>
            <NumberBox>
              <NumberButton type="button" onClick={onDecrease}>
                -
              </NumberButton>
              <Input
                value={item.type === '성인' ? counter.count : 0}
                onChange={updateNumber}
              />
              <NumberButton type="button" onClick={onIncrease}>
                +
              </NumberButton>
            </NumberBox>
          </NumberWrap>
        ))}
      </Wrapper>
      <ConfirmButton
        type="button"
        onClick={() => {
          closeModal();
          resetModalInfo();
        }}
      >
        확인
      </ConfirmButton>
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
  justify-content: space-between;
  margin: 20px 0 60px;
`;

const NumberWrap = styled.div`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const Age = styled.h3`
  font-weight: 700;
  margin-bottom: 20px;
`;

const NumberBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
`;

const NumberButton = styled(Button)`
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid ${props => props.theme.borderColorDarkgray};
  border-radius: 50%;
  font-size: 20px;
`;

const ConfirmButton = styled(Button)`
  padding: 10px 70px;
  background: ${props => props.theme.backgroundColorDarkblue};
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 40px;
  margin: 0 10px;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export default PassengerPicker;
