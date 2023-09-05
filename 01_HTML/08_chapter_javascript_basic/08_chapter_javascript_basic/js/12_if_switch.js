// 조건문 ( if문(90%) === switch문)
// 조건문 : switch
// 사용법 : 조건변수와 값을 비교해서 각각의 case 따라 실행됨
//         switch(조건변수) {
//            case 값:
//                실행문;
//                break;
//            ...
//            default:
//                실행문;
//                break;               
//         }


// // TODO : switch문 풀이
// let num = Number(prompt("숫자 입력"));
// switch(num){
//     // num === 1
//     case 1:
//        alert("x의값은 1입니다.");
//         break;
//     // num === 2
//     case 2:
//         alert("x의값은 2입니다.");
//         break;
//     // 모두 아닐때 실행됨
//     default:
//         alert("x는 1도 2도 아닙니다.");
//         break;
// }


// TODO : 3항 연산자(조건문) : ***** react에 시도때도 없이 사용함
// 활용 : 자바, 자바스크립트에서 간단한 조건 문제일 경우 사용함(주로 1줄 표현)
// 사용법 : let 변수명 = 조건식? 실행문1 : 실행문2
// 조건식을 판단하여 참이면 실행문1 실행되고, 거짓이면 실행문2가 실행됨
// 예제)입력값을 받아서 값이 admin이면 "있음"라고 출력하고, 아니면"없음출력하시오
let str = prompt("아이디를 입력");
// 조건식 : 3항 연산자 사용
// str가 admin이면 있음 이라는 문자열이 result변수에 저장됨,아니면 없음 이라는 문자열이 result에 저장됨
let result = (str === "admin")? "있음" : "없음";
alert(result);