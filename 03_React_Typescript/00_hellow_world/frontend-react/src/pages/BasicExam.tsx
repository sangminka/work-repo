// BasicExam.tsx : 자식 (연습)
// rfce
import React, { useState } from "react";

{
  /* 아래 처럼 바인딩 변수를 사용해서 화면 출력을 하되 타입스크립트 코드를 적용하여 출력하세요 
        단, 문자는 string , 숫자는 number 를 사용해서 코딩하세요
        */
}

function BasicExam() {
  let [str, setStr] = useState<string>(
    "안녕하세요 그린 컴퓨터아카데미 입니다."
  );
  let [str1, setStr1] = useState<string>("아래는 곱셈 샘플입니다.");
  let [str2, setStr2] = useState<string>("곱셈");
  let [num, setNum] = useState<number>(2);
  let [num2, setNum2] = useState<number>(3);

  let [result, setresult] = useState<number>(num * num2);
  return (
    <div>
      {str}
      <br />
      {str1}
      <br />
      {str2}
      <br />
      {num + "*" + num2 + "=" + result}
      <br />
    </div>
  );
}

export default BasicExam;
