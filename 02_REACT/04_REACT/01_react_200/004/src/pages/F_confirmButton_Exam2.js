// F_confirmButton_Exam2.js
// rfce
import React from "react";
import { useState } from "react";

function F_confirmButton_Exam2() {
  let [isBool,setIsbool] = useState(false)
  let [count, setCount] = useState(0);

  const btn = () => {
    10 > count ? setCount(count + 1 ) : setCount(10);
    9 > count ? setIsbool(false) : setIsbool(true)
    // 10 > count ? setCount(count + 1 ) : setIsbool(true);


  };

  return (
    <div>
      현재 정원 : {count}
      <br />
      <button onClick={btn} disabled = {isBool} >
        {isBool ? (
          <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
        ) : (
          <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
        )}
      </button>
    </div>
  );
}

export default F_confirmButton_Exam2;
