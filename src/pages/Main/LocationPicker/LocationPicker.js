import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LocationList from './LocationList';
import { getPlanetList } from 'hooks/hooks';
import { CATEGORY_LIST } from './categoryData';

//TODO: 커스텀 훅은 함수나 다른 훅 안에 쓸 수 없는지 알아보기
function LocationPicker() {
  const [currentId, setCurrentId] = useState(1);
  const [planetList, setPlanetList] = useState([]);

  const clickHandler = id => {
    setCurrentId(id);
  };

  const handleLoad = async () => {
    const result = await getPlanetList();
    const { planet_list } = result;
    setPlanetList(planet_list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const MAPPING_OBJ = {
    1: <LocationList list={planetList} />,
    2: <LocationList list={planetList} />,
    3: <LocationList list={planetList} />,
    4: <LocationList list={planetList} />,
    5: <LocationList list={planetList} />,
    6: <LocationList list={planetList} />,
  };

  return (
    <Container>
      <CategoryList>
        {CATEGORY_LIST.map(item => (
          <Category key={item.id}>
            <Button
              type="button"
              onClick={() => {
                clickHandler(item.id);
              }}
            >
              {item.name}
            </Button>
          </Category>
        ))}
      </CategoryList>
      {MAPPING_OBJ[currentId]}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 400px;
  height: 254px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.borderColorGray};
`;

const CategoryList = styled.ul`
  flex: 3;
`;

const Category = styled.li`
  background-color: ${props => props.theme.backgroundColorLightgray};
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
export default LocationPicker;
