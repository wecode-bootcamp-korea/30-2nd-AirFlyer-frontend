# Air Flyer

> Our Reference
> https://www.koreanair.com/

### 프로젝트 소개

- 항공권 예약 사이트인 대한항공을 모티브로 한 사이트

<img width="916" alt="image" src="https://user-images.githubusercontent.com/98295004/160068749-64f708a0-4d24-45ff-98d8-9fb26928d871.png">


### 프로젝트 선정이유

- 소셜 로그인, 예약 기능을 구현해 볼 수 있어 선정하게 되었습니다.

### 개발 기간 및 인원

- 개발 기간 : 2022/3/14 ~ 2022/3/25
- 프론트엔드 (3명) : 강성훈, 김혜진, 안광민
- 백엔드 (2명) : 김산, 안성준

### 적용 기술

- Front-End : React, scss, html, javascript
- Back-End : Python, Django web framework, Bcrypt, MySQL
- common : Git, Github

### 구현 기능

- 강성훈 : 항공권 선택, Footer
- 김혜진 : 항공권 검색, 마이 페이지, Nav
- 안광민 : 소셜 로그인, 예매 양식 제출

# 시연
---
### 데모 영상
> https://www.youtube.com/watch?v=m-aGi9i54J0

### Nav
- 현재 링크에 밑줄 적용 (현재 브라우저 url과 동일한 NavLink 스타일링)

### Footer

### 소셜 로그인

- 소셜 로그인시 버튼 클릭 후 동의하고 카카오 로그인을 하면 로그인이 되고 카카오에서 access_token을 받아온다.
- 그리고 access_token을 백엔드로 보내서 다시 JWT로 발급받은 토큰을 받아 로컬스토리지에 저장 한다.

![Login](https://user-images.githubusercontent.com/98295004/160070083-db6055be-9a3e-4d1f-8ca7-28d69bbc210e.gif)

### 항공권 검색

- 행성 버튼 클릭 시, 검색 모달 오픈

![Main_Search](https://user-images.githubusercontent.com/98295004/160070624-b286f37e-e843-4996-9b4f-7c8a4cd1ee57.gif)

- 하단의 [모든 지역 보기] 클릭 시, 행성 목록이 렌더링 됨
- 행성 클릭 시, 시작지 OR 도착지가 바뀐다

![Main_Planet](https://user-images.githubusercontent.com/98295004/160070638-0e2d5d1f-56e8-49fc-91d0-09c0cc4f0a27.gif)

### 항공권 선택

### 예매 양식 제출

### 마이 페이지
- 자신이 예매한 티켓의 목록을 볼 수 있음

### Reference

- 이 프로젝트는 대한항공 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

![제리감사](https://user-images.githubusercontent.com/98295004/160072027-48461568-b541-4622-8f54-f2c98f95fb91.gif)


