// 1) for문 안에 if문으로 짝수 체크해서 더하기
// 입력 : 없음
// 출력 : 1~100 까지 합계 구하는데 짝수의 합계를 구해서 출력하세요.

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     if(i%2 === 0){
//         sum = sum + i;
//     }
// }
// document.querySelector("#output").innerHTML = sum;

// 2) 입력 : 없음
// 출력 : 1~100 까지 합계 구하는데 3의 배수의 합계를 구해서 출력하세요.

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     if(i%3 === 0){
//         sum = sum + i;
//     }
// }
// document.querySelector("#output").innerHTML = sum;


// 3) 1부터 n까지 합 구하기
// 엽력 : 100
// 출력 : 5050
// let num = Number(prompt("숫자입력"));
// let sum = 0;
// for(let i = 1; i <= num; i++){
//         sum = sum + i;
// }
// document.querySelector("#output").innerHTML = sum;

// 4) 10개의 수 중 5의 배수가 있으면 그중 하나만 출력하고 없다면 0을 출력한다
// 힌트 : 입력값 : let num = prompt("문자 입력").split(" ").map(number);
let num = prompt("문자 입력").split(" ").map(Number);
let result = 0;
for(let i = 0; i < num.length; i++){
    if(num[i]%5 === 0){
       result = num[i]
       break;
    }
}
document.querySelector("#output").innerHTML = result;

// for(let i = 0; i < num.length; i++){
//     if(num[i]%5 === 0){
//         document.querySelector("#output").innerHTML = num[i]
//         result++;
//        break;
//     }
//     document.querySelector("#output").innerHTML = result;
// }


// 5) 1부터 n까지 중 짝수 합 구하기
// 입력 : 5, 출력 : 6

// let num = Number(prompt("숫자 입력"));
// let sum = 0;
// for(let i = 1; i <= num; i++){
//     if(i%2 === 0){
//         sum = sum + i;
//     }
// }
// document.querySelector("#output").innerHTML = sum;

// 6)두 수 사이의 홀수 출력하기
// 입력 : 2, 입력2 : 7

// let num = Number(prompt("숫자 입력1"));
// let num2 = Number(prompt("숫자 입력2"));
// let sum = "";
// for(num; num <= num2; num++){
//     if(num%2 != 0){
//        sum = sum + " " + num;
//     }
// }
// document.querySelector("#output").innerHTML = sum;

