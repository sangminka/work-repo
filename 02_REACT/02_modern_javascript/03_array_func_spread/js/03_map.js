// map 함수 (리엑트에서 반복문 대용으로 사용함)
// 용도 : 배열을 조작해서 새로운 복사본 배열을 만들때 사용
// 특징 : 1)리턴값
// 사용법 : let 변수 = 배열변수.map((value)=> 반복문)
// TODO 예제1) 숫자배열에서 제곱수를 구하는 새로운 배열을 만드세요
// let numbers = [1,2,3,4,5]
// let result = numbers.map((value) => value * value);
// console.log(result); //[1,4,9,16,25]

// TODO: 예제2) map함수에 js 내장함수 사용하기
// 주어진 배열의 제곱근 구해서 새로운 배열을 만드세요
// 힌트 : Math.sqrt(값)
// let numbers = [1,2,3,4,5];
// let result= numbers.map(Math.sqrt)
// console.log(result);

// 참고
// 입력 : 1 2 4
// let num = prompt("숫자배열").split(" ").map(Number
// TODO 연습문제 1)
// 결과[1,4,6]
// 
// let numbers = [1,2,3];
// let result = numbers.map((value) => (value *2));
// console.log(result)
// TODO 예제 : 객체 조작
// let users = [
// //객체 배열에서 나이만 뽑아서 새로운 배열 만들기
//     {name:"YD",age:22},
//     {name:"Bill",age:32},
//     {name:"Andy",age:21},
//     {name:"Roky",age:35},
// ]
// let ages = users.map((value)=> value.age)
// console.log(ages)
// TODO 연습문제 2) map함수를 사용해서 새로운 배열을 만드세요
// 결과:["가","나","다!"]
// let chars =["가","나","다"];
// let result =chars.map((value) => value +"!")
// console.log(result)


