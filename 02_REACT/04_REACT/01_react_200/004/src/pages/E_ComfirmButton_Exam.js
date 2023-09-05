//E_ConfirmButton_Exam.js
// rfce
import React from 'react'
import { useState } from 'react';

function E_ComfirmButton_Exam() {
    let[isInOut,setisInOut] = useState(true)
    const inbtn = () => { 
        isInOut ? setisInOut(false) : setisInOut(true)
     }

  return (
    <div>
        <button onClick={inbtn} className='btn btn-warning'>

            {
                isInOut ? <p style={{color: "red"}}>정원이 가득찼습니다</p> : <p style={{color: "blue"}}>입장할 수 없습니다</p>


            }
            
        </button>
        
        
    </div>
  )
}

export default E_ComfirmButton_Exam