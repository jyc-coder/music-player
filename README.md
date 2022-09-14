음악을 재생시키는 플레이어

# 기능 

 - 노래 재생/일시정지
 - 노래 제목, 작곡가, 음악 파일에 해당하는 앨범 이미지 출력, 
 - 다음곡 이전곡 스킵
 - 프로그래스 바를 추가해서 음악이 어느정도 재생되었는지를 파악
 - 재생 모드 설정(랜덤, 전체 반복)
 - 음악 목록 정렬 및, 드래그를 통해 순서 변경
 


# 예상 기술

- javascript + react 프레임워크
- 컴포넌트 배포를 위한 npm 
- js컴파일을 위한 @babel/cli, @babel/preset-react
- mui 아이콘 사용을 위한 @mui/icons-material, @mui/material, @emotion/react, @emotion/styled
- rag & drop으로 항목을 정렬하는 컴포넌트를 직접 제작하여 배포 @jyc-coder/sortable
- @reduxjs/tookit
- react-redux
- redux-devtools-extension
- heroku


# 실행 방법

`npm install` -> `npm run start`

# 헤로쿠 배포 페이지

https://music-player-jyc.herokuapp.com/

