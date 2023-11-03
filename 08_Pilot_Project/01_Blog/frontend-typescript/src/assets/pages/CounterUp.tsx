import React, { useEffect } from 'react'
import initMain from '../js/initMain';

function CounterUp() {
    //  화면이 뜰때 실행되는 실행문
    useEffect(()=>{
        // 실행문
        initMain();
    },[]);
  return (
    <div>
        {/* 사용법 : 
            -> html 부분
                <태그 data-toggle="변수명">
                    숫자
                <태그/>
            => js 부분
                ($(선택자 as any)).counterUp({
                    delay: 숫자,  // 지연시간(1/1000초)
                    time: 숫자,  // 화면표시가 끝나는 시간(1/1000초)
                })
            
        */}
        <h2 className='text-primary fw-bold md-0' data-toggle="counter-up">
            10000
        </h2>
    </div>
  )
}

export default CounterUp