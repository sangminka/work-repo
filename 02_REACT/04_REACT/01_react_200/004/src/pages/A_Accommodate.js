// A_Accommodate.js : 자식 컴포넌트
// rfce
// TODO 리액트의 조건문 : 1) 논리연산자(&&), 2) 3항 연산자
import React from 'react'
import "../assets/styles.css"
import { useState } from 'react';
function A_Accommodate() {
    // TODO 변수/함수 정의
    // 사용법 : let[변수명, set변수명] = useState("초기값")
    let[isFull, setIsFull] = useState(true);
    // 카운트 변수
    let[count, setCount] = useState(0);
    // TODO 함수 정의
    // nfn
    const increaseCount = () => { 
        // 카운트 변수 1씩 증가시키기
        let tmpval =  count + 1 
        setCount(tmpval)


     }
    const decreaseCount = () => { 

        // let dmpval = count - 1 
        // dmpval >= 0 ? setCount(dmpval) : dmpval = 0

        count > 0 ? setCount(count-1) : count = 0
     }
    
  return (
    <div>
        {/* count 변수 화면 출력 */}
        <p>{`총 ${count} 명을 수용했습니다.`}</p>

        {/* 증가버튼 */}
        <button className="btn btn-primary" onClick={increaseCount}>입장</button><br/>

        {/* 감소버튼 */}
        <button className="btn btn-warning" onClick={decreaseCount}>퇴장</button>

        {/* TODO: isFull 참이면 && 실행문(태그) : 실행문이 화면에 보임 */}
        {/*              거짓이면 실행문(태그) 화면에 안보임 */}

        { 
            isFull && 
                // 사용법 : <태그 style={{속성: "값"}}>
                <p style = {{color: "red"}} >정원이 가듣찼습니다.</p>
        }
    </div>
  )
}

export default A_Accommodate
