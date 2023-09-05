import React from 'react'
import { useState } from 'react';

// TODO 연습문제 : 아래 노란 버튼을 클릭하면 파란 버튼이 보이게 하세요
function A_Accommodeate_Exam() {

    // TODO 변수정의
    // 사용법
    // 사용법 let [변수명,set변수명] = useState(초기값)
    let [isBool,setIsbool] = useState(false)

    // TODO 함수정의
    // nfn
    const yellowClick = () => { 
        isBool ? setIsbool(false) : setIsbool(true)
     }

    return (
    

    <div>
        <button onClick={yellowClick} className="btn btn-warning">
            노란 버튼
        </button><br/>
        {
        isBool &&
            <button className="btn btn-primary">
            파란 버튼
            </button>

        }
        



    </div>
  )
}

export default A_Accommodeate_Exam