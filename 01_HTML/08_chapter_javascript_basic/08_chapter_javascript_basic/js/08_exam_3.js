// 1) 부호를 바꾸어 출력한다.
// 입력 : -1, 출력 : 1
// let num1 = Number(prompt("-숫자입력"));
// num1 *=-1;
// console.log(num1)
// 2) 입력 : -214 출력 : -214
// let num2 = Number(prompt("-숫자입력2"));
// console.log(num2)
// 정수2개 입력된다. a를 b로 나눈 몫을 출력한다
// 입력a : 1 입력b : 3 출력 : 0
// 힌트 : parseInt(실수)->정수,  parseInt(문자열)->정수
// let a = Number(prompt("숫자입력"));
// let b = Number(prompt("숫자입력2"));
// a /=b;
// console.log(parseInt(a));

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a): 10
// 입력 2(b): 3
// 출력 : 1
// let a = Number(prompt("정수입력a"));
// let b = Number(prompt("정수입력b"));
// console.log(parseInt(a % b));
// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num = Number(prompt("정수입력"));
// console.log(++num);
// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3
//   1

// let num1 = Number(prompt("정수입력1"));
// let num2 = Number(prompt("정수입력2"));
// console.log(parseInt(num1+num2));
// console.log(parseInt(num1-num2));
// console.log(parseInt(num1*num2));
// console.log(parseInt(num1/num2));
// console.log(parseInt(num1%num2));

// 7) 정수 3개 입력받아 합과 평균 출력하기
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 6 평균 2.0
// 공식 : 합 = 모든 숫자 더하기
//      평균 = 모든숫자합/개수

// let num1 = Number(prompt("정수입력1"));
// let num2 = Number(prompt("정수입력2"));
// let num3 = Number(prompt("정수입력3"));
// console.log(num1+num2+num3);
// console.log((num1+num2+num3)/3);

// 8) 정수 1개 입력받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048

// let num = Number(prompt("정수입력"));
// console.log(num*2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1
// let a = Number(prompt("정수입력1"));
// let b = Number(prompt("정수입력2"));
// if(a>b){
//     console.log(1);
// }else{
//     console.log(0);
// }

// 9) 두 정수 (a,b) 입력받아 비교하기2(설명)
// a와 b의 값이 같은 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1: 0
// 입력 2: 0
// 출력 : 1
// let a = prompt("a입력");
// let b = prompt("b입력");
// if(a == b){
//     console.log(1);
// }else{
//     console.log(0)
// }
// 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)
// let num = prompt("1 또는 0 입력");
// if(num == 0){
//     console.log(1);
// }else{
//     console.log(0);
// }
// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// let num1 = Number(prompt("정수입력1"));
// let num2 = Number(prompt("정수입력2"));
// let num3 = Number(prompt("정수입력3"));
// console.log(Math.min(num1,num2,num3))
// if(num1 > num2){
//     max = num1;
// }else{
//     max = num2;
// }
// if(max<num3){
// max = num3;
// }
// console.log(max);

// 12) 정수 3개 입력받아 짝수만 출력하기(설명)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 4
// 출력 : 2
//        4
// let num1 = Number(prompt("정수입력1"));
// let num2 = Number(prompt("정수입력2"));
// let num3 = Number(prompt("정수입력3"));
// // 임시 결과 변수
// let result = "";
// if (num1 % 2 === 0) {
//   //console.log(num1);
//   result +=num1 + "\n"
// }
// if (num2 % 2 === 0) {
//   //console.log(num2);
//   result +=num2 + "\n"
// }
// if (num3 % 2 === 0) {
//   //console.log(num3);
//   result +=num3 + "\n"
// }

// console.log(result)
// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
// let n1 = Number(prompt("정수입력1"));
// let n2 = Number(prompt("정수입력2"));
// let n3 = Number(prompt("정수입력3"));

// if (n1 % 2 === 0) {
//   console.log("even"+"\n");
// } else {
//   console.log("odd"+"\n");
// }
// if (n2 % 2 === 0) {
//   console.log("even"+"\n");
// } else {
//   console.log("odd"+"\n");
// }
// if (n3 % 2 === 0) {
//   console.log("even"+"\n");
// } else {
//   console.log("odd"+"\n");
// }


// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B
// let score = Number(prompt("점수 입력"));
// let grade = "";
// if(score>=90 && score <=100){
//     grade = "A";
//     console.log(grade)
// }
// else if(score<90 && score >=70){
//     grade = "B";
//     console.log(grade)
// }
// else if(score<70 && score >=40){
//     grade = "C";
//     console.log(grade)
// }
// else if(score<40 && score >=0){
//     grade = "D";
//     console.log(grade)
// }else{
//     grade = "F";
//     console.log(grade)
// }


// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!
// // grade = prompt("등급 입력");

// if(grade === "A"){
//     console.log("best!!!")
// }else if(grade === "B"){
//     console.log("good!!")
// }else if(grade === "C"){
//     console.log("run!")
// }else if(grade === "D"){
//     console.log("slowly~")
// }else{
//     console.log("what?")
// }

// 16)정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오
// 힌트 : 입력값 > 0(양수)
// 입력 : 5
// 출력 : 양수
// let num = Number(prompt("숫자를 입력하세요"));
// if(num > 0){
//     console.log("양수")
// }else if(num < 0){
//     console.log("음수");
// }else{
//     console.log("0");
// }

// 17) 비만도 측정 0
// BMI수치 비만 판정
// ~10 이하 정상
// 11~20 이하 과체중
// 20초과 비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 :15
// 출력 : 과체중

// let weight = Number(prompt("비만도를 입력해주세요"));
// if(weight <= 10){
//     console.log("정상");
// }else if(weight > 10 && weight <=20){
//     console.log("과체중");
// }else if(weight>20){
//     console.log("비만")
// }