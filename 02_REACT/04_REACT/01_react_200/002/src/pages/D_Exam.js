// D_Exam.js :연습문제
// rfce
// TODO: 아래 생명주기 함수 2개를 만들어서 출력하세요
// TODO: 화면이 뜰때 아래의 결과가 출력console.log됨
// TODO: 결과 :mount call

// TODO2) tmpState2 라는 변수의 값이 변경되면 콘솔에 출력됨
// TODO 결과 : false
import React, { useEffect, useState } from 'react'

function D_Exam() {
    let [element,setElement] =  useState(true)

    // TODO 생명 주기 함수(생성)
    // TODO 화면이 뜰때 자동 실행
    // 사용법 : useEffect(()=>{실행문}, [])
    useEffect(()=>{
        console.log("mount Call")
    },[])

    // TODO: 2)생명 주기 함수(수정) : true -> false(콘솔에 출력)
    // 사용법 : uesEffect((){실행문},[감시할 변수명])
    useEffect(()=>{
        console.log(element) // 변경값 바뀌면 실행
    },[element])

    // TODO: 2-2 클릭 이벤트 함수 정의
    const handleClick = () => {
        setElement(false)
    }
  return (
    <div>
        <h2>[ THIS IS shouldComponentUpdate FUNCTION ]</h2>
        <button onClick={handleClick}>클릭하세요</button>
    </div>
  )
}

export default D_Exam