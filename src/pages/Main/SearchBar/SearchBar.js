import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/modalInfo';

function SearchBar() {
  const dispatch = useDispatch();
  const modalInfo = useSelector(store => store.modalInfo);
  const [inputValue, setInputValue] = useState('');

  const updateModalInfo = obj => {
    dispatch(update(obj));
  };

  const updateInputValue = e => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  return (
    <Container>
      <InputWrap>
        <Input
          placeholder="행성을 입력하세요"
          autoFocus
          value={inputValue}
          onChange={updateInputValue}
        />
        {inputValue !== '' && (
          <ResetButton type="button" onClick={resetInputValue}>
            x
          </ResetButton>
        )}
      </InputWrap>
      <ShowButton
        onClick={() => {
          modalInfo.depSearch
            ? updateModalInfo({
                currentModalInfo: 'depLocation',
                depSearch: false,
                depLocation: true,
              })
            : updateModalInfo({
                currentModalInfo: 'arrLocation',
                arrSearch: false,
                arrLocation: true,
              });
        }}
      >
        <Icon src="/images/pin.png" />
        모든 지역 보기
      </ShowButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const InputWrap = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 150px;
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    padding-left: 10px;
    box-shadow: 5px 10px 20px 0 rgb(35 55 94 /14%);
  }
`;

const ResetButton = styled.button`
  position: absolute;
  top: 9px;
  right: 7px;
  width: 20px;
  height: 20px;
  background: darkgray;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

const ShowButton = styled.button`
  width: 100%;
  border: none;
  background: white;
  text-align: left;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 10px;
`;

export default SearchBar;
