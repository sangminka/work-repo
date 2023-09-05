//D+ConfirmButton.js :자식 컴포넌트
// rfce
import React from 'react'
import { useState } from 'react';

function D_ConfirmButton() {
    // TODO: 변수 정의
    let [isConfirmed,setIsConfirmed] = useState(false)
    // TODO: 함수정의
    const handleconfirm = () => { 
        setIsConfirmed(true)
     }
  return (
    <div>
        {/* 예제: 아래 버튼 클릭하면 확인됨 -> 확인하기, 상태도 비활성화
                                disabled = false(활성화)[true(비활성화)] 
        */}
                                   
        <button onClick={handleconfirm}
                disabled ={isConfirmed}
                >
            {/* 3항 연산자 사용 */}
            {/* 사용법 : (조건식)? "true" : "false" */}
            {
                (isConfirmed==true)? "확인됨":"확인하기"
            }
        </button>
    </div>
  )
}

export default D_ConfirmButton