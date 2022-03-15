import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout';
import Modal from 'components/Modal/Modal';
import Calendar from './Calendar/Calendar';
import LocationPicker from './LocationPicker/LocationPicker';
import PassengerPicker from './PassengerPicker/PassengerPicker';
import SearchBar from './SearchBar/SearchBar';
import { open } from 'redux/isModalOpen';
import { change } from 'redux/location';
import { update } from 'redux/modalInfo';
import { BOOKING_TYPE_LIST } from './bookingTypeData';

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(store => store.isModalOpen.isModalOpen);
  const modalInfo = useSelector(store => store.modalInfo);
  const counter = useSelector(store => store.counter);
  const depLocation = useSelector(store => store.location.depLocation);
  const arrLocation = useSelector(store => store.location.arrLocation);
  const isToValid =
    useSelector(store => store.location.arrLocation.planet_code) === 'TO';
  const date = useSelector(store => store.date.state[0]);

  const changeLocation = () => {
    dispatch(change());
  };

  const openModal = () => {
    dispatch(open());
  };

  const updateModalInfo = obj => {
    dispatch(update(obj));
  };

  const handleModalButtonClick = (key, title) => {
    openModal();
    updateModalInfo({ [key]: true, title, currentModalInfo: key });
  };

  const checkInformation = () => {
    if (arrLocation.planet_code !== 'TO' && counter.count !== 0) {
      return true;
    } else {
      alert('도착지와 인원수를 확인 해주세요');
      return false;
    }
  };

  const goToList = () => {
    const isChecked = checkInformation();
    if (isChecked) navigate('/flights');
  };

  const MAPPING_OBJ = {
    depSearch: <SearchBar />,
    arrSearch: <SearchBar />,
    depLocation: <LocationPicker />,
    arrLocation: <LocationPicker />,
    date: <Calendar />,
    passenger: <PassengerPicker />,
  };

  return (
    <MainContainer>
      <WrapperLayout>
        <BookingContainer>
          <Title>항공권 예매</Title>
          <TypeWrap>
            {BOOKING_TYPE_LIST.map(item => (
              <TypeItem key={item.id}>
                <input type="radio" />
                <label>{item.name}</label>
              </TypeItem>
            ))}
          </TypeWrap>
          <BookingWrap>
            <Itinerary>
              <LocationBox>
                <From>
                  <LocationButton
                    type="button"
                    onClick={() => {
                      handleModalButtonClick('depSearch', '은하 및 행성 선택');
                    }}
                  >
                    <Code>{depLocation.planet_code}</Code>
                    <Name>{depLocation.planet_name}</Name>
                  </LocationButton>
                </From>
                <ChangeButton disabled={isToValid} onClick={changeLocation}>
                  <ChangeIcon
                    alt="changeIcon"
                    src={
                      isToValid
                        ? '/images/change.png'
                        : '/images/change_active.png'
                    }
                  />
                </ChangeButton>
                <To>
                  <LocationButton
                    type="button"
                    onClick={() => {
                      handleModalButtonClick('arrSearch', '은하 및 행성 선택');
                    }}
                  >
                    <Code>{arrLocation.planet_code}</Code>
                    <Name>{arrLocation.planet_name}</Name>
                  </LocationButton>
                </To>
              </LocationBox>
              <DateBox>
                <DateButton
                  type="button"
                  onClick={() => {
                    handleModalButtonClick('date', '탑승일 선택');
                  }}
                >
                  <DateIcon alt="dateIcon" src="/images/calendar.png" />
                  {moment(date.startDate).format('YYYY-MM-DD')} ~{' '}
                  {moment(date.endDate).format('YYYY-MM-DD')}
                </DateButton>
              </DateBox>
            </Itinerary>
            <Options>
              <PassengerBox
                type="button"
                onClick={() => {
                  handleModalButtonClick('passenger', '승객 선택');
                }}
              >
                성인 {counter.count}명
                <PersonIcon src="/images/user.png" />
              </PassengerBox>
              <SelectClass>
                <option>모든 클래스</option>
                <option>이코노미</option>
                <option>비즈니스</option>
              </SelectClass>
            </Options>
          </BookingWrap>
          <SearchButtonWrap>
            <SearchButton type="button" onClick={goToList}>
              항공편 검색
            </SearchButton>
          </SearchButtonWrap>
        </BookingContainer>
      </WrapperLayout>
      <MainBanner alt="mainBanner" src="/images/mainBannerLogov2.jpg" />
      {isModalOpen && (
        <Modal title={modalInfo.title}>
          {MAPPING_OBJ[modalInfo.currentModalInfo]}
        </Modal>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
`;

const BookingContainer = styled.div`
  padding: 30px 0;
  margin-bottom: 70px;
`;

const TypeWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const TypeItem = styled.div`
  margin-right: 30px;

  label {
    position: relative;
    top: -1px;
    margin-left: 5px;
  }
`;

const BookingWrap = styled.div`
  display: flex;
  margin-bottom: 70px;
  box-shadow: 5px 10px 20px 0 rgb(35 55 94 /14%);
`;
const Itinerary = styled.div`
  flex: 6;
  padding: 50px 120px;
  border-top: 5px solid ${props => props.theme.borderColorSkyblue};
`;

const Options = styled.div`
  flex: 4;
  padding: 50px 50px 65px;
  border-top: 5px solid ${props => props.theme.borderColorDarkblue};
`;

const PassengerBox = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0 10px 5px;
  margin-bottom: 30px;
  background-color: white;
  border: none;
  border-bottom: 1px solid ${props => props.theme.borderColorDarkblue};
  font-size: 18px;
  text-align: left;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${props => props.theme.borderColorDarkblue};
  }
`;

const PersonIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const LocationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const LocationButton = styled.button`
  width: 65px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Code = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 5px 0;
`;

const Name = styled.div`
  font-size: 16px;
`;

const From = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: 100px;
    height: 1px;
    margin: 0 30px;
    background-color: ${props => props.theme.borderColorGray};
  }
`;

const To = styled.div`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 100px;
    height: 1px;
    margin: 0 30px;
    background-color: ${props => props.theme.borderColorGray};
  }
`;

const ChangeButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 7px;
  background: none;
  border: 1px solid ${props => props.theme.borderColorGray};
  border-radius: 50%;
  cursor: pointer;
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
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const DateIcon = styled.img`
  position: relative;
  top: -1px;
  width: 16px;
  height: 16px;
  margin-right: 15px;
`;

const SelectClass = styled.select`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.borderColorDarkblue};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${props => props.theme.borderColorDarkblue};
  }
`;

const SearchButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchButton = styled.button`
  padding: 20px 100px;
  color: white;
  background: ${props => props.theme.backgroundColorDarkblue};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const MainBanner = styled.img`
  display: block;
  margin: 0 auto;
  width: 1800px;
`;

export default Main;
