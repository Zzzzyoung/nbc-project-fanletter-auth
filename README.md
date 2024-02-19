# 사이트명

에스파 팬레터

## 👩‍💻 프로젝트 소개

리액트 hook들과 context API, Redux를 이용해 에스파 멤버들에게 팬레터를 남길 수 있는 사이트 입니다.

－ 홈 화면

![image](https://github.com/Zzzzyoung/nbc-project-fanletter/assets/154482077/80b83ff9-a6f3-418e-8170-dee7ca4f2140)

－ 상세 화면

![image](https://github.com/Zzzzyoung/nbc-project-fanletter/assets/154482077/097bfae2-db78-4006-80b5-020fe9e9525f)

## 🖇️ 배포 링크

https://nbc-project-fanletter.vercel.app/

## ⏲️ 개발 기간

- 2024.02.01 ~ 02.05

## 💻 개발환경

- <img alt="React" src ="https://img.shields.io/badge/React-444444.svg?&style=for-the-badge&logo=React&logoColor=react"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
- Github
- VScode

## 📌 주요 기능

- 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)
- 아티스트별 게시물 조회 기능 구현 (Home - Read)
- 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- 팬레터 상세 화면 구현 (Detail - Read)
- 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- 상세화면에서 팬레터 삭제 구현 (Detail - Delete)
- 팬레터 작성, 수정, 삭제 시 유효성 검사 가능

## ✔️ 필수 요구 사항

- styled-components 를 이용하여 스타일링
  - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양
  - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- 전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정
- styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
  - 아티스트 선택탭에 적용
- 팬레터 등록 시 id는 uuid 라이브러리를 이용

## ✔️ 선택 요구 사항

- 모달 구현
  - window.alert 이나 window.conform 대신 직접 구현한 모달을 적용
- 만능 버튼 구현(공통 컴포넌트 버튼)
  - 하나의 버튼 컴포넌트를 홈화면과 상세화면 모두에서 적용
  - props 로 버튼 크기나 버튼 텍스트 등을 받음

## 🧩 컴포넌트

```
src
├── assets
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
│   │   ├── Footer.jsx            # 푸터
│   │   └── Header.jsx            # 헤더
├── context
│   ├── FanLetterContext.jsx      # 팬레터 전역 상태로 관리
│   └── MemberContext.jsx         # 멤버 전역 상태로 관리
├── pages
│   ├── Detail.jsx                # 팬레터 상세 화면
│   └── Home.jsx                  # 팬레터 홈 화면
├── redux
│   ├── config
│   │   └── configStore.js
│   └── modules
│   │   ├── buttons.js
│   │   └── member.js
├── shared
│   └── Router.jsx                # 홈 화면과 상세 화면에 대한 라우터 설정
├── style
│   └── GlobalStyle.jsx           # 전역 스타일
├── util                          # 공통 함수
│   │   └── Date.jsx              # 공통 날짜 형식
├── App.jsx
├── fakeData.json
└── index.jsx
```

## Create React App 만들기 시작 위한 방법

### 프로젝트 생성하기

yarn create react-app '프로젝트 명'

### 프로젝트 실행하기

#### 프로젝트 폴더로 이동하기

cd '프로젝트 명'

#### 프로젝트 실행하기

yarn start
