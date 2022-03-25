# Air Flyer

> Our Reference
> https://www.koreanair.com/

### 프로젝트 소개

- AIR FLYER은 항성간 우주여행 예약을 제공하는 사이트입니다.
- 대한항공의 UX,UI를 오마쥬 했습니다.

<img width="916" alt="image" src="https://user-images.githubusercontent.com/98295004/160068749-64f708a0-4d24-45ff-98d8-9fb26928d871.png">


### 프로젝트 선정이유
- 프론트 입장에서 각종 외부 API를 이용해 볼 수 있음 (ex. 달력)
- 깔끔한 UI, UX
- 소셜 로그인, 예약 기능을 구현볼수 있음

# 초기기획 & ERD

## ERD
![image](https://user-images.githubusercontent.com/67942847/160069065-059d796e-4c05-4232-bf81-a15bbfe97123.png)

## User flow
![image](https://user-images.githubusercontent.com/67942847/160073025-11ee9558-b015-427b-955b-393720ad8343.png)

## 초기기획 및 구현 목표
- 짧은 기간동안 기능구현에 집중해야하므로 일단 최소기능을 우선 구현하는 것으로 목표를 설정
- UI, UX 제외 개발은 초기세팅부터 전부 직접 구현
- 편도 기능만 구현
- 필수 구현 사항을 소셜로그인, 항공권 검색, 항공권 선택, 예약, 예약기록확인 5가지로 설정 
- 지정한 날짜에 따라 항공권을 필터링 하는 기능 구현 

---
# 개발기간 및 팀원

* ## 개발기간  
    2022.03.14 ~ 2022.03.25
   

* ## 개발인원 및 파트

    * Front-end  
        강성훈 - 항공권 선택
        김혜진 - 항공권 검색, 마이 페이지 (예약 내역 확인)
        안광민 - 소셜 로그인, 양식작성 및 예약
        
    * Back-end   
        김산   - 소셜 로그인, 양식작성 및 예약, 마이페이지
        안성준 -  항공권 검색, 항공권 선택

---
# 적용 기술 및 구현 기능

* ## 기술 스택
    * ### Front-end  
        <a href="#"><img src="https://img.shields.io/badge/HTML-DD4B25?style=plastic&logo=html&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/SASS-254BDD?style=plastic&logo=sass&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/javascript-EFD81D?style=plastic&logo=javascript&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/React-68D5F3?style=plastic&logo=react&logoColor=white"/></a>
    * ### Back-end  
        <a href="#"><img src="https://img.shields.io/badge/python-3873A9?style=plastic&logo=python&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Django-0B4B33?style=plastic&logo=django&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/MySQL-005E85?style=plastic&logo=mysql&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/AWS-FF9701?style=plastic&logo=aws&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/bcrypt-525252?style=plastic&logo=bcrypt&logoColor=white"/></a>
     <a href="#"><img src="https://img.shields.io/badge/postman-F76934?style=plastic&logo=postman&logoColor=white"/></a>
     
    * ### Common  
        <a href="#"><img src="https://img.shields.io/badge/git-E84E32?style=plastic&logo=git&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/RESTful API-415296?style=plastic&logoColor=white"/></a>
    * ### Communication  
        <a href="#"><img src="https://img.shields.io/badge/github-1B1E23?style=plastic&logo=github&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/Slack-D91D57?style=plastic&logo=slack&logoColor=white"/></a>
                <a href="#"><img src="https://img.shields.io/badge/Trello-2580F7?style=plastic&logo=trello&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/Notion-F7F7F7?style=plastic&logo=notion&logoColor=black"/></a>

# 시연
---
### 데모 영상
> https://www.youtube.com/watch?v=m-aGi9i54J0

### Nav
- 현재 링크에 밑줄 적용 (현재 브라우저 url과 동일한 NavLink 스타일링)

### Footer

### 소셜 로그인
- 카카오 서버와 통신하여 인증 발급
- 비밀번호 암호화 및 JWT 발급
- request.header에 담긴 token을 통해 로그인 여부를 검사
- 소셜 로그인시 버튼 클릭 후 동의하고 카카오 로그인을 하면 로그인이 되고 카카오에서 access_token을 받아온다.
- 그리고 access_token을 백엔드로 보내서 다시 JWT로 발급받은 토큰을 받아 로컬스토리지에 저장 한다.

![Login](https://user-images.githubusercontent.com/98295004/160070083-db6055be-9a3e-4d1f-8ca7-28d69bbc210e.gif)

### 항공권 검색

- 행성 버튼 클릭 시, 검색 모달 오픈

![Main_Search](https://user-images.githubusercontent.com/98295004/160070624-b286f37e-e843-4996-9b4f-7c8a4cd1ee57.gif)        

- 하단의 [모든 지역 보기] 클릭 시, 행성 목록이 렌더링 됨
- 행성 클릭 시, 시작지 OR 도착지가 바뀐다

![Main_Planet](https://user-images.githubusercontent.com/98295004/160070638-0e2d5d1f-56e8-49fc-91d0-09c0cc4f0a27.gif)

- 날짜 API를 이용하여 자체 달력 구현
- 목표 날짜, 시간, 예약할 인원을 선택하는 기능 구현

### 항공권 선택

- 판매 상품의 분류에 따라 filtering
- 사용자가 원하는 기준에 따라 sorting

### 예매 양식 제출

- 예매자 정보 입력
- 입력한 정보를 POST 리퀘스트로 DB에 추가

### 마이 페이지
- 유저의 과거 예약 목록을 보여줌

# Reference

- 이 프로젝트는 대한항공 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

![제리감사](https://user-images.githubusercontent.com/98295004/160072027-48461568-b541-4622-8f54-f2c98f95fb91.gif)


