import React from 'react'

function SignUp() {
  return (
    <div>
      {/* 회원가입 타이틀 */}
      <div className='signUpLogo'>
        <h2>회원 가입</h2>
      </div>

      {/* 아이디,비번,비번확인,이름 input */}
      <div className='singUpField'>
        <b>아이디</b>
        <input className='singUpId' type = 'text'/>

        <b>비밀번호</b>
        <input className='singUpPw' type = 'password'/>

        <b>비밀번호 확인</b>
        <input className='signUpPw-confirm' type = 'password'/>

        <b>이름</b>
        <input className='singUpUserName' type = 'text'/>
      </div>

      {/* 생년 월일 시작*/}
      <div className='signUpBirthField'>
        <b>생년월일</b>
        <div>
          <input type = 'number' placeholder='년(4자리)'/>
          <select>
            <option>1월</option>
            <option>2월</option>
            <option>3월</option>
            <option>4월</option>
            <option>5월</option>
            <option>6월</option>
            <option>7월</option>
            <option>8월</option>
            <option>9월</option>
            <option>10월</option>
            <option>11월</option>
            <option>12월</option>
          </select>
          <input type = "number" placeholder='일'/>
        </div>
      </div>
      {/* 생년월일 끝 */}
      {/* 성별 시작 */}
      <div className= 'signUpGender'>
        <b>성별</b>
        <div>
          <label><input type='radio' name='gender'/>남자</label>
          <label><input type='radio' name='gender'/>여자</label>
          <label><input type='radio' name='gender'/>선택안함</label>
        </div>
      </div>
      {/* 성별 끝 */}

      {/* 이메일 전화번호 시작*/}
      <div>
        <b>본인 확인 이메일<small>(선택)</small></b>
        <input type='email' placeholder='선택입력'/>
      </div>

      <div>
        <b>휴대전화</b>
        <select>
          <option>대한민국 +82</option>
        </select>

        <div>
          <input type = 'tel' placeholder='전화번호 입력'/>
          <input type = 'button' placeholder='인증번호 받기'/>
        </div>
        <input type = 'number' placeholder='인증번호를 입력하세요'/>
      </div>
      {/* 이메일 전화번호 끝 */}

      {/* 가입하기 버튼 */}
      <input type = 'submit' value='가입하기'/>

      
    </div>
    
  )
}

export default SignUp