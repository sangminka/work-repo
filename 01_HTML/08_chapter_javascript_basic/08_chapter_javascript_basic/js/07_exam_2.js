// 문제 풀이
//  1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
//  입력 1 : love
//  입력 2 : 3
//  출력 : lovelovelove
// 입력 함수 : let char = prompt("1개의 문자열이 입력된다");
//             let num = Number(prompt("정수가 입력된다"));
// let char = prompt("1개의 문자열이 입력된다");
// let num = Number(prompt("정수가 입력된다"));
// let str ="";
// for(let i = 0; i < num; i++){
//     str+=char
// }
// console.log(str);
// 2입력 : 없음
//  출력 : "!@#$%^&*()"
// console.log('"!@#$%^&*()"');

// 입력 : 없음
// 출력 : "C:\Download\hello.cpp"
// console.log('"C:\\Download\\hello.cpp"')

// 4) 입력 1.414213
//    출력 1.414213
// let num1 = Number(prompt("실수 입력"));
// console.log(num1);
// 5) 입력 : 1.59254
//    출력 : 1.59
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를자리수)
// let num2 = Number(prompt("실수 입력"));
// console.log(num2.toFixed(2));
// 6) 입력 : 125
//    출력 : 125 125 125
// let str = "";
// let num3 = Number(prompt("실수 입력"));
// for(let i = 0; i < 3; i++){
//     str += num3;
//     str +=" ";
// }
// console.log(str);

// 자료형 : 배열(간략설명)
// 자료형 : 문자열(string), 숫자(number), 참/거짓(boolean/bool)
//          배열
// 변수 : 변하는 값을 저장하는 장소(한가지 값만 저장함), let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용
//        인덱스번호
// 사용법 : 변수명[인덱스 번호]
// 보충 설명 : a[0] == 0번방에 값, a[1] == 1번방에 값이 들어가 있음
// 예 a[0] = 1;, a[1] = 2 .....

// 예제 7) 입력 = 1 2 출력 = 2 1

// 자바스크립트에서 문자열 자르기 함수 : 문자열.split("자를문자")
// 예)
// let arr = prompt("두 정수를 입력해 주세요").split(" ");
// arr(배열)arr[0] = 1, arr[1] = 2;
//  alert(arr[1] +" "+arr[0])//2 1

// 입력 : A b
// 출력 : b A

// let arr = prompt("두 문자를 입력해 주세요").split(" ");
// console.log(arr[1]+ " " + arr[0])

// // 8) 입력 : 3:16 출력 3:16
// let char = prompt("시간을 입력하세요");
// console.log(char);

// // 9) 입력 : 2013.8.5 출력 2013.05.05 , slice(-2)끝에서부터 2자리만 자르기
// // 힌트 : 문자열 자르기 함수 : 문자열.split("자를 문자열");
// let date = prompt("날짜를 입력하세요").split(".");
// console.log(date[0]+".0"+date[1]+".0"+date[2]);

// // 10)입력 : 000907-1121112 출력 : 000907-1121112
// let num1 = prompt("날짜를 입력하세요").split("-");
// console.log(num1[0]+num1[1]);

// 11) 입력 Programming is vert fun!! 출력 Programming is vert fun!!
// let pro = prompt("문장을 입력해주세요");
// console.log(pro);

// 12) 입력 : 1.414213
//     출력 : 1
//let num = Number(prompt("실수 입력")).toFixed(0);
//console.log(num);
// let num1 = prompt("실수 입력").split(".");
// console.log(num1[0]);
// 13) 입력 :Boy
//     출력 : 'B'
//  'o'
//  'y'
// 힌트 : Boy(문자열) : 1문자의 합 == 문자 들의 배열
// let Boy = prompt("입력해주세요");
// console.log("'"+Boy[0]+"'"+"\n"+"'"+Boy[1]+"'"+"\n"+"'"+Boy[2]+"'")
// 14) 두 정수의 합을 출력한다.
// 입력1,2 : 2147483648 출력 : 4294967296
// let num = Number(prompt("숫자를 입력하세요1"));
// let num2 = Number(prompt("숫자를 입력하세요2"));
// alert(num+num2);

// let n = prompt("숫자를 입력하세요1").split(" ");
// alert(Number(n[0])+Number(n[1]));

// 15) 입력 : 75254 
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//        alert(aaa[3]) // 5
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]

// let num = prompt("숫자를 입력하세요")
// console.log(num[0]+"0000"+num[1]+"000"+num[2]+"00"+num[3]+"0"+num[4])


let num1= Number(prompt("숫자를 입력하세요"));
let a = [];
ten=10000;
for(let i = 0; i<5; i++){
    a[i] = num1/ten;
    num1 = num1%ten;
    console.log(parseInt(a[i]));
    ten/=10;
}
    // a[0] =num1/ten;
    // a[0]= parseInt(a[0])
    // num1 = num1%ten;
    // a[0] =parseInt(num1/ten);
    // ten/=10;
    // a[1] = num1/ten;
    // num1 = num1%ten;
    // ten/=10;
    // a[2] = num1/ten;
    // num1 = num1%ten;
    // ten/=10;
    // a[3] = num1/ten;
    // num1 = num1%ten;
    // ten/=10;
    // a[4] = num1
