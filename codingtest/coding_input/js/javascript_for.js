// TODO: 1251 ~ 1261

// TODO: 1251
// 1부터 100까지 공백으로 띄워 하나씩 출력하세요.
// TODO: 1251 정답
// let j = " "
// for(let i = 1; i <= 100; i++){
//     j = j + i + " "
// }
// console.log(j)
// TODO: 1252
// 어떤 수 n을 입력으로 받아 1부터 n까지의 숫자를 출력하시오.
// TODO: 1252 정답
// let a = Number(prompt("숫자를 입력하세요"))
// for(let i = 1; i <= a; i++){
//     console.log(i)
// }
// TODO: 1253
// 어떤 두 수 a, b가 있을 때 두 수 사이의 모든 정수를 오름차순으로 출력하시오.
// TODO: 1253 정답
// let a = Number(prompt("숫자 1번 입력하세요"))
// let b = Number(prompt("숫자 2번 입력하세요"))
// let start = Math.min(a,b)
// let end = Math.max(a,b)
// for(start; start <= end; start++){
//     console.log(start)
// }
// TODO: 1254
// 시작 알파벳과 마지막 알파벳을 입력받아 그 두 알파벳 사이의 모든 알파벳을 출력하시오.
// TODO: 1254 정답
// let a = prompt("알파벳 입력").charCodeAt();
// let b = prompt("알파벳 입력").charCodeAt();
// for( a; a<=b; a++){
//     let input2 = String.fromCharCode(a);
//     console.log(input2)
// }
// TODO: 1255
// 소수 둘째 자리의 두 실수 a와 b가 입력으로 주어진다.
// a와 b사이의 수를 0.01간격으로 오름차순으로 출력하시오.
// 예)5.67 5.73  ==> 5.67 5.68 5.69 5.70 5.71 5.72 5.73
// TODO: 1255 정답
// let a = Number(prompt("소수 둘째자리 실수 입력"))
// let b = Number(prompt("소수 둘째자리 실수 입력"))
// let start = Math.ceil(Math.min(a,b)*100)
// console.log(start)

// let end = Math.ceil(Math.max(a,b)*100)
// console.log(end)
// for(start; start <= end; start++){
//     console.log("start",start);
//     console.log(start/100)
// }
// TODO: 1256
// 별(*)을 n개 만큼 출력한다.
// TODO: 1256 정답
// let a = Number(prompt("숫자 입력"))
// let result = ""
// for(let i =1;i<= a; i++){
//     result = result + "*"
// }
// console.log(result)
// TODO: 1257
// 시작수와 마지막 수가 입력되면
// 시작수부터 마지막 수까지의 모든 홀수를 출력하시오
// TODO: 1257 정답
// let a = Number(prompt("숫자 1번 입력하세요"))
// let b = Number(prompt("숫자 2번 입력하세요"))
// let start = Math.min(a,b)
// let end = Math.max(a,b)
// let result = ""

// for(start; start <= end; start++){
//     if(start % 2 === 1){
//         result =result +" "+ start
//     }
// }
// console.log(result)
// TODO: 1258
// 정수 n이 입력으로 들어오면 1부터 n까지의 합을 구하시오.
// TODO: 1258 정답
// let a = Number(prompt("숫자 1번 입력하세요"))
// let result = 0
// for(let i =1;i<= a; i++){
//     result = result + i
// }
// console.log(result)
// TODO: 1259
// 1부터 n까지의 수 중 짝수의 합을 구하시오.
// TODO: 1259 정답
// let a = Number(prompt("숫자 1번 입력하세요"))
// let result = 0
// for(let i =1;i<= a; i++){
//     if(i % 2 ==0){
//         result = result + i
//     }
// }
// console.log(result)
// TODO: 1260
// 어떤 수 a, b가 주어진다.
// a와 b의 관계는 a <= b 이다.
// a에서 b까지의 수 중 3의 배수만 더하여 출력하시오.
// TODO: 1260 정답
// let a = Number(prompt("숫자 1번 입력하세요"))
// let b = Number(prompt("숫자 2번 입력하세요"))
// let result = 0
// for(let a =1;a<= b; a++){
//     if(a % 3 ==0){
//         result = result + a
//     }
// }
// console.log(result)
// TODO: 1261
// 10개의 수가 입력된다.
// 10개의 수 중 5의 배수를 하나만 출력한다.
// 만약 5의 배수가 없다면 0을 출력한다.
// TODO: 1261 정답
// let b = null;
// for(let i = 1; i <= 10; i++){
//     let a = Number(prompt("숫자 1번 입력하세요"))
//     if(a % 5 ===0){
//         if(b === null){
//             b = a
//         }
//     }
// }
// if(b === null){
//     b = 0;
// }
// console.log(b)
// TODO: 1265 ~ 1284, 1286
// TODO: 1265
// 고블린 파이터 동우는 구구단에 관심이 많다.
// 구구단의 원하는 단을 입력하면 그 단의 구구단이 출력되게 하시오.
// TODO: 1265 정답
// let a = Number(prompt("숫자를 입력하세요"))
// for(let i = 1; i<=9; i++){
//     console.log(a + " * " + i + " = " + a*i)
// }
// TODO: 1266
// 수의 개수  n이 주어지고, 그 다음 줄에 무작위로 n개의 정수가 입력된다.
// n개의 수의 합을 출력하시오.
// TODO: 1266 정답
// let a = Number(prompt("숫자를 입력하세요"))
// let result = ""
// for(let i = 0; i < a; i++){
//     result = Math.floor(Math.random()*101) + " " +result
// }
// console.log(result)
// TODO: 1267
// 수의 개수 n이 주어지고, 그 다음 줄에 무작위로 n개의 자연수가 입력된다.
// 그 n개의 수 중에서 5의 배수만 골라 합을 출력하시오
// TODO: 1267 정답
// let a = Number(prompt("숫자를 입력하세요"))
// let arr = new Array(a)
// let result = ""
// let result2 = 0
// for(let i = 0; i < a; i++){
//     arr[i]= Math.floor(Math.random()*1001)
//     result = arr[i] + " " + result
//     if(arr[i] % 5 === 0){
//         result2 = result2 + arr[i]
//     }
// }
// console.log(result)
// console.log(result2)
// 배열 X
// let a = Number(prompt("숫자를 입력하세요"))
// let result = ""
// let result2 = 0
// for(let i = 0; i < a; i++){
//     result = Math.floor(Math.random()*1001) + " " +result
// }
// console.log(result)
// result =result.split(" ")
// for(let i = 0; i < a; i++){
//     if(result[i] % 5 ===0){
//         result2 =result2 + Number(result[i])
//     }
// }
// console.log(result2)
// TODO: 1268
// 수의 개수 n이 주어지고, 그 다음 줄에 무작위로 n개의 정수가 입력된다.
// 그 n개의 수 중에서 홀수의 개수를 출력하시오.
// TODO: 1268 정답
// let a = Number(prompt("숫자를 입력하세요"))
// let arr = new Array(a)
// let result = ""
// let result2 = 0
// for(let i = 0; i < a; i++){
//     arr[i]= Math.floor(Math.random()*1001)
//     result = arr[i] + " " + result
//     if(arr[i] % 2 === 1){
//         result2++
//     }
// }
// console.log(result)
// console.log(result2)
// TODO: 1269
// 영희는 수열에 대한 공부를 하고 있다.
// 하지만 영희는 수학을 잘 못해서 수열을 어려워하고 있어 프로그래밍으로 해결하려고 한다.
// 시작 값(a), 곱할 값(b), 더할 값(c), 몇 번째 항인지 나타내는 정수(n)이 입력으로 주어질 때, 수열의 n번째 항의 값을 구하시오.
// 예를 들어 시작값이 2, 곱할값이 -1, 더할 값이 3이고 5번째 항의 값을 구한다면,
// 1번째 항 : 2
// 2번째 항 : 2 * (-1) + 3 = 1
// 3번째 항 : 1 * (-1) + 3 = 2
// 4번째 항 : 2 * (-1) + 3 = 1
// 5번째 항 : 1 * (-1) + 3 = 2
// a * b + c
// 이므로 5번째 항의 값은 2이다.
// TODO: 1269 정답
// let a = Number(prompt("시작값를 입력하세요"))
// let b = Number(prompt("곱할값를 입력하세요"))
// let c = Number(prompt("더할값를 입력하세요"))
// let n = Number(prompt("반복할 횟수를 입력하세요"))
// let result = a
// console.log(result)
// let d = 0
// for(let i = 1; i < n; i++){
//     d = a*b+c
//     result = a + " * " + b + " + " + c + " = " + d
//     console.log(result)
//     a = d
// }
// console.log( a )
// TODO: 1270
// 구글 입사 시험으로 1 ~ 1,000,000까지 1의 개수를 묻는 문제가 나온적이 있다.
// 우리는 이 문제를 풀기에는 아직 힘이 든다.
// 우리는 이 문제를 조금 쉽게 바꾸어 풀려고한다.
// 어떤 수 n이 주어지면 1부터 n까지의 수 중 맨 마지막 자리에 1이 몇 번 들어 있는지 알아내는 프로그램을 작성하시오.
// TODO: 1270 정답
// let n = Number(prompt("반복할 횟수를 입력하세요"))
// let a = 0
// count = 0
// for(let i = 1; i <= n; i++){
//     a = Math.floor(i/10)
//     if(i - (10*a) === 1){
//         count++
//     }
// }
// console.log(count)
// TODO: 1271
// 입력의 개수 n이 입력되고 n개의  데이터가 입력된다.
// 이 n개의 데이터 중 최댓값을 출력한다.
// TODO: 1271 풀이
// let n = Number(prompt("데이터 개수를 입력하세요"))
// let arr = new Array(n)
// let result = 0;
// for(let i = 0; i < n; i++){
//         arr[i]= Math.floor(Math.random()*1001)
//         console.log(arr[i])
//         if(arr[i] >result){
//             result = arr[i]
//         }
// }
// console.log(result)
// TODO: 1272
// 근제는 대기업 CSH의 회장이다.
// 최근 기업의 이미지가 좋지 않아 근제는 가난한 사람들에게 기부를 하려고 한다.
// 그런데 근제는 특이한 방법으로 기부를 했는데, 기부할 사람들을 번호 순으로 일정한 규칙에 따라 돈을 준다고 한다.
// 규칙은 다음과 같다
// 1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60, 7, 70, 8, 80, 9, 90, 10, 100, 11, 110, 12, 120, ...
// 한편, 가난한 존과 밥은 돈을 받기 위해 신청을 했다.
// 존의 번호(k), 밥의 번호(h)가 주어질때 존과 밥이 받는 기부금의 합을 구하시오.
// TODO: 1272 풀이
// let k = Number(prompt("번호를 입력하세요"));
// let h = Number(prompt("번호를 입력하세요"));
// let arr = [k, h];
// let count = 0;
// let sum = 0;
// for (let a = 0; a < 2; a++) {
//   if (arr[a] % 2 === 0) {
//     sum = sum + (arr[a] / 2) * 10;
//   } else {
//         for (let i = 1; i <= arr[a]; i++) {
//         if (i % 2 === 1) {
//         count++;
//       }
//     }
//     sum = sum + count;
//     count = 0;
//   }
// }
// console.log(sum)
// TODO: 1273
// 자연수 N이 주어지면 N의 약수를 오름차순으로 모두 출력하시오.
// TODO: 1273 정답
// let n = Number(prompt("수를 입력하세요"))
// let result = ""
// for(let i = 1; i<= n; i++){
//     if(n % i == 0){
//         result =result + " " + i
//     }
// }
// console.log(result)
// TODO: 1274
// 소수란, 약수가 1과 자기 자신 두 개 뿐인 수를 말한다.
// 어떤 수가 입력되면 그 수가 소수인지 판단하시오.
// TODO: 1274 정답
// let n = Number(prompt("수를 입력하세요"))
// let result = 0
// for(let i = 1; i<= n; i++){
//     if(n % i == 0){
//         result =result + "," + i
//     }
// }
// let arr = result.split(",")
// console.log(result)
// if(arr.length === 3 ){

//     console.log("prime")
// }else{
//     console.log("not prime")
// }
// TODO: 1275
// 어떤 수 n과 k가 있다.
// n과 k의 관계는 다음과 같다.
// nk
// nk는 n을 k번 곱한 것을 말한다.
// 입력으로 n과 k가 주어지면 결과를 출력한다.
// TODO: 1275 정답
// let n = Number(prompt("수를 입력하세요"))
// let k = Number(prompt("제곱수를 입력하세요"))
// let result = 1
// for(let i =1; i<=k; i++){
//     result = result * n
// }
// console.log(result)
// TODO: 1276
// 팩토리얼(!)은 다음과 같이 정의된다.
// n! = n * (n-1) * (n-2) * ... * 2 * 1
// 즉, 5! = 5 * 4 * 3 * 2 * 1 = 120 이다.
// n이 입력되면 n!의 값을 출력하시오.
// TODO: 1276 정답
// let n = Number(prompt("수를 입력하세요"))
// result = 1
// for( n; n >= 1; n--){
//     result = result *n
// }
// console.log(result)
// TODO: 1277
// 첫 줄에 데이터의 개수 N(N은 홀수)이 입력되고, 그 다음 줄에 N개의 데이터가 입력된다.
// 여기서 첫번째 데이터, 중간 데이터, 마지막 데이터를 출력하시오.
// TODO: 1277 정답
// let n = Number(prompt("홀수를 입력하세요"));
// let arr = new Array(n);
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("저장할 수 입력"))
//     console.log(arr[i])
// }
// console.log("첫번째 배열", arr[0])
// console.log("마지막 배열", arr[arr.length-1])
// console.log("가운데 배열", arr[Math.ceil((arr.length-1)/2)])
// TODO: 1278
// 어떤 숫자가 입력되면 그 숫자가 몇 자릿수 숫자인지 알아내는 프로그램을 작성하시오.
// TODO: 1278 정답
// let n = Number(prompt("숫자를 입력하세요"));
// let i = 1;
// let a = 1;
// while (true) {
//   if (n / a > 1) {
//     a = a * 10;
//     i++;
//   } else {
//     console.log(i);
//     break;
//   }
// }
// TODO: 1279 
// 두 자연수 a, b 사이의 구간에 대해서
// 홀수는 더하고 짝수는 뺀다음의 합을 출력하시오
// a = 5, b=10 일 경우, 5 - 6 + 7 - 8 + 9 - 10 = -3
// TODO: 1279 정답 
// let a = Number(prompt("숫자를 입력하세요"));
// let b = Number(prompt("숫자를 입력하세요"));
// let result = 0
// for(a; a <= b; a++){
//     if(a%2 ===0){
//         result =result - a
//     }else{
//         result = result + a
//     }
// }
// console.log(result)
// TODO: 1280 
// 두 자연수 a, b 사이의 구간에 대해서
// 홀수는 더하고 짝수는 빼는 식을 보여준 후 결과를 출력하시오.
// 단, 결과가 양수이면 +를 붙이지 않는다.
// 예)
// a = 5, b=10 일 경우, +5-6+7-8+9-10=-3
// a = 6, b=9 일 경우, -6+7-8+9=2
// TODO: 1280 정답
// let a = Number(prompt("숫자를 입력하세요"));
// let b = Number(prompt("숫자를 입력하세요"));
// let result = 0
// let sum = " "
// for(a; a <= b; a++){
//     if(a%2 ===0){
//         sum = sum + "-" + a
//         result =result - a
//     }else{
//         sum = sum + "+" + a
//         result = result + a
//     }
// }
// console.log(sum + ": " +result)
// TODO: 1281
// 자연수 a, b 사이의 구간에 대해서 홀수는 더하고 짝수는 빼는 식을 보여준 후 결과를 출력하시오.
// // TODO: 1281 정답
// let a = Number(prompt("숫자를 입력하세요"));
// let b = Number(prompt("숫자를 입력하세요"));
// let result = 0
// let sum = " "
// for(a; a <= b; a++){
//     if(a%2 ===0){
//         sum = sum + "-" + a  
//         result =result - a
//     }else{
//         sum = sum + "+" + a 
//         result = result + a
//     }
// }
// console.log(sum + ": " +result)
// TODO: 1282
// n이 입력되면 k를 빼서 제곱수를 만들 수 있는 k를 구하고,
// 그 제곱수에 루트를 씌운 수(제곱근)t를 구하여라.
// 이 때 k는 여러가지가 될 수 있는데 가장 작은 k를 출력한다.
// TODO: 1282 정답
// let n = Number(prompt("숫자 입력하시오"))
// // 빼주는 값
// let k =0;// 빼주는 값
// let t =1;//제곱근
// let a = 0
// // 힌트 : Math.sqrt(값)
// // let numbers = [1,2,3,4,5];
// // let result= numbers.map(Math.sqrt)
// let bool = true
// while(k < n && bool){
//     k++
//     a= n-k
//     if(Math.sqrt(a) % 1 === 0 ){

//         bool = false
//         //a.sqrt 값이 정수일 경우
//     }
// }
// console.log(k,Math.sqrt(a))
// TODO: 1283
// gbs라는 개미 투자자가 주식에 투자하려고 합니다.
// 이 사람이 투자한 돈의 액수와, 그 주식의 하루간의 변동을 퍼센트로 알 때, 이 사람의 순수익과 이득/손해 판단을 출력하세요.
// let c = Math.floor(Math.random()*(200-0)+1)-100 -100 ~ 100 랜덤 변수

// TODO: 1283 정답
// let a = Number(prompt("투자 금액을 입력하세요 100 ~ 10000"))
// let b = Number(prompt("투자 날짜를 입력하세요 1 ~ 10"))
// let money = a // 원금
// for(let i = 1 ; i <= b; i++){
//     let c = Number(prompt("등락폭 입력"))
//     a = a + ((a * c)/100)
//     console.log(i + "일차" + "이자율" + c + "금액" + a)
// }
// a = Math.round(a)
// money =  a - money
// if(money > 0){
//     console.log(money)
//     console.log("good")

// }else if(money === 0){
//     console.log(money)
//     console.log("same")
// }else{
//     console.log(money)
//     console.log("bad")

// }
// TODO: 1284
// 두 소수의 곱을 암호로 사용하는 알고리즘은 큰 수의 소인수분해가 어렵기 때문에 안전하다고 알려져있다.
// 그렇지만, 만약 두 소수를 잊어버리면 어떻게 될까? 굉장히 난감할 것이다.
// 이에 대비해 어떤 수(n)가 입력되면 두 소수의 곱으로 나타낼 수 있으면 두 소수를 오름차순으로 출력하고,
// 그렇지 않으면 "wrong number"를 출력하는 프로그램을 작성하시오
// TODO: 1284 정답
// let n = Number(prompt("수를 입력하세요"));
// let arr = new Array(0); // 약수 저장 배열
// let bool = true
// for (let i = 1; i <= Math.sqrt(n); i++) {
//   //약수일때 실행
//   if (n % i === 0) {
//     // 약수 저장
//     arr.push(i);
//     arr.push(n / i);
//   }
// }

// for (let i = 0; i <= arr.length - 2; i++) {
//   let count1 = 0; //약수 개수 구하기
//   let count2 = 0; //약수 개수 구하기
//   // 약수 소수 판별
//   for (let j = 1; j <= Math.sqrt(arr[i]); j++) {
//     if (arr[i] % j === 0) {
//       count1 = count1 + 2;
//     }
//   }

//   if (count1 === 2) {
//     for (let k = 1; k <= Math.sqrt(arr[i + 1]); k++) {
//       if (arr[i + 1] % k === 0) {
//         count2 = count2 + 2;
//       }
//     }
//   }

//   if (count1 === 2 && count2 === 2) {
//     console.log(arr[i], arr[i + 1]);
//     bool = false
//     break;

//   }
//   i++
// }
// if(bool){
//     console.log("소수 곱 아님")
// }
// TODO: 1286
// 5개의 정수들의 최댓값과 최솟값을 구하는 프로그램을 작성하라.
// TODO: 1286 정답
// let arr = new Array(5)
// let b = null
// for(let i = 0; i < arr.length; i++){
//     let input = Number(prompt("숫자 입력"))
//     arr[i] = input
// }
// let max = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4])
// let min = Math.min(arr[0],arr[1],arr[2],arr[3],arr[4])
// console.log(max,min)
// TODO: 1294 ~ 1295, 1675
// TODO: 1294
// ※ 씨저의 암호 원리는 앞의 문제를 참고하세요.
// 대현이는 씨저의 암호 방식을 이용하여 문장을 만들려고 한다.
// never trust brutus 를 씨저의 암호로 바꾸면 qhyhu wuxvw euxwxv 이다.
// 그런데 집중력이 약한 대현이는 하나 하나 찾아서 암호로 바꾸는데 어려움을 겪고 있다.
// 우리가 대현이를 위해 평문을 씨저의 암호문으로 바꾸는 프로그램을 만들어주자.
// TODO: 1294 정답
// let input = prompt("문자를 입력하세요");
// let ceasar = String(input)
// let ceasarNum = new Array(ceasar.length)
// let output = ""
// for(let i = 0; i < ceasar.length; i++){
//     ceasarNum[i] = (ceasar[i]).charCodeAt()
//     if(ceasarNum[i]  >= 100){
//         ceasarNum[i] = ceasarNum[i] -3
//     }else if(ceasarNum[i] === 99){
//         ceasarNum[i] = 122;
//     }else if(ceasarNum[i] === 98){
//         ceasarNum[i] = 121;
//     }else if(ceasarNum[i] === 97){
//         ceasarNum[i] = 120;
//     }
//     let input3 = String.fromCharCode(ceasarNum[i]);
//     output = output + input3 + ""
// }
//     console.log(output)
// TODO: 1295
// 주어지는 문장의 대문자를 소문자로, 소문자를 대문자로 변경하는 프로그램을 작성하라.
// TODO: 1295 정답
// let input = prompt("문자를 입력하세요");
// let inputArr = String(input)
// let output = ""
// for(let i = 0; i < inputArr.length; i++){
//     if (inputArr[i] === inputArr[i].toUpperCase()){
//         output = output + inputArr[i].toLowerCase()
//     }else{
//         output = output + inputArr[i].toUpperCase()
//     }
// }
// console.log(output)

// TODO: 1675
// 암호학에서 시저 암호(Caesar cipher)는 가장 오래된 암호 중 하나이고, 가장 대표적인 대치(substitution) 암호로서 평문 문자를 다른 문자로 일대일 대응시켜 암호문을 만들어 낸다.
// 시저 암호는 알파벳을 3글자씩 밀려서 쓰면서 문장을 만들었다. 실제 시저는 부하인 브루투스에게 암살되기 전에 키케로에게 다음과 같은 암호문을 보냈다고 한다.
// TODO: 1675
// let bool = true;
// let output = "";
// let inputNum = 0;
// while (bool) {
//   let input = prompt("문자를 입력하세요");
//   let ceasar = String(input)
//   inputNum = ceasar.charCodeAt();
//   if (inputNum >= 100) {
//     inputNum = inputNum - 3;
//   } else if (inputNum === 99) {
//     inputNum = 122;
//   } else if (inputNum === 98) {
//     inputNum = 121;
//   } else if (inputNum === 97) {
//     inputNum = 120;
//   } else {
//     bool = false;
//   }
//   let input2 = String.fromCharCode(inputNum);
//   output = output + input2 + "";
// }
// console.log(output);