const KAKAO_TOKEN_KEY = 'kakao_d49539bec92e4ffc1fc33986b713ebe2';

export const getToken = () => localStorage.getItem(KAKAO_TOKEN_KEY);
export const removeToken = () => localStorage.removeItem(KAKAO_TOKEN_KEY);
