import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateDep, updateArr } from 'redux/location';

function LocationList({ list }) {
  const dispatch = useDispatch();
  const modalInfo = useSelector(store => store.modalInfo);
  const depLocation = modalInfo.depLocation;

  const updateLocation = (code, name) => {
    dispatch(depLocation ? updateDep(code, name) : updateArr(code, name));
  };

  return (
    <Container>
      {list.map(item => {
        const { planet_id: id, planet_code: code, planet_name: name } = item;

        return (
          <li key={id}>
            <Button type="button" onClick={() => updateLocation(code, name)}>
              <RocketIcon src="/images/rocket.png" />
              <Code>{code}</Code>
              <span>{name}</span>
            </Button>
          </li>
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  flex: 7;
  overflow: scroll;
  -ms-overflow-style: none;
  // TODO: 추후 스크롤바는 보이되, ㄴ 격자만 없애는 방법 알아보기

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RocketIcon = styled.img`
  width: 10px;
  height: 10px;
`;

const Code = styled.span`
  font-weight: 700;
  margin: 0 7px 0 9px;
`;

const Button = styled.button`
  width: 100%;
  padding: 13px 10px 13px 20px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
`;

export default LocationList;
