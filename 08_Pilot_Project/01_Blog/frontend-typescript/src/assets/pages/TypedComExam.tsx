import React, { useEffect } from 'react'
import initMain from '../js/initMain';


function TypedComExam() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <span id='typed2'></span>
  )
}

export default TypedComExam