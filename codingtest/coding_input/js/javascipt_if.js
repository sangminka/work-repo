// TODO: 1151 ~ 1168
// TODO 1151
// 10보다 작은 수가 입력되면 small 을 출력, 10이상이면 아무것도 출력하지 마시오
// TODO 1151정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(10 > a){
//     console.log("small")
// }
// TODO 1152
// 10보다 작은 정수가 입력되면 small 을 출력, 그 이상의 수가 입력되면 big 을 출력하시오.
// TODO 1152 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(10 > a){
//     console.log("small")
// }else{
//     console.log("big")
// }

// TODO 1153
// a가 b보다 크면  > 를 출력,
// b가 a보다 크면  < 를 출력,
// a와 b가 같으면  = 를 출력한다.
// TODO 1153 정답
// let a= Number(prompt("숫자를 입력하세여"))
// let b= Number(prompt("숫자를 입력하세여"))
// if(a > b){
//     console.log(">")
// }else if(a < b){
//     console.log("<")
// }else{
//     console.log("=")
// }
// TODO 1154
// 정수 두개가 입력으로 들어오면 큰수 - 작은수의 값을 출력하시오.
// TODO 1154 정답
// let a= Number(prompt("숫자를 입력하세여"))
// let b= Number(prompt("숫자를 입력하세여"))
// let big = Math.max(a,b)
// let small = Math.min(a,b)
// console.log(big - small)
// TODO 1155
// 인학이는 숫자 7을 좋아한다.
// 어떤 정수가 입력되면 그 수가 7의 배수인지 확인하시오.
// 7의 배수일 경우 multiple를 출력하고, 7의 배수가 아니면 not multiple을 출력하시오.
// TODO 1155 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(a % 7 === 0){
//     console.log("multiple")
// }else{
//     console.log("not multiple")
// }
// TODO 1156
// 용준이와 봉찬이는 공기 놀이로 내기를 하였다.
// 만약 홀수개의 돌을 쥐게 되면 용준이가 이기게 되고, 짝수개의 돌을 쥐게 되면 봉찬이가 이기는 것으로 룰을 정하였다.
// 어떤 자연수가 입력되면  홀수이면 "odd"을 출력하고, 짝수이면 "even"을 출력하시오
// TODO 1156 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(a % 2 === 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }
// TODO 1157
// 슬기는 체육 선생님과 공던지기로 아이스크림 내기를 하게 됐다.
// 공을 던져서 50m ~ 60m 사이에 공이 들어가면 슬기가 이기게 되고, 그 외에 공이 떨어지면 체육선생님이 이기게 룰을 정했다.
// 슬기가 던진 공의 위치가 입력으로 주어지면 50이상 60이하이면 "win"을 출력하고, 그 외에는 "lose"를 출력하시오.
// TODO 1157 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(a >= 50 && a <=60){
//     console.log("win")
// }else{
//     console.log("lose")
// }
// TODO 1158
// 슬기는 지난 번 공던지기에서 져서 아이스크림을 사게되었다.
// 얼마 뒤 열받은 슬기는 체육 선생님에게 다시 한번 공던지기를 하여 아이스크림 내기를 하자고 제안하였다.
// 그런데 이번에는 불리한 슬기가 다음 룰을 제안하였다.
// 1. 공이 30m~40m나 60m~70m 에 들어오면 슬기가 이김.
// 2. 그 외의 구간에 떨어지면 체육선생님이 이김.
// 슬기가 던진 공의 위치가 입력으로 주어지면 슬기가 이기는 구간에는 "win"을 출력하고, 그 외에는 "lose"를 출력하시오.
// TODO 1158 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(a >= 30 && a <=40){
//     console.log("win")
// }else if(a >= 60 && a <=70){
//     console.log("win")
// }else{
//     console.log("lose")
// }
// TODO 1159
// 슬기는 지난 번에도 공던지기에 져서 아이스크림을 사게되었다.
// 슬기는 이미 돈이 다 떨어져서 현량이에게 돈을 빌린 상태이다.
// 이번에는 슬기가 또 다른 조건을 내걸고 체육 선생님에게 도전하게 되었다. 
// 1. 공의 위치가 50m~70m이면 슬기가 이김.
// 또는
// 2. 공의 위치가 6의 배수이면 슬기가 이김. 
// 슬기가 던진 공의 위치가 입력으로 주어지면 슬기가 이기는 구간에는 "win"을 출력하고, 그 외에는 "lose"를 출력하시오.
// TODO 1159 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if((a >= 50 && a <=70)|| a % 6 ===0){
//     console.log("win")
// }else{
//     console.log("lose")
// }
// TODO 1160
// 주원이는 월, 수, 금, 일 아르바이트를 간다.
// 다음은 요일의 순서이다.
// 1.월요일 2.화요일 3.수요일 4.목요일 5.금요일 6.토요일 7.일요일
// 요일의 번호가 입력으로 주어지면 그 날이 아르바이트 가는 날이면 "oh my god"를 가는 날이 아니면 "enjoy"를 출력하시오.
// TODO 1160 정답
// let a= Number(prompt("숫자를 입력하세여"))
// if(a % 2 === 0){
//     console.log("enjoy")
// }else{
//     console.log("oh my god")
// }
// TODO 1161
// 정수 두개가 입력으로 들어온다.
// 만약 첫번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "+"를 출력한다.
// 그리고 두번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "="을 출력하고 결과로 나오는 값이 홀수인지 짝수인지 출력한다.
// 예를들어,5 7 이 입력되면 "홀수+홀수=짝수"가 출력된다.5 6 이 입력되면 "홀수+짝수=홀수"가 출력된다
// TODO 1161 정답
// let a= Number(prompt("숫자를 입력하세여"))
// let b= Number(prompt("숫자를 입력하세여"))
// let count = 0
// let result = ""
// if(a % 2 === 0){
//     result = result + "짝수 + "
// }else{
//     result = result + "홀수 + "
//     count++
//     console.log(count)
// }
// if(b % 2 === 0){
//     result = result + "짝수 ="
// }else{
//     result = result + "홀수 ="
//     count++
//     console.log(count)

// }
// if(count === 1){
//     result = result + "홀수"
// }else{
//     result = result + "짝수"
// }
// console.log(result)
// TODO 1162
// 태어난 해, 월, 일을 입력받아 사주팔자를 보는 프로그램을 작성하시오.
// 사주를 보는 방법)
// 세 수(년,월,일)가 주어지면,  (년 - 월 + 일)에 마지막 숫자가 0이면 "대박"을 출력, 그렇지 않으면 "그럭저럭"을 출력하세요.
// TODO 1162 정답
// let a= Number(prompt("년를 입력하세여"))
// let b= Number(prompt("월를 입력하세여"))
// let c= Number(prompt("일를 입력하세여"))
// if(((a - b + c)% 10) === 0){
//     console.log("대박")
// }else{
//     console.log("그럭저럭")
// }
// TODO 1163
// 태어난 해, 월, 일을 입력받아 사주팔자를 보는 프로그램을 작성하시오.
// 사주를 보는 방법)
// 세 수(년,월,일)가 주어지면,  (년 + 월 + 일)에 100의 자리 숫자가 짝수이면 "대박"을 출력, 그렇지 않으면 "그럭저럭"을 출력하세요.
// TODO 1163 정답
// let a= Number(prompt("년를 입력하세여"))
// let b= Number(prompt("월를 입력하세여"))
// let c= Number(prompt("일를 입력하세여"))
// let d = a + b + c
// if(Math.floor(((d % 1000)/100)) % 2 === 0){
//     console.log("대박")
// }else{
//     console.log("그럭저럭")
// }
// TODO 1164
// 어떤 차의 높이가 170cm 이다.
// 이 차는 3개의 터널을 차례대로 지나게 될 것이다.
// 터널의 높이가 차의 높이보다 같거나 낮다면 차는 터널과 충돌하여 사고가 날 것이다.
// 터널의 높이가 차례대로 3개 주어지면 터널을 무사히 잘 통과하면 PASS 를 출력하고, 사고가 난다면 CRASH 를 출력하시오.
// TODO 1164 정답
// let a= Number(prompt("터널1 높이를 입력하세여"))
// let b= Number(prompt("터널2 높이를 입력하세여"))
// let c= Number(prompt("터널3 높이를 입력하세여"))
// if(a <= 170 || b <= 170 || c <=170){
//     console.log("CRASH")
// }else{
//     console.log("PASS")
// }
// TODO 1165
// 지금 1반과 2반이 축구를 하고있다.
// 축구경기 타임은 총 90분이고,
// 현재 1반이 0점, 2반이 2점인 상황에서, 1반은 경남정보고 최고의 스트라이커인 성익이를 투입하기로 결정했다.
// 성익이는 5분마다 골을 넣을 수 있는 능력을 가지고 있다.
// 만약 80분에 투입이 되면 80분에 곧바로 골을 넣게되고 85분에 골을 넣음으로서 동점이 가능하게 된다.
// (90분이되면 경기가 바로 종료되므로 골을 넣을 수 없다. 동내심판인 성빈이는 성익이가 잘 되는 것을 싫어하기 때문에 추가시간 따위는 주지 않는다. )
// 현재 경기타임과 우리팀의 득점이 입력으로 주어 질때, 성익이를 투입하면 우리팀의 최종 득점은 몇 점인지 출력하시오.
// TODO 1165 정답
// let a= Number(prompt("우리팀의 현재 득점 입력"))
// let b= Number(prompt("현재 경기 시간 입력"))
// for(b; b<90;){
//     a++
//     b= b+5
// }
// console.log(a)
// TODO 1166
// 2월이 29일까지 있는 해를 윤년이라고 한다.
// 한 자연수를 입력받아서 윤년인지 아닌지를 판단하는 프로그램을 작성하시오.
// 단, 윤년은 다음 두 조건 중 하나만 만족하면 된다.
// (1) 400의 배수이면 무조건 윤년이다.
// (2) 4의 배수이며, 100의 배수가 아니면 윤년이다.
// TODO 1166 정답
// let a= Number(prompt("년도 입력"))
// if(a % 400 ===0 || ((a%4 === 0) && (a%100 !=0 ))){
//     console.log("Leap")
// }else{
//     console.log("Nsormal")
// }
// TODO 1167
// 세 개의 숫자가 주어질 때 작은 순서로 나열 했을 때, 두번째 수를 출력해보자.
// 예를 들어, 5 9 2 가 있다면, 작은 순서로 나열하면 2 5 9이고 두번째 수는 5이다.
// TODO 1167 정답
// let a = prompt("숫자 세 개를 입력하세요")
// let b = a.split(" ")
// let c = b.sort(function(a,b){
//     return a - b
// })
// console.log(c)
// console.log(c[1])


// TODO 1168
// 주민등록번호는 생년월일과 성별정보, 지역정보로 이루어진다.
// 여기서 생년월일과 성별정보만 입력으로 받겠다.
// 성별 정보는 1이면 1900년대 출생 남자, 2이면 1900년대 출생 여자, 3이면 2000년대 출생 남자, 4이면 2000년대 출생 여자를 말한다.
// 기준년도는 2012년도이다. 현재 나이를 출력하시오. 
// 예)
// 790101 1        =====> 성별정보가 1이므로, 1979년생, 34살이다.
// 080521 4        =====>  성별정보가 4이므로, 2008년생,  5살이다.
// TODO 1168 
// let a=prompt("년도 입력")
// let b = a.split(" ")
// if(b[1] <= 2){
//     a = "19" + a
// }else{
//     a = "20" + b
// }
// b = a.split(" ")
// console.log((2012 - Math.floor(b[0]/10000)) + 1)
// TODO: 1170 ~ 1173, 1180

// TODO 1170
// 학번을 입력 받아 다음 형식으로 출력하시오.
// 학번은 학년, 반, 번호로 입력된다.
// 예)
// 2 3 27   =====>    2327로 출력
// 2 3 7   ======> 2307로 출력   (번호가 10번미만이면 0을 붙여 출
// TODO 1170 정답
// let a=prompt("학번 입력")
// let b = a.split(" ")
// if(b[2] < 10){
//     b[2] = "0" + b[2]
    
// }
// console.log(b[0] + b[1] + b[2])
// TODO 1171
// 학번을 입력 받아 다음 형식으로 출력하시오.
// 학번은 학년, 반, 번호로 입력된다.
// 이번에는 학년은 한자리, 반은 두자리, 번호는 세자리로 출력한다.
// 예)
// 2 1 20  ===> 201020  으로 출력
// 2 2 7 ==> 202007 으로 출력
// 2 3 100 ==>  203100 으로 출력
// 2 10 111 ==> 210111 로 출력
// TODO 1171 정답
// let a=prompt("학번 입력")
// let b = a.split(" ")
// if(b[1] < 10){
//     b[1] = "0" + b[1]
    
// }
// if(b[2] < 100){
//     if(b[2]< 10){
//         b[2] = "0" + b[2]
//     }
//     b[2] = "0" + b[2]
    
// }
// console.log(b[0] + b[1] + b[2])
// TODO 1172
// 세 수를 오름차순으로 정렬하려고 한다. (낮은 숫자 -> 높은 숫자)
// 예)5 8 2   ====> 2 5 8    로 출력
// TODO 1172 정답
// let a = prompt("숫자 세 개를 입력하세요")
// let b = a.split(" ")
// let c = b.sort(function(a,b){
//     return a - b
// })
// console.log(c[0] + " " + c[1] + " " + c[2])
// TODO 1173
// 수호는 30분 전으로 돌아가고 싶은 1人 이다.
// 공백을 기준으로 시간과 분이 주어진다.
// 그러면 이 시간을 기준으로 30분전의 시간을 출력하시오.
// 예)
// 12 35  =====> 12 5
// 12 0 ======> 11 30
// 11 5 ======> 10 35
// TODO 1173 정답
// let a = prompt("시간과 분 입력")
// let b = a.split(" ")
// if((b[1] - 30) < 0){
//     b[1] = (Number(b[1]) + 60)
//     console.log(b[1])
//     b[0] = b[0] - 1
//     if(b[0] < 0){
//         b[0] = (Number(b[0]) + 24)
//     } 
// }
// console.log(b[0]+ " " + (b[1] - 30))
// TODO 1180
// 민호는 발명을 되게 좋아하고, 컴퓨터 프로그램도 되게 좋아한다.
// 어느 날 민호는 컴퓨터를 사용하던 중 휴지통이 꽉 차서 불편을 느꼈다.
// 그래서 휴지통이 n만큼 차면 알아서 쓰레기를 압축해주는 휴지통을 만들려고 한다.
// 이 때 압축하는 알고리즘은 다음과 같다.
// 10의 자릿수와 1의 자릿수를 서로 바꾸고, 거기에 2를 곱한다.
// 예) 70일 경우 14가 된다.( 70 -> 07 -> 14 )
// 이 알고리즘은 때로는 부작용을 일으켜 휴지통의 내용이 더 많아 질지도 모른다.
// 만약 이 알고리즘의 심각한 부작용으로 수치가 100이 넘는다면 100의 자릿수는 무시된다.
// TODO 1180 정답
// function press(a){
//     let result = ""
//     result = (a%10) + Math.floor(a/10)
//     result = Number(result)*2
//     return result

// }
// let a= Number(prompt("파일 크기 입력"))
// if(a >= 100){
//     a= a%100
// }
// console.log(press(a))
// TODO: 1201 ~ 1207, 1210, 1212, 1214, 1216, 1218
// TODO 1201
// 정수 하나를 입력받아 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// TODO 1201 정답
// let a= Number(prompt("정수 입력"))
// if(a > 0){
//     console.log("양수")
// }else if(a < 0){
//     console.log("음수")
// }else{
//     console.log(a)
// }
// TODO 1202
// 재호는 이번 시험에 받은 성적이 궁금했다.
// 점수가 입력되면 등급을 출력하시오.
// 등급)
//  90점 이상 : A
// 80점 이상 : B
// 70점 이상 : C
// 60점 이상 : D
// 60점 미만 : F
// TODO 1202 정답
// let a= Number(prompt("점수 입력"))
// if(a >= 90){
//     console.log("A")
// }else if(a < 90 && a>=80 ){
//     console.log("B")
// }else if(a < 80 && a>=70 ){
//     console.log("C")
// }else if(a < 70 && a>=60 ){
//     console.log("D")
// }else{
//     console.log("F")
// }
// TODO 1203
// 비만을 판단하기 위해서 BMI 수치가 필요하다.
// BMI 수치가 입력되면 비만을 판단하시오.
// TODO 1203 정답
// let a= Number(prompt("BMI 수치 입력"))
// if(a <= 10 ){
//     console.log("정상")
// }else if(a > 10 && a <=20){
//     console.log("과체중")
// }else{
//     console.log("비만")
// }
// TODO 1204
// 영어로 서수를 표현할 때 다음과 같이 나타낸다.
// 1st  2nd  3rd  4th  5th  6th  ... 10th
// 11th 12th 13th 14th 15th  ...  20th
// 21st 22nd 23rd 24th 25th  ...  30th
// 31st 32nd 33rd 34th 35th  ...  40th
// 41st 42nd 43rd 44th 45th  ...  50th
// ...
// 91st 92nd 93rd 94th 95th  ...  99th
// 1~99 중 하나가 숫자가 입력되면 영어 서수 표현을 출력하시오.
// TODO 1204 정답
// let a= Number(prompt("숫자 입력"))
// let result = ""
// if(a %10 === 1 && a != 11){
//     result = a + "st"
// }else if(Math.floor(a/10) === 1){
//     result = a + "th"
// }else if(a % 10 <= 3){
//     result = a + "nd"
// }
// else{
//     result = a + "th"
// }
// console.log(result)
// TODO 1205
// 두 실수 a, b가 입력되면 그 두수를 더하거나 빼거나 곱하거나 나누거나 제곱을 해서 가장 큰 수를 출력하시오.
// 예를 들어 1과 2가 입력되면,
// 1+2 = 3   , 2+1 = 3
// 1 - 2 = -1,   2 - 1 = 1
// 1 * 2 = 2,    2 * 1 = 2
// 1 / 2 = 0.5,   2 / 1 = 2
// 12=1 ,   21 = 2
// 따라서 최댓값은 3이다.
// TODO 1205 정답
// function plus(a,b){
    
//     let result = Math.max((a+b),(b+a))
//     return result
// }
// function minus(a,b){
    
//     let result = Math.max((a-b),(b-a))
//     return result
// }
// function multiple(a,b){
    
//     let result = Math.max((a*b),(b*a))
//     return result
// }
// function divide(a,b){
    
//     let result = Math.max((a/b),(b/a))
//     return result
// }
// function square(a,b){
//     let result = Math.max((Math.pow(a,b)),(Math.pow(b,a)))
//     return result
// }
// let a= Number(prompt("숫자 입력"))
// let b= Number(prompt("숫자 입력"))
// let result =Math.max(plus(a,b),minus(a,b),multiple(a,b),divide(a,b),square(a,b))
// console.log(result.toFixed(6))
// TODO 1206
// 두 자연수 a, b가 주어진다.
// b가 a의 배수이면 "a*x=b"를 출력하고,
// a가 b의 배수이면 "b*x=a"를 출력하고,
// 배수관계가 아니면 "none"을 출력하시오.
// 예) 
// 5 10    ====> 5*2=10
// 14 2   ======> 2*7=14
// 3 7 =====> none
// TODO 1206 정답
// let a= Number(prompt("숫자 입력"))
// let b= Number(prompt("숫자 입력"))
// let x = 0
// if(b % a === 0){
//     x = b/a
//     console.log(a + "*" + x + "=" + b)
// }else if(a % b === 0){
//     x = a/b
//     console.log(b + "*" + x + "=" + a)
// }else{
//     console.log("none")
// }
// TODO 1207
// 윷놀이는 4개의 윷을 이용하는 게임이다.
// 도 : 1개가 뒤집어진 상태
// 개 : 2개가 뒤집어진 상태
// 걸 : 3개가 뒤집어진 상태
// 윷 : 4개가 뒤집어진 상태
// 모 : 하나도 뒤집어지지 않은 상태
// 4개의 윷 상태가 입력되면 도, 개, 걸, 윷, 모를 출력하는 프로그램을 작성하시오.
// TODO 1207 정답
// let a = prompt("윷 상태 입력")
// let b = a.split(" ")
// let count = 0;
// for(let i = 0; i < 4; i++){
//     if(b[i] == 1 ){
//         count++
//     }
// }

// if(count === 0){
//     console.log("모")
// }else if(count === 1){
//     console.log("도")
// }else if(count === 2){
//     console.log("개")
// }else if(count === 3){
//     console.log("걸")
// }else if(count === 4){
//     console.log("윷")
// }
// TODO 1210
// 보림이는 엄마와 함께 놋데리아에 갔다.
// 보림이는 먹고 싶은게 많았으나 엄마가 살이 찐다고 2가지만 골라서 먹으라고 했다.
// 그리고 두 메뉴의 칼로리 합이 500보다 크면 엄마가 화를 내고, 500이하면 화를 내지 않는다.
// 보림이가 선택할 수 있는 메뉴는 다음과 같다.
// 1. 치즈버거 : 400 칼로리
// 2. 야채버거 : 340 칼로리
// 3. 우유 : 170 칼로리
// 4. 계란말이 : 100 칼로리
// 5. 샐러드 : 70 칼로리
// 이 메뉴들 중 2가지 메뉴를 선택했을 때 칼로리 합을 계산하고, 그 칼로리 합이 500보다 크면 "angry", 500이하면 "no angry"를 출력하시오.
// TODO 1210 정답
// let sum = 0
// for(let i = 1; i <= 2; i++){
//     let a = Number(prompt("숫자 입력하세요"))
//     if(a === 1){
//         sum = sum + 400 
//     }else if(a === 2){
//         sum = sum + 340 
//     }else if(a === 3){
//         sum = sum + 170 
//     }else if(a === 4){
//         sum = sum + 100 
//     }else if(a === 5){
//         sum = sum + 70 
//     }
// }
// if(sum > 500){
//     console.log("angry")
// }else{
//     console.log("no angry")
// }
// TODO 1212
// 세 개의 직선이 있다.
// 숫자의 의미는 직선의 길이를 말한다.
// 이 직선으로 삼각형을 만들 수 있는지 판단하는 프로그램을 작성하시오.
// 삼각형의 성립 조건)
// a, b, c 가 변의 길이이고 c가 제일 긴 길이라고 한다면
// c < a + b 이면 삼각형이 성립됨.
// TODO 1212 정답
// let a = Number(prompt("숫자 입력하세요"))
// let b = Number(prompt("숫자 입력하세요"))
// let c = Number(prompt("숫자 입력하세요"))
// let arr = [a,b,c]
// let d = arr.sort()
// console.log(d)
// if(d[2] < d[0] + d[1]){
//     console.log("yes")
// }else{
//     console.log("no")

// }
// TODO 1214
// 철수와 영희는 한 사람이 특정 월(month)을 지목하면 나머지 사람이 그 달의 마지막 날이 며칠인지 알아맞히는 게임을 하였다. 두 사람 모두 처음엔 서툴렀지만 게임을 계속하다 보니 금방 익숙해졌다. 
// 그래서 게임의 규칙을 조금 어렵게 바꿔 연도와 월을 말하면 그 달의 마지막 날이 며칠인지 알아맞히기로 하였다.
// 이 규칙이 어려운 이유는 2월이 윤달이 있기 때문이다.
// 2월이 29일인 해를 윤년이라고 하는데, 윤년의 판단은 아래 두 조건 중 하나만 만족하면 된다.
// - 조건 1 : 400의 배수인 해는 모두 윤년이다.
// - 조건 2 : 4의 배수인 해들 중 100의 배수가 아닌 해들은 모두 윤년이다.
// 연도와 월을 알고 있을 때 그 달의 마지막 날을 구하는 프로그램을 작성하시오
// TODO 1214 정답
// function two(a){
//     if(a % 400 ===0 || ((a%4 === 0) && (a%100 !=0 ))){
//         console.log("29")
//     }else{
//         console.log("28")
//     }

// }

// let a = prompt("년 월 입력")
// let b = a.split(" ")

// if(b[1] == 1 || b[1] == 3 || b[1] == 5 || b[1] == 7 || b[1] == 8 || b[1] == 10 || b[1] == 12){
//     console.log(31)
// }else if(b[1] == 2){
//     two(b[0])
// }else{
//     console.log(30)
// }
// TODO 1216
// 대영이는 SNS를 이용한 컨설팅 회사를 운영하고 있다. 
// 이 회사에서 획기적인 기획안을 개발하여 사람들에게 홍보를 하려고 한다.
// 홍보를 할 경우 수입과 그렇지 않을 경우의 수입을 알고 있을 경우, 
// 홍보를 하는 경우가 유리한가?
// 홍보를 하지 않은 경우가 유리한가?
// 그것도 아니면 홍보를 하든 안하든 별 관계가 없는가?
// 이것을 알아내는 프로그램을 만드시오.
// TODO 1216 정답
// let a = Number(prompt("홍보 하지 않을 경우 수익"))
// let b = Number(prompt("홍보 하지 할 경우 수익"))
// let c = Number(prompt("홍보 비용"))
// if(b > c + a){
//     console.log("advertise")
// }else if(b < c + a){
//     console.log(" no advertise")
// }else{
//     console.log("does not matter")
// }
// TODO 1218
// 삼각형의 3변의 길이 a, b, c가 입력으로 주어진다.
// 여기서 입력되는 변의 관계는 a ≤ b ≤ c 이다. 
// 그 삼각형이 무슨 삼각형인지 출력하시오.
// 세 변의 길이가 같은 경우 : 정삼각형
// 두 변의 길이가 같은 경우 : 이등변삼각형
// a2 + b2 = c2일 경우(피타고라스 정리) : 직각삼각형
// 위의 조건에 맞지 않는 일반 삼각형일 경우 : 삼각형
// 삼각형이 아닐 경우 : 삼각형아님
// TODO 1218 정답
// let a = Number(prompt("숫자 입력하세요"))
// let b = Number(prompt("숫자 입력하세요"))
// let c = Number(prompt("숫자 입력하세요"))
// let arr = [a,b,c]
// let d = arr.sort()
// console.log(d)
// if(d[2] >= d[0] + d[1]){
//     console.log("삼각형 아님")
// }else if((d[0] === d[1]) && (d[0] === d[2])){
//     console.log("정삼각형")
// }else if(d[0] == d[1] || d[0] == d[2] || d[1] == d[2] ){
//     console.log("이등변삼각형")
// }else if(((d[0]*d[0]) + (d[1]*d[1])) == (d[2]*d[2])){
//     console.log("직각삼각형")
// }else{
//     console.log("삼각형")
// }
// TODO 1222 
// 지금 1반과 2반이 축구를 하고있다.
// 축구경기 타임은 총 90분이고,
// 현재 스코어가 5 대 7인 상황에서, 지고 있는 1반에서는 경남정보고 최고의 스트라이커인 성익이를 투입하기로 결정했다.
// 성익이는 5분마다 골을 넣을 수 있는 능력을 가지고 있다.
// 만약 80분에 투입이 되면 80분에 곧바로 골을 넣게되고 85분에 골을 넣음으로서 동점이 가능하게 된다.
// (90분이되면 경기가 바로 종료되므로 골을 넣을 수 없다. 동내심판인 성빈이는 성익이가 잘 되는 것을 싫어하기 때문에 추가시간 따위는 주지 않는다. )
// 현재 경기타임과 스코어가 입력으로 주어 질때, 성익이를 투입하면 1반이 이길 수 있는지 결정하는 프로그램을 작성하시오.
// TODO 1222 정답
// let b= Number(prompt("현재 경기 시간 입력"))
// let a= Number(prompt("우리팀의 현재 득점 입력"))
// let c= Number(prompt("상대팀의 현재 득점 입력"))

// for(b; b<90;){
//     a++
//     b= b+5
// }
// if(a > c){
//     console.log("win")
// }else if(a < c){
//     console.log("lose")
// }else{
//     console.log("same")
// }
// TODO 1224
// 분수의 크기를 비교하는 프로그램을 작성하시오.
// 분수는 a / b  , c / d 모양으로 주어진다.
// TODO 1224 정답
// let a= Number(prompt("숫자 입력"))
// let b= Number(prompt("숫자 입력"))
// let c= Number(prompt("숫자 입력"))
// let d= Number(prompt("숫자 입력"))
// if((a/b) > (c/d)){
//     console.log(">")
// }else if((a/b) < (c/d)){
//     console.log("<")
// }else{
//     console.log("=")
// }
// TODO 1226
// 지혜는 로또 매니아다.
// 매주 로또 한장을 사고 토요일이면 대박을 기대하면서 당첨번호를 확인한다.
// 지혜는 로또 결과가 4등이었는데 확인을 잘못해서 5등인줄 알고 그냥 바꾸기 귀찮아서 버렸었다.
// (사실은 다른 줄에 있는 것까지 합쳐서 3개 맞았는데 5등인줄 알았다고 한다.)
// 이러한 사태가 다시는 일어나지 않게 하기 위해 우리가 프로그램을 만들어 주자.
// TODO 1226 정답
// let a = prompt("당첨번호 입력 마지막 번호는 보너스 번호")
// let arrA = a.split(" ")
// let b = prompt("구매번호 입력")
// let arrB = b.split(" ")
// let count = 0;
// for(let i = 0; i < 6; i++){
//     for(let j = 0; j < 6; j++){
//         if(arrA[i] == arrB[j]){
//             count++
//             console.log("A:"+arrA[i] + "B:" +arrB[j] + "count:" + count)
//         }
//     }
// }
// if(count <= 2){
//     console.log(0)
// }else if(count == 3){
//     console.log(5)

// }else if(count == 4){
//     console.log(4)

// }else if(count == 5){
//     for(let i = 0; i < 6; i++){
//         if(arrA[6] == arrB[i] ){
//             count++
//         }
//     }
//     if(count == 6){
//         console.log(2)
//     }else{
//         console.log(3)

//     }
// }else if(count == 6){
//     console.log(1)

// }
// TODO 1228
// 희윤이는 '성문이 두마리 치킨' 가게를 운영하고 있다.
// 치킨집을 운영하다 보니 매일 치킨을 먹게 되었다.
// 그러던 어느 날 몸무게를 재어보니 80kg이 나가는 것을 보고 깜짝 놀랐다.
// 희윤이 여자친구는 비만인 사람을 제일 싫어 하므로 희윤이는 절대 비만이면 안 된다.
// 희윤이가 비만인지 아닌지 판별하는 프로그램을 작성하시오
// 희윤이의 키와 몸무게가 공백을 기준으로 입력된다.(실수)
// TODO 1228 정답
// function weight(a){
//     return (a-100) * 0.9
// }
// function bmi(a,b){
//     return ((a-b) * 100)/b
// }
// let a = Number(prompt("키 입력"))
// let b = Number(prompt("몸무게 입력"))
// let normal = weight(a)
// let yBMI = bmi(b,normal)

// if(yBMI <= 10 ){
//     console.log("정상")
// }else if(yBMI > 10 && yBMI <=20){
//     console.log("과체중")
// }else{
//     console.log("비만")
// }
// TODO 1229
// 개발자인 삼양이는 신장체중계를 만드는 회사에서 비만도를 판정해주는 프로그램을 제작해 달라고 의뢰를 받았다.
// 신장체중계는 키와 몸무게의 측정값을 알려주며, 이 정보를 바탕으로 비만도를 판정하여 출력한다.
// 비만도 계산시 아래 공식을 이용하여 판정한다.
// * 비만도 계산 공식
// 비만도 = (실제 몸무게 - 표준몸무게)  * 100 / 표준 몸무게
// TODO 1229 정답
// function weight(a){
//     let result = 0
//     if(a < 150){
//         result = a-100
//     }else if(a >= 150 && a < 160){
//         result = (a-150)/2 + 50
//     }else{
//         result = (a-100) * 0.9
//     }
//     return result
// }
// function bmi(a,b){
//     return ((a-b) * 100)/b
// }
// let a = Number(prompt("키 입력"))
// let b = Number(prompt("몸무게 입력"))
// let normal = weight(a)
// let yBMI = bmi(b,normal)

// if(yBMI <= 10 ){
//     console.log("정상")
// }else if(yBMI > 10 && yBMI <=20){
//     console.log("과체중")
// }else{
//     console.log("비만")
// }
// TODO 1230
// 어떤 차의 높이가 170cm이다.
// 이 차는 3개의 터널 a,b,c를 차례대로 지나게 될 것이다.
// 각 터널의 높이가 차의 높이(170)보다 같거나 낮으면 차는 터널과 충돌하여 사고가 날 것이다.
// 각 터널a ,b ,c 의 높이가 차례대로 3개 입력되면,
// 터널을 무사히 잘 통과하면 PASS 를 출력하고, 사고가 난다면 CRASH 와 처음 충돌하는 터널의 높이를 출력하시오.

// TODO 1230 정답
// let a= Number(prompt("터널1 높이를 입력하세여"))
// let b= Number(prompt("터널2 높이를 입력하세여"))
// let c= Number(prompt("터널3 높이를 입력하세여"))
// if(a >= 170){
//     console.log("CRASH " + a)
// }else if(b >= 170){
//     console.log("CRASH " + b)
// }else if( c >=170){
//     console.log("CRASH " + c)
// }else{
//     console.log("PASS")
// }
// TODO 1231
// 영민이는 프로그램을 이용하여 계산기를 만들려고한다.
// 하지만 영민이는 프로그램을 얼마 배우지 않아 어려워하고있다.
// 우리가 영민이를 위해 계산기 프로그램을 만들어주자.
// TODO 1231 정답
// function plus(a,b){ 
//     let result = a + b
//     return result
// }
// function minus(a,b){
//     let result = a - b
//     return result
// }
// function multiple(a,b){ 
//     let result = a * b
//     return result
// }
// function divide(a,b){
//     let result = 0
//     if(b != 0){
//         let result = (a/b).toFixed(2)
//     }else{
//         let result = "0은 나눌수 없습니다."
//     }
//     return result
// }
// let a =Number(prompt("수를 입력해주세요"))
// let b =Number(prompt("수를 입력해주세요"))
// let c =Number(prompt("1: 더하기 2: 빼기 3: 곱하기 4: 나누기"))
// if(c === 1){
//     plus(a,b)
// }else if(c === 2){
//     minus(a,b)
// }else if(c === 3){
//     multiple(a,b)
// }else if(c === 4){
//     divide(a,b)
// }