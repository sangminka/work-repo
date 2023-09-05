// TODO 1402
// 두 수를 거꾸로 출력하기..
// 세 수를 거꾸로 출력하기...
// 이런 문제들은 쉽게 풀 수 있었다.
// 이번에는 데이터의 개수가 n개가 들어오고, n개의 데이터를 거꾸로 출력하는 프로그램을 작성하시오.
// TODO 1402 정답
// let n = Number(prompt("데이터 개수 입력"))
// let arr = new Array(n)
// for(let i =0; i <arr.length; i++){
//     let a = Number(prompt("숫자입력"))
//     arr[i] = a
// }
// console.log(arr.reverse())
// TODO 1403
// k개의 숫자를 입력받고 그 숫자들을 두번 출력하시오.
// TODO 1403 정답
// let n = Number(prompt("데이터 개수 입력"))
// let arr = new Array(n)
// for(let i =0; i <arr.length; i++){
//     let a = Number(prompt("숫자입력"))
//     arr[i] = a
// }
// for(let j = 1; j <= 2; j++){
//     for(let i =0; i <arr.length; i++){
//         console.log(arr[i])
//     }
// }
// TODO: 1405, 1407 
// TODO 1405
// n개의 숫자가 입력되면,
// n개의 숫자를 왼쪽으로 하나씩 돌려서 출력하시오.
// TODO 1405 정답
// let result =""
// let n = Number(prompt("데이터 개수 입력"))
// let arr = new Array(n)
// for(let i =0; i <arr.length; i++){
//     let a = Number(prompt("숫자입력"))
//     arr[i] = a
// }
// for(let i = 1; i <=5; i++){
//     for(let j = 0; j < arr.length;j++){
//         result = result + arr[j] + " "
//     }
//     result = result + "\n"
//     arr.push(arr[0])
//     arr.shift()
// }
// console.log(result)
// TODO 1407
// 길이(글자수)가 100이하인 문자열을 입력받아 공백을 제거하고 출력하시오.
// TODO 1407 정답
// let result =""
// let a = prompt("문자열 입력")
// let b = a.split(" ")
// for(let i = 0; i < b.length; i++){
//     result = result + b[i]

// }
// console.log(result)
// TODO: 1409 ~ 1412 
// TODO 1409
// 주현이는 5살이라서 아직 기억력이 좋지 않은 편이다.
// 주현이 엄마는 주현이의 기억력을 향상시키기 위해 매일 훈련을 시킨다.
// 어느 날, 주현이 엄마는 주현이에게 10개의 숫자를 차례대로 말한 다음 "k번째 숫자는 뭘까요?"하고 물어본다.
// 이번에는 주현이가 좋아하는 '또봇'이라는 로봇변신 자동차가 상품으로 걸려있다.
// 주현이가 '또봇'을 가질 수 있도록 프로그래밍하시오.
// TODO 1409 정답
// let arr = new Array(10)
// for(let i = 0; i < arr.length; i++){
//     let a = Number(prompt("숫자 입력"))
//     arr[i] = a
// }
// let b = Number(prompt("몇번쨰 숫자를 출력할까요"))
// console.log(arr[b - 1]);
// TODO 1410
// 프로그래밍을 할 때 가장 중요한 것 중 하나가 괄호의 개수를 맞추는 것이다.
// 즉, 여는 괄호가 있으면 항상 닫는 괄호가 있고, 닫는 괄호가 있으면 여는 괄호도 있어야 한다.
// 올바른 괄호를 확인하기 위해 가장 기본적인 방법 중 하나는 여는 괄호와 닫는 괄호의 개수를 세는 것이다.
// 소괄호로 이루어진 문자열을 주어지면 괄호의 개수를 출력하는 프로그램을 작성하시오
// TODO 1410 정답
// let a = prompt("문자열 입력")
// let b = a.split("")
// let left = 0
// let right = 0
// for(let i = 0; i < b.length; i++){
//     if(b[i] == "("){
//         left++
//     }else if(b[i] == ")"){
//         right++
//     }
// }
// console.log(left,right)
// TODO 1411
// 우리는 1부터 N까지의 숫자가 차례대로 적힌 N장의 카드 묶음을 가지고 있다.
// 그런 데 이 카드 묶음을 옮기는 중 실수로 땅에 떨어뜨려 그 중 한 장을 잃어버렸다.
// 여러 분은 땅에 떨어진 카드 묶음을 읽어서 빠진 하나의 카드 번호를 찾아 출력해야 한다.
// TODO 1411 정답
// let n = Number(prompt("데이터 개수 입력"))
// let arr = new Array(n-1)
// let sum = 0
// for(let i = 1; i <= n; i++){
//     sum = sum  +i
// }
// console.log(sum)

// for(let i =0; i <arr.length; i++){
//     let a = Number(prompt("숫자입력"))
//     arr[i] = a
//     sum = sum - arr[i]
// }
// console.log(sum)
// TODO 1412
// TODO 1412 정답
// let str = prompt("입력");
// let char = "a".charCodeAt(0);

// for (let i = 0; i < 26; i++) {
//   let count = 0;
//   for (let j = 0; j < 90; j++) {
//     if (String.fromCharCode(char + i) == str[j]) {
//       count++;
//     }
//   }
//   console.log(String.fromCharCode(char + i) + " : " + count);
// }

// TODO 1416
// 어떤 10진수 n이 주어지면 2진수로 변환해서 출력하시오.
// TODO 1416 정답
// let a = Number(prompt("숫자를 입력하세요"))
// console.log(a.toString(2))

// TODO 1420
// 민준이는 뒤늦게 정보 과목의 중요성을 깨닫고 학습실에서 공부를 하고 있습니다.
// 기초적인 공부가 부족하여 아주 쉬운 문제부터 어려움을 겪은 민준이는 친구에게 물어보려고 합니다.
// 가장 잘 하는 친구에게 물어보기는 질문의 내용이 너무 부끄러워서 n명의 친구들 중 정보 성적이 세 번째로 높은 친구에게 묻고자 합니다.
// 친구들의 성적은 모두 다릅니다.
// n명의 친구들의 이름과 정보 성적이 주어졌을 때, 성적이 세 번째로 높은 학생의 이름을 출력해 주세요
// TODO 1420 정답

// let n = Number(prompt("몇명을 친구 중에 선택합니까"))
// let num = new Array(n)
// let str = ""

// for(let i = 0; i <n; i++){
//   let a = prompt("이름과 점수 입력")
//   str = str + a + " "
// }
// let arr = str.split(" ")
// // 0 2 4 6 8 이름
// // 1 3 5 7 9 점수
// for(let i = 0; i<n; i++){
//   num[i] = Number(arr[(i*2) + 1])
        
// }

// for(let i = 0; i<n; i++){
//   if(arr[(i*2) + 1] == num2){
//     console.log(arr[i])
//   }
// }
// TODO 1425
// A중학교에 첫 발령을 받은 B교사는 1학년 1반 담임을 맡게 되었다.
// 기대를 안고 첫 출근한 B교사는 너무 설렌 나머지 학생들이 등교하기도 전에 교실에 가서 학생들이 오기만을 기다리고 있었다.
// 그리고 제일 먼저 무슨 일을 해야 될지 생각하던 중 학생들 자리 배치를 우선적으로 해야겠다고 생각했다.
// 여러 가지 자리 배치 방법을 고려하다가 학생들의 키가 작은 순서대로 앞에서부터 앉히는 것이 제일 좋은 방법이라고 결정하게 되었다.
// 예를 들어, 160, 165, 164, 165, 150, 165, 168, 145, 170의 학생들 키가 주어지고 한 줄에 6명씩 앉는다면 다음과 같이 앉으면 될 것이다.
// 145	150	160	164	165	165
// 165	168	170			
// 왼쪽 위부터 차례대로 키 순서대로 앉으며 한 줄이 다 찼을 경우 다음 줄로 넘어간다. 다음 줄도 마찬가지로 왼쪽부터 채운다.
// 이와 같이 학생의 키순서대로 자리를 배치하는 프로그램을 작성하시오.
// TODO 1425 정답
// let n = Number(prompt("학생수 입력"))
// let c = Number(prompt("한줄에 앉을수 있는 학생수"))
// let line = Math.ceil(n/c)
// let arr = new Array(c*n)
// let result =""
// for(let i = 0; i < n; i++){
//   let a = Number(prompt("키 입력"))
//   arr[i] = a 
// }
// arr.sort(function(a,b){
//   return a-b
// })
// arr.fill(" ",n, c*n) 

//   for(let i = 0; i < line*c; i++){
//     if(i % c == 0){
//       result = result + "\n"
//     }
//     result = result + arr[i] + " "
//   }
// console.log(result)
// TODO 1430
// 주현이 엄마는 주현이를 영재로 키우기 위해 매일 혹독한 기억력 테스트를 하고 있다.
// N개의 숫자를 먼저 말해주고, M개의 질문을 하면서 그 숫자가 있었는지 없었는지 테스트한다.
// 만약 있었다면 1을 출력하고, 없었다면 0을 출력한다.
// 이번에는 주현이가 좋아하는 3단 합체 변신로봇 '또봇 트라이탄'이 선물로 걸려있다.
// 주현이를 도와 줄수 있는 프로그램을 만드시오.
// TODO 1430 정답
let n = Number(prompt("숫자 개수"))
let arr = new Array(n)
for(let i = 0; i < arr.length; i++){
  let a = Number(prompt("숫자 입력"))
  arr[i] = a 
}

let m = Number(prompt("질문 개수"))
let arr2 = new Array(m)
for(let i = 0; i < arr2.length; i++){
  let a = Number(prompt("숫자 입력"))
  arr2[i] = a 
}
for(let i = 0; i<arr.length; i++){
  for(let j = 0; j < arr2.length; j++){
    if(arr[i] === arr[j]){
      console.log(1 + " ")
    }
  }
}

