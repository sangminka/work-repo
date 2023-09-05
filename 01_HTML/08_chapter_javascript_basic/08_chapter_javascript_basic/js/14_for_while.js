// 반복문 : for(80%) === while문
// 예제 1)
// 입력 : 없음
// 출력 : 안녕하세요 5번 출력
// 사용법 : for(초기값;조건식:증감식){}
// // TODO : for문
// for(let i =1; i<=5; i++){
//     console.log("안녕하세요");
// }

// TODO:while 문 변경(반복문 #2)
// 사용법 : 
// 초기값 :
// while(조건식){
//     반복문;
//     증감식:
// }
// let i=1;//초기값
// while(i<=5){ //while(조건식)
//     console.log("안녕하세요");
//     i++;
// }

// TODO : do ~while문 (반복문 #3)
// 특징 : 조건식이 거짓이라도 1번은 실행함
// let i=1;
// do{
//     console.log("안녕하세요");
//      i++;
// }while(i<=5);

// TODO:반복문 특수형태 : 무한루프(loop, 무한히 반복)
//  TODO : while 문 무한루프
// 사용법 : 예제
// while(true){반복문}
// while(true){
//     console.log("안녕하세요");
// }

// TODO : for문 무한루프
// for(;true;){
//     console.log("안녕하세요");
// }

// 예제 : 무한루프 예제(while문)
// 입력값이 숫자 5가 입력될때까지 무한히 화면에 숫자를 출력하세요
// while(true){
//     let num =Number(prompt("숫자를 입력하세요"));
//     // num값에 검사
//     if(num ===5){
//         // 무한루프 중단
//         break;
//     }
//     // 화면출력
//     console.log(num+"번째 반복입니다.")
// }

// 연습문제 1)숫자를 입력하면 이미지를 화면에 그 숫자만큼 반복해서 출력하세요
// 힌트 : 
// let num = Number(prompt("숫자입력"));
// let str = "";
// for(let i=0; i<num; i++){
//     str +='<img src="./img/fish.jpg"/>'
// }
// document.querySelector("#output").innerHTML = str