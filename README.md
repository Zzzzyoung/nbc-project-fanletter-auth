# 사이트명

에스파 팬레터

## 👩‍💻 프로젝트 소개

https://github.com/Zzzzyoung/nbc-project-fanletter 에서 발전시킨 프로젝트입니다.
리액트 hook들과 Redux를 이용해 에스파 멤버들에게 팬레터를 남길 수 있으며, 인증 시스템이 있어 인증된 사용자만 팬레터를 작성하고 수정 및 삭제가 가능합니다.

- 회원가입 화면

![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/8954050a-ef53-4170-b802-73dee6f29c73)

- 로그인 화면
  
![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/30459954-a05e-4e9d-8edd-3c6877da344c)
![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/b5b499af-dcaa-4abe-ba0c-38d63420476b)

- 프로필 화면
  
![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/8f504946-82f6-420b-8770-74559e31c93d)
![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/1ed4a8e4-4b98-43c2-b857-e20fe92dd5b1)

－ 홈 화면

![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/cc281398-246d-4ff0-a0b9-f858362d1748)

－ 상세 화면

![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/7485451f-e0d0-4842-bb2b-3a116fbcfed1)
![image](https://github.com/Zzzzyoung/nbc-project-fanletter-auth/assets/154482077/78f7a99a-6f6c-465a-a927-a4c868881b02)

## 🖇️ 배포 링크
- vercel
https://nbc-project-fanletter-auth.vercel.app

- json-server 
https://flash-dog-monkey.glitch.me

## ⏲️ 개발 기간

- 2024.02.19 ~ 02.21

## 💻 개발환경

- <img alt="React" src ="https://img.shields.io/badge/React-444444.svg?&style=for-the-badge&logo=React&logoColor=react"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
- Github
- VScode

## 📌 주요 기능

- 팬레터 CRUD 구현 (Create, Read, Update, Dalete)
   - 아티스트별 게시물 조회 기능 구현 (Home - Read)
   - 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
   - 팬레터 상세 화면 구현 (Detail - Read)
   - 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
   - 상세화면에서 팬레터 삭제 구현 (Detail - Delete)
- 팬레터 작성, 수정, 삭제 시 유효성 검사 가능

- 로그인/회원가입 UI 구현
  - 로그인이 되어야 팬레터 화면으로 진입 가능
- 홈 화면 UI 구현 (Create, Read)
   - 팬레터 추가폼에 회원가입 시 작성한 닉네임 적용
- 프로필 관리 UI 구현
   - 프로필 이미지, 닉네임 변경 기능 
- 상세 화면 UI 구현 (Read, Update, Delete)
   - 본인이 작성한 팬레터만 수정 및 삭제 가능

## ✔️ 필수 요구 사항

- 팬레터 CRUD를 위한 API 통신은 json-server 이용
- 인증과 프로필 관리를 위한 API 통신은 jwt 인증 서버 이용
- fetch API 대신 axios 이용
- Redux 사용 시 Redux Toolkit 이용
- 전역 스타일링 및 reset.css 적용
    - box-sizing: border-box

## ✔️ 선택 요구 사항

- redux-thunk 를 이용한 API 통신 로직을 react-query 로 리팩터링
    - react-query 브랜치
- Custom Hook 구현
- 모달 구현
    - window.alert 이나 window.conform 대신 직접 구현한 모달을 적용
- 새로고침 UI 유지
    - 로컬스토리지를 이용
- 검색 기능 구현
    - query string
    - react-router-dom의 useSearchParams
    - 별도의 검색 버튼 없이 실시간 검색 구현 시 deboucing 적용
- 팬레터 상세 화면에 댓글 기능 구현

## 🧩 컴포넌트

```
src
├── assets
├── axios
│   └── api.js
├── components
│   ├── common                    # 공통 컴포넌트
│   │   ├── Button.jsx            # 공통 버튼
│   │   ├── CommonModal.jsx       # 공통 모달창
│   │   └── UserImg.jsx           # 공통 사용자 이미지
│   ├── FanLetter
│   │   ├── FanLetterForm.jsx     # 팬레터 등록 폼
│   │   ├── FanLetterItem.jsx     # 멤버별 팬레터 아이템
│   │   ├── FanLetterList.jsx     # 멤버별 팬레터 리스트
│   │   └── MemberTab.jsx         # 멤버 선택 탭
│   └── Layout
│       ├── Footer.jsx            # 푸터
│       ├── Header.jsx            # 헤더
│       └── Layout.jsx            # 공통 Navbar
├── pages
│   ├── Detail.jsx                # 팬레터 상세 화면
│   ├── Home.jsx                  # 팬레터 홈 화면
│   ├── Login.jsx                 # 로그인 화면
│   └── Profile.jsx               # 프로필 화면
├── redux
│   ├── config
│   │   └── configStore.js
│   └── modules
│       ├── authSlice.js
│       ├── fanLetterSlice.js
│       └── memberSlice.js
├── shared
│   └── Router.jsx                # 각 페이지 대한 라우터 설정
├── style
│   └── GlobalStyle.jsx           # 전역 스타일
├── util                          # 공통 함수
│       └── Date.jsx              # 공통 날짜 형식
├── App.jsx
└── index.jsx
db.json
```

## Create React App 만들기 시작 위한 방법

### 프로젝트 생성하기

yarn create react-app '프로젝트 명'

### 프로젝트 실행하기

#### 프로젝트 폴더로 이동하기

cd '프로젝트 명'

#### 프로젝트 실행하기

yarn start
