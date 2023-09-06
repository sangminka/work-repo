// Counter.tsx : 연습(카운팅 예제)
// rfce
import React, { useState } from 'react'


function Counter() {
    // TODO 변수 정의
    let [count,setCount] = useState<number>(0)
    // TODO 함수 정의
    const setIncreate = () =>  { 
        setCount(++count)
    }

    const setDecreate = () => { 
        setCount(--count)
     }
  return (
    <div>
      <h3>Counter 예제</h3>
      <button onClick={setIncreate}>증가</button>
      {/* //  TODO: 연습문제 숫자를 감소시키는 함수를 작성하고 화면에 표시하세요 */}
      <button onClick={setDecreate}>감소</button>
      <p>값 : {count}</p>
    </div>
  )
}

export default Counter