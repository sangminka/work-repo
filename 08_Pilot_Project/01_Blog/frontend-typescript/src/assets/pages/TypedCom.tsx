// TypesCom.tsx
import React, { useEffect } from 'react'
import initMain from './../js/initMain';

function TypedCom() {

    useEffect(()=>{
        initMain();
    },[])
  return (
    <div>
        <span id='typed1'>1</span>
    </div>
  )
}

export default TypedCom