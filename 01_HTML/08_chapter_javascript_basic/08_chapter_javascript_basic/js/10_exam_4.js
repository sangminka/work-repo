// 1) 1부터 100까지 출력하기
// for 사용
// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }
// 2) 1 부터 n까지 출력하기
// 입력 : 5
// 출력 : 1 2 3 4 5
// let num = Number(prompt("숫자 입력"));
// let result = "";
// for(let i = 1; i <= num; i++){
//     result = result + i + " "
// }
// console.log(result);
// 3) a부터 b까지 출력하기
// 입력 예시 1: 8 입력 예시 2 : 3
// let result1="";
// let num1 = Number(prompt("숫자 입력1"));
// let num2 = Number(prompt("숫자 입력2"));
// if(num1 > num2){
//     for(num2; num2 <= num1; num2++){
//         result1 = result1 + num2 + " "
//     }
// }else{
//     for(num1; num1 <= num2; num1++){
        
//         result1 = result1 + num1 + " "
//     }
// }
// console.log(result1)

// 4) 별출력
// 입력 : 5
// 출력: *****
// let num = prompt("정수 입력");
// let result = "";
// for(let i = 0; i < num; i++){
//     result = result + "*";
// }
// console.log(result);
// 5) 1~10 까지의 합계를 구해서 아래와 같이 화면에 출력해 보세요
// 출력 : "1~10"까지의 합계 : 55"
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
}
console.log('"1~10까지의 합계 : ' + sum + '"')