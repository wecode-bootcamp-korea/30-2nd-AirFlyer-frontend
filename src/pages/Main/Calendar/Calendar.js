import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DateRange } from 'react-date-range';
import { set, reset } from 'redux/date';
import { close } from 'redux/isModalOpen';
import { resetInfo } from 'redux/modalInfo';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Calendar() {
  const dispatch = useDispatch();
  const state = useSelector(store => store.date.state);

  const setState = array => {
    dispatch(set(array));
  };

  const resetState = () => {
    dispatch(reset());
  };

  const closeModal = () => {
    dispatch(close());
  };

  const resetModalInfo = () => {
    dispatch(resetInfo());
  };

  return (
    <Container>
      <StyledDateRange
        locale={ko}
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
        minDate={new Date()}
      />
      <ButtonWrap>
        <ResetButton type="button" onClick={resetState}>
          다시 선택
        </ResetButton>
        <ConfirmButton
          type="button"
          onClick={() => {
            closeModal();
            resetModalInfo();
          }}
        >
          선택 완료
        </ConfirmButton>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDateRange = styled(DateRange)`
  position: relative;
  margin-top: 30px;
  font-size: 16px;

  .rdrDateDisplayWrapper {
    background: none;
  }

  .rdrDateDisplayItem {
    position: relative;
    box-shadow: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    text-align: left;

    input {
      color: black;
      font-size: 16px;
    }

    &:nth-child(1) {
      &::before {
        content: '가는 날 (YYYY.MM.DD.)';
        position: absolute;
        top: -20px;
        color: black;
      }
    }

    &:nth-child(2) {
      &::before {
        content: '오는 날 (YYYY.MM.DD.)';
        position: absolute;
        top: -20px;
        color: black;
      }
    }
  }

  .rdrMonthAndYearWrapper {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    width: 100%;
  }

  .rdrMonthAndYearPickers {
    display: none;
  }

  .rdrMonths {
    margin: 40px 0 40px;
    padding: 0 30px;
  }

  .rdrNextPrevButton {
    margin: 0;
    background: none;
  }

  .rdrPprevButton {
    i {
      width: 11px;
      height: 11px;
      border-width: 0;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      transform: rotate(225deg);
    }
  }
  .rdrNextButton {
    i {
      width: 11px;
      height: 11px;
      border-width: 0;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      transform: rotate(50deg);
    }
  }

  .rdrInRange {
    color: #e7f9ff !important;
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span {
    color: black;
  }

  .rdrStartEdge,
  .rdrEndEdge {
    background: #00256c;
    //TODO: 하늘색 영역이 원을 감싸도록 하는 방법 알아볼 것
    /* border-top-left-radius: 1.042em;
    border-bottom-left-radius: 1.042em;
    border-top-right-radius: 1.042em;
    border-bottom-right-radius: 1.042em; */
  }

  .rdrDayStartOfWeek .rdrDayNumber span {
    color: red !important;
  }

  .rdrMonthName,
  .rdrWeekDays span {
    color: black;
  }

  .rdrWeekDays span {
    &:first-child {
      color: red !important;
    }
  }

  .rdrDayNumber {
    font-weight: 400;
  }

  .rdrDayPassive .rdrDayNumber span {
    display: none;
    color: #d5dce0 !important;
  }

  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span {
    color: white !important;
    font-weight: 700;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 5px;
  }
`;

const Button = styled.button`
  padding: 12px 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const ResetButton = styled(Button)`
  background: white;
  border: 1px solid ${props => props.theme.fontColorDarkblue};
  color: ${props => props.theme.fontColorDarkblue};
`;

const ConfirmButton = styled(Button)`
  background: ${props => props.theme.fontColorDarkblue};
  border: 1px solid ${props => props.theme.fontColorDarkblue};
  color: white;
`;

export default Calendar;
