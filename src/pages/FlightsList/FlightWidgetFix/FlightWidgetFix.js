import React from 'react';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout.js';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function FlightWidgetFix() {
  const depLocation = useSelector(store => store.location.depLocation);
  const arrLocation = useSelector(store => store.location.arrLocation);
  const date = useSelector(store => store.date);

  // const selectedDay = date.state[0].startDate.getDate();
  // console.log(selectedDay);
  // TODO: 쿼리스트링 어떻게 만들지 selectedDay를 이용해서 생각해보기
  // TODO: 지금 아이디어: 우선 처음으로 선택한날짜를 받아서 그 날짜 쿼리로  data 를 요청
  // TODO: 클릭버튼으로 data+1 로 수정하는 function 그 쿼리가 바뀔때마다 뿌려지는 값이 바뀐다.

  return (
    <FlightWidget>
      <WrapperLayout>
        <FlightWidgetAligner>
          <LocationBox>
            <LocationButton type="button">
              <Code>{depLocation.planet_code}</Code>
            </LocationButton>
            <ChangeButton>
              <ChangeIcon alt="changeIcon" src="/images/change_active.png" />
            </ChangeButton>
            <LocationButton type="button">
              <Code>{arrLocation.planet_code}</Code>
            </LocationButton>
          </LocationBox>
          <CategorySpan>
            <></>
          </CategorySpan>
          <DateBox>
            <DateButton type="button">
              <DateIcon alt="dataIcon" src="/images/calendar.png" />
              {date.state[0].startDate.toLocaleDateString()}~
              {date.state[0].endDate.toLocaleDateString()}
            </DateButton>
          </DateBox>
          <CategorySpan>
            <></>
          </CategorySpan>
          <NumberOfUsers>
            <UserIcon alt="userIcon" src="/images/user.png" />
            성인 1명
          </NumberOfUsers>
          <SearchButton>
            <SpaceshipIcon alt="logo" src="/images/saturn.png" />
          </SearchButton>
        </FlightWidgetAligner>
      </WrapperLayout>
    </FlightWidget>
  );
}

export default FlightWidgetFix;

// Widget box
const FlightWidget = styled.div`
  position: relative;
  width: 100%;
  height: 86px;
  margin: 0 auto;
  background-color: #c7f3ff;
`;

const FlightWidgetAligner = styled.div`
  position: relative;
  left: 35px;
  display: flex;
  width: 1300px;
  height: 78px;
  margin: 20px 0 0 0;
  padding: 0 0 0 6px;
  box-shadow: rgb(0, 24, 72, 0.18) 4px 10px 20px;
  background-color: #ffffff;
  z-index: 1;
`;

const LocationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const LocationButton = styled.button`
  width: 65px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Code = styled.div`
  padding: 5px 0;
  font-size: 25px;
  font-weight: 700;
  &:hover {
    border: 1px solid blue;
  }
`;

const ChangeButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 7px;
  margin: 0 12px;
  background: none;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;

const ChangeIcon = styled.img`
  width: 100%;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;

const DateIcon = styled.img`
  position: relative;
  top: -1px;
  width: 16px;
  height: 16px;
  margin-right: 15px;
`;

const NumberOfUsers = styled.button`
  position: relative;
  top: 28px;
  display: flex;
  align-items: center;
  height: 25px;
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;

const UserIcon = styled.img`
  position: relative;
  top: -2px;
  width: 20px;
  height: 20px;
  margin-right: 13px;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 450px;
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const SpaceshipIcon = styled.img`
  position: relative;
  left: 30px;
  width: 50px;
  height: 50px;
  &:hover {
    border: 1px solid blue;
  }
`;

const CategorySpan = styled.span`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  margin: 24px 40px;
  vertical-align: middle;
  background-color: #b4b4b4;
  width: 1px;
  height: 30px;
`;
