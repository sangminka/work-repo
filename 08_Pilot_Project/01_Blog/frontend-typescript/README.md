# 메뉴 라이브러리

npm i react-router-dom

# 0) jquery

# npm i --save-dev @types/jquery

# npm i @types/jqueryui

# 0) bootstrap

# npm install --save @types/bootstrap

# 1) countup lib : 숫자 올라가기 외부 lib

# 공홈 : https://github.com/bfintal/Counter-Up

# (cdn(링크),npm(설치))

# waypoints 필수 설치 필요

# 2) typed.js 화면에 타자처람 타이핑 애니메이션 효과를 주는 lib

# => npm 설치

# 공홈 : https://mattboldt.github.io/typed.js/

# npm install typed.js

# 2-1) typed.js import 방법 (MIT 라이선스)

# import Typed from "typed.js";

# 3) wowjs : GNU GPL 라이선스 v3(제약: 소스 공개 필요)

# 공홈 : https://wowjs.uk/

# 유사 라이브러리 : AOS lib (MIT 라이선스)

npm i wowjs

# 3-1) wowjs import 방법

import { WOW } from "wowjs";

# 3-2) animation.css import : App.tsx

# // todo: animate css import (wow 사용시 import 필요)

import "wowjs/css/libs/animate.css";

# 4) 라이트박스 lib : SimpleLightbox 설치

# 공홈 : https://simplelightbox.com/

# (cdn(링크),npm(설치))

npm install simplelightbox

# 4-1) import SimpleLightbox from "simplelightbox" 설치 : initMain.js

import SimpleLightbox from "simplelightbox";

# 4-2) todo: simplelightbox css import : app.tsx

import "simplelightbox/dist/simple-lightbox.css";

# 5) owl-calousel lib

# 공홈 : https://owlcarousel2.github.io/OwlCarousel2/

# 회전목마 : 여러개의 사진이 자동으로 돌아가게 하는 lib

# 유사 lib : swiper

# (cdn(index.html 링크), npm(설치))

# 5-1) index.html : css Link

# <link href="/lib/owlcarousel/assets/owl.carousel.css" rel="stylesheet">

# 5-2) index.html : js link (body)

# <script src="/lib/owlcarousel/owl.carousel.min.js"></script>

# 5-3) type 설치

npm i @types/owl.carousel

# 6) isotope 설치 :(공홈 :https://isotope.metafizzy.co/  )
# 이미지들의 정렬을 해주는 lib
# npm 설치 파일(참고)
# npm install isotope-layout --save
# npm i imagesloaded

# 공통 설치 파일
# npm i @types/isotope-layout
# npm i @types/imagesloaded
<!-- 5) isotope : https://isotope.metafizzy.co/ -->
#  <script src="/lib/isotope/isotope.pkgd.min.js"></script>
<!-- 5-1) isotope 이미지 겹침 문제로 사용 -->
# <script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"></script>

# 7) easing 라이브러리
# (cdn(진행), npm)
# 공홈 : https://gsgd.co.uk/sandbox/jquery/easing/ 
# 예) 처음(천천히) -> 중간(빨리) -> 끝(천천히) : 시간의 흐름(애니메이션)
# 예) 처음(빨리) -> 중간(빨리) -> 끝(천천히)   : 시간의 흐름(애니메이션)
#   <script src="/lib/easing/easing.min.js"></script>

# 8) 달력 : 

# 8-1) jquery-ui 달력 : (cdn 진행) index.html
# 공홈 :  https://jqueryui.com/datepicker/

# jquery ui : calendar 
# <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
# <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

# 8-2) range calendar 달력 : (cdn 진행) index.html
# range calendar 공홈 : https://www.daterangepicker.com/
# calendar css 
# <link rel="stylesheet" href="css/daterangepicker.css">
# calendar js
# <script src="js/moment.min.js"></script>
# <script src="js/daterangepicker.js"></script>

# 공통) 외부 lib 타입 없을때 대처하는 방법

# 1) tsconfig.json 파일 - compilerOptions 속성에 아래 추가 : 프로젝트시작위치/types - 이 위치에 타입을 인식하게 하는 경로 설정

"typeRoots": ["./types", "./node_modules/@types"], // 보통 types 폴더를 만들어 타입 정의

# 2) types/외부라이브러리명/index.d.ts 파일 생성 후 아래 추가

declare module '외부라이브러리명';
