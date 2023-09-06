// TODO: 1615, 1620

// TODO: 1615
// 어떤 자연수 n이 있을 때, d(n)을 n의 각 자릿수 숫자들과 n 자신을 더한 숫자라고 정의하자.
// 예를 들어 d(91) = 9 + 1 + 91 = 101 이 때, n을 d(n)의 제네레이터(generator)라고 한다.
// 위의 예에서 91은 101의 제네레이터이다.
// 어떤 숫자들은 하나 이상의 제네레이터를 가지고 있는데, 101의 제네레이터는 91 뿐 아니라 100도 있다.
// 그런데 반대로, 제네레이터가 없는 숫자들도 있으며, 이런 숫자를 인도의 수학자 Kaprekar가 셀프 넘버(self-number)라 이름 붙였다.
// 예를 들어 1,3,5,7,9,20,31 은 셀프 넘버 들이다.
// 시작 값(a)과 마지막 값(b)가 입력되면 두 수 사이의 셀프 넘버들의 합을 출력하시
// TODO: 1615 정답
//제네레이터 구하는 함수
// function generator(a){
//     return (a + Math.floor(a/1000) + Math.floor((a%1000)/100) + Math.floor((a%100)/10) + Math.floor(a%10)) ;
// }
// //반복문 과 함수를 이용해 5000까지 제네레이터를 배열에 저장
// let arr = new Array(5000);
// for(let i =1; i <= 5000; i++){
//     arr[i-1] = generator(i)
// }

// // 시작값과 마지막 값 의 넣어 배열에 저장된 수와 비교 셀프넘버 구하기
// let a = Number(prompt("시작값 입력"))
// let b = Number(prompt("마지막 값 입력"))
// let selfNum = new Array(0) //selfNum 저장
// let sum = 0; //selfNum 함
// for(a ;  a<= b; a++){
//     let count = 0; //제네레이터 수
//     for(let i = 0; i <= arr.length -1; i++){
//         if(a === arr[i]){
//             count++
//         }
//         if(count > 0){
//             break;
//         }

//     }
//     if(count === 0){
//         selfNum.push(a)
//     }
// }
// //self Num 합구하기
// for(let i = 0; i < selfNum.length; i++){
//     sum = sum+ selfNum[i]
// }
// console.log(sum);

// TODO: 1620
// 어떤 수 n이 입력되면 n의 각 자릿수의 합이 한 자리가 될때까지 계산하여 출력하시오.
// 예) 1234567
// 1234567 → 1+2+3+4+5+6+7 = 28 → 2 + 8 = 10 → 1 + 0 = 1
// TODO: 1620정답
// 자릿수 합구하는 함수
// n = 입력 a = 자리수
// function digitSum(n) {
//   return n%10 +Math.floor(n/10)
// }
// let result = 0;
// let n = Number(prompt("숫자를 입력하세요"));

// while (n >= 10) {
//   n = digitSum(n);
//   console.log(n);
// }
// console.log(n);