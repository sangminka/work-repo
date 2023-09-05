// B_Home2.js : 자식
// rfce
// TODO  화면 바인딩
import React, { useState } from "react";

function B_Home2() {
  // TODO 변수를 정의하는 곳 : 여기
  // 최초 1번만 정상적으로 화면에 표시
  // 수정 -> 수정된 값이 보이지 않음
  let hello = "안녕하세요"; //    일반변수
  // 바인딩 변수 : 리엑트에서는 화면에 수정이 일어났을때 정상적으로 보이게 만들어 주는 변수
  // 바이딩 변수 : let [변수명,수정함수] = useState("초기값")
  let [element, setElement] = useState("안녕");

  // TODO 함수 정의 : 여기
  //nfn
  // TODO: 화면 바인딩 없음 : 수정해도 화면에 나타나지 않음
  const myClick = () => {
    hello = "안녕하세요2";
  };
  // TODO: 화변 바인딩 있음 : 수정하면 화면에 나타남
  const myClick2 = () => {
    // 리엑트의 수정함수
    setElement("안녕2");
  };

  // TODO 웹브라우저 화면에 나오는 부분 : 아래
  return (
    <div>
      {hello}
      <button onClick={myClick}>클릭해보세요</button>
      <br />
      {element}
      <button onClick={myClick2}>클릭해보세요2</button>
    </div>
  );
}

export default B_Home2;
