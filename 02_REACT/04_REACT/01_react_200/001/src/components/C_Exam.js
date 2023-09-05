//C_Exam.js
// TODO: 연습문제
// TODO: 클릭시 아래 결과대로 코딩하세요
// TODO: 최초화면 : 안녕하세요
// TODO 결과 안녕
import React from "react";
import { useState } from "react";
function C_Exam() {

  // TODO : 1)바인딩 변수정의
  let [element, setElement] = useState("안녕하세요");

  // TODO : myClick() 화살표 함수 : 안녕으로 수정
  const myClick = () => {
    // 수정함수 : 안녕
    setElement("안녕");
  };



  return (
    <div>
      {element}
      <br />
      <button onClick={myClick}>문자열 변경</button>
    </div>
  );
}

export default C_Exam;
