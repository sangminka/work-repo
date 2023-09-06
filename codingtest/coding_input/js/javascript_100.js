// TODO 1010번
// 정수형(int)으로 변수를 선언하고, 변수에 정수값을 저장한 후
// 변수에 저장되어 있는 값을 그대로 출력해보자.
// TODO 1010정답
// let a = Number(prompt("숫자를 입력해 주세요"))
// console.log(a)

// TODO 1011번
// 문자형(char)으로 변수를 하나 선언하고, 변수에 문자를 저장한 후
// 변수에 저장되어 있는 문자를 그대로 출력해보자.
// TODO 1011정답
// let charVal = prompt("입력하세요")
// console.log(charVal)

// TODO 1012번
// 실수형(float)로 변수를 선언하고 그 변수에 실수값을 저장한 후
// 저장되어 있는 실수값을 출력해보자.
// TODO 1012정답
// let floVal = Number(prompt("숫자를 입력해 주세요"))
// console.log(floVal)

// TODO 1013번
// 정수(int) 2개를 입력받아 그대로 출력해보자.
// TODO 1013번 정답
// let a = Number(prompt("숫자 1번 입력"))
// let b = Number(prompt("숫자 2번 입력"))
// console.log(a,b)

// TODO 1014번
// 2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자.
// TODO 1014번 정답
// let charVal1 = prompt("1번 입력하세요")
// let charVal2 = prompt("2번 입력하세요")
// console.log(charVal2,charVal1)

// TODO 1015번
// 실수(float) 1개를 입력받아 저장한 후,
// 저장되어 있는 값을 소수점 셋 째 자리에서 반올림하여
// 소수점 이하 둘 째 자리까지 출력하시오.
// TODO 1015번 정답
// let a = Number(prompt("소수 입력"))
// a = a*1000
// a = Math.floor(a)
// a = a/10
// a = Math.round(a)/ 100
// console.log(a)

// TODO 1017번
// int형 정수 1개를 입력받아 공백을 사이에 두고 3번 출력해보자.

// TODO 1017번 정답
// let a = Number(prompt("숫자입력"))
// console.log(a + " " + a + " " + a)

// TODO 1018번
// 어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.
// TODO 1018번 정답
// let timeVar = prompt("시간의 입력하세요 ex (3:16)")
// let time = timeVar.split(":")
// console.log(time[0] +"시" +time[1] + "분")

// TODO 1019번
// 입력받은 연, 월, 일을 yyyy.mm.dd 형식으로 출력한다.
// TODO 1019번 정답
// let Var = prompt("날짜를 입력하세요 ex (연.월.일)");
// let Var2 = Var.split(".");
// // slice(-2) 사용가능
// console.log(Var2[0] + "." + Var2[1].padStart(2,0) + "." + Var2[2].padStart(2,0));
// TODO 1020번
// 주민번호는 다음과 같이 구성된다.

// XXXXXX-XXXXXXX

// 앞의 6자리는 생년월일(yymmdd)이고 뒤 7자리는 성별, 지역, 오류검출코드이다.
// 주민번호를 입력받아 형태를 바꿔 출력해보자.
// TODO 1020번
// let input = prompt("주민번호를 입력하세요 ex (xxxxxx-xxxxxxx)");
// let input2 = input.split("-");
// console.log(input2[0]+input2[1])
// TODO 1021번
// 1개의 단어를 입력받아 그대로 출력해보자.
// TODO 1021번 정답
// let input = prompt("단어입력");
// console.log(input)

// TODO 1022번
// 공백 문자가 포함되어 있는 문장을 입력받고 그대로 출력하는 연습을 해보자.
// TODO 1022번 정답
// let input = prompt("단어입력");
// console.log(input)

// TODO 1023번
// 실수 1개를 입력받아 정수 부분과 실수 부분으로 나누어 출력한다.
// TODO 1023번 정답
// let input = prompt("실수를 입력하세요");
// let input2 = input.split(".");
// console.log(input2[0]+ "\n" +input2[1])


// TODO 1025번
// 다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.
// TODO 1025번 정답
// let input = prompt("5자리수를 입력하세요");
// let input2 = input.split("");
// console.log("[" + input2[0]*10000+ "]" + "\n" + "[" +input2[1]*1000 + "]" + "\n" + "[" + input2[2]*100+ "]" + "\n" + "[" +input2[3]*10 + "]" + "\n" + "[" +input2[4]+ "]")
// TODO 1031번
// 10진수를 입력받아 8진수(octal)로 출력해보자.
// TODO 1031번 정답
// let input = Number(prompt("숫자를 입력하세요"));
// let input2 = input.toString(8);
// console.log(input2)
// TODO 1032번
// 10진수를 입력받아 16진수(hexadecimal)로 출력해보자.
// TODO 1032번 정답
// let input = Number(prompt("숫자를 입력하세요"));
// let input2 = input.toString(16);
// console.log(input2)
// TODO 1033번
// 10진수를 입력받아 16진수(hexadecimal) 대문자로 출력해보자.
// TODO 1033번 정답
// let input = Number(prompt("숫자를 입력하세요"));
// let input2 = input.toString(16);
// input2 = input2.toUpperCase();
// console.log(input2)
// TODO 1034번
// TODO 1034번 정답
let input = prompt("숫자를 입력하세요");
let input2 = parseInt(input,8).toString(10)
console.log(input2)
// TODO 1035번
// 16진수로 입력된 정수 1개를 8진수로 바꾸어 출력해보자.
// TODO 1035번 정답
// let input = prompt("숫자를 입력하세요");
// let input2 = parseInt(input,16).toString(8)
// console.log(input2)
// TODO 1036번
// 영문자 1개를 입력받아 아스키 코드표의 10진수 값으로 출력해보자.
// TODO 1036번 정답
// let input = prompt("문자를 입력하세요");
// let input2 = input.charCodeAt();
// console.log(input2)
// TODO 1037번
// 10진 정수 1개를 입력받아 아스키 문자로 출력해보자.
// 단, 0 ~ 255 범위의 정수만 입력된다.
// TODO 1037번 정답
// let input = Number(prompt("문자를 입력하세요"));
// let input2 = String.fromCharCode(input);
// console.log(input2)
// TODO 1038번
// 정수 2개를 입력받아 합을 출력하는 프로그램을 작성해보자.
// TODO 1038번 정답
// let input = Number(prompt("숫자를 입력하세요"));
// let input2 = Number(prompt("숫자를 입력하세요"));
// console.log(input + input2)
// TODO 1039번
// 정수 2개를 입력받아 합을 출력해보자.
// 단, 입력되는 정수는 -2147483648 ~ +2147483648 이다.
// TODO 1039번 정답
// let input = Number(prompt("숫자를 입력하세요"));
// let input2 = Number(prompt("숫자를 입력하세요"));
// console.log(input + input2)
// TODO 1040번
// 입력된 정수의 부호를 바꿔 출력해보자.
// 단, -2147483647 ~ +2147483647 범위의 정수가 입력된다.
// TODO 1040번 정답
// let input = Number(prompt("숫자를 입력하세요"));
// console.log(-input)
