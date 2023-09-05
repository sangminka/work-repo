// 함수 문제 풀이
// TODO: 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20
// TODO 1 - 1번 풀이
// function multiply(num){
//     return num * 2
// }

// let num = Number(prompt("숫자를 입력하세요"))
// result = multiply(num);
// alert(result)
// TODO 1 - 2번 풀이
// function sumTen(num){
//     alert(num + 10);
// }

// let num= Number(prompt("숫자를 입력해 주세요"))
// sumTen(num);


// TODO: 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even
// function even_odd(num){
//     if(num % 2 === 0){
//         alert("even")
//     }else{
//         alert("odd")
//     }
// }


// let num = Number(prompt("숫자를 입력하세요"))
// even_odd(num)

// TODO : 연습문제 3
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55

// function sum(num){
//     let result = 0
//     for(let i = 1; i <= num; i++){
//         result = result + i
//     }
//     return result
// }
// let num = Number(prompt("숫자를 입력하세요"))

// result = sum(num)
// alert(result)

// TODO 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기

// function min(num1, num2, num3){
//     let min = Math.min(num1,num2,num3)
//     alert(min)
// }

// let num1 = Number(prompt("첫번째 숫자를 입력해 주세요"))
// let num2 = Number(prompt("두번째 숫자를 입력해 주세요"))
// let num3 = Number(prompt("세번째 숫자를 입력해 주세요"))
// min(num1,num2,num3)

// TODO 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5

// function multiply_5(num){
//     if(num% 5 === 0){
//         alert("5의 배수이다")
//     }else{
//         alert("5의 배수 아님")
//     }
// }
// let num = Number(prompt("숫자를 입력해 주세요"))
// multiply_5(num)

// function sum_average(num1,num2,nu3){
//     let sum = num1 + num2+ num3
//     let avg = sum/3
//     alert("합계: " + sum + "\n" + "평균: " + avg   )
// }
// let num1 = Number(prompt("첫번째 숫자를 입력해 주세요"))
// let num2 = Number(prompt("두번째 숫자를 입력해 주세요"))
// let num3 = Number(prompt("세번째 숫자를 입력해 주세요"))
// sum_average(num1,num2,num3)
// let i = 19;
// if( i == 19 ){
//     console.log("19살이면 성인입니다.")
// }else if( if >=)