// hook

const API = {
  planetList:
    'http://ec2-3-34-189-145.ap-northeast-2.compute.amazonaws.com:8000/flights/planet',
};

export const getPlanetList = async () => {
  const response = await fetch(API.planetList);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = response.json();
  return body;
};
