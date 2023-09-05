//document.querySelector("css선택자") : js 선택 함수
// css 선택자 : 기본선택자(전체(*), id, class등)

// id 선택자로(#output) html 태그 선택
// 선택함수(querySelector() return 값 : html 태그 나옴)
// #output : div 태그 -> output 변수 저장됨
let output = document.querySelector("#output");

//innerHTML : css 선택자를 이용해서 그 위치에 글자를 넣는 속성
output.innerHTML = "Hello world!!!";
output.style.fontSize = "50px"
output.style.textAlign = "center"