//EasingCom.tsx
import React, { useEffect } from 'react'
// 선생님이 만든 css
import "../../assets/css/EasingCom.css"
import initMain from '../js/initMain'
function EasingCom() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <div>
        <div id='boxing'>
            <div id='box'></div>
        </div>
    </div>
  )
}

export default EasingCom