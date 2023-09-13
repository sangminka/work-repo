import React, { useState } from 'react'
import Customer from './Customer';

function Add_Customer() {
  // TODO 변수 정의
  // 임시 객체(초기화)
  const initialCustomer = {
    id: null, //부서번호
    dname: "",//부서명
    email: "",
    phone: ""   //부서위치
  }
  //  바인딩 변수
  let[customer,setCustomer] = useState(initialCustomer)   // 벡엔드로 전송할 변수(insert 요청)
  let[submitted,setSubmitted] = useState(false); // 저장버튼 클릭여부를 가진 변수

  // 역바인딩 함수
  const handleInputChange = (event) => { 
    // 
    let attrValue = event.target.value; // 화면 입력값 (객체의 속성값)
    let attrName = event.target.name; // 화면 태그 이름(객체의 속성명)
    // 스프레드 연산자 속성 수정
    setCustomer({...customer, [attrName] : attrValue})
   }

   const saveCustomer = () => {
    let data = {
      dname: customer.dname,
      email: customer.email,
      phone: customer.phone
    }
    console.log(data  + "저장되었습니다.")
   }

   const newCustomer = () => {
    setCustomer(initialCustomer)
    setSubmitted(false)
   }
  return (
    // TODO: 여기
    <div className="row">
      {/* 변수(submitted) ? 참 : 거짓 */}
    {submitted ? (
      // submitted = true : 저장버튼을 클릭했다는 의미
      // newDept() 함수 실행되면 : 새로운 빈폼을 화면에 보여주고, submitted = false
      <div className="col-6 mx-auto">
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newCustomer}>
          Add
        </button>
      </div>
    ) : (
      // <></> : 플래그맨테이션(flagmetation)
      <>
      {/* 제목 시작 */}
        <div className="row">
          {/* 제목 시작 */}
          <div className="col-md-6 mb-5 mt-5">
            <h1>Add Customer</h1>
          </div>
          {/* 제목 끝 */}
        </div>
      {/* 제목 끝 */}
        {/* 폼(from) 입력양식 시작 */}
        <div className="col-6 mx-auto">
          {/* 부서명(dname) 시작 */}
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="dname" className="col-form-label">
                Dname
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="dname"
                required
                className="form-control"
                value={customer.dname}
                onChange={handleInputChange}
                placeholder="dname"
                name="dname"
              />
            </div>
          </div>
          {/* 부서명(dname) 끝 */}

          {/* 부서 위치(email) 시작 */}
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="email" className="col-form-label">
                email
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="email"
                required
                className="form-control"
                value={customer.email}
                onChange={handleInputChange}
                placeholder="email"
                name="email"
              />
            </div>
          </div>
          {/* 부서 위치(email) 끝 */}
          {/* 폰(phone) 시작 */}
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="phone" className="col-form-label">
                phone
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="phone"
                required
                className="form-control"
                value={customer.phone}
                onChange={handleInputChange}
                placeholder="phone"
                name="phone"
              />
            </div>
          </div>
          {/* 부서 위치(email) 끝 */}

          {/* 저장 버튼 시작 */}
          <div className="row g-3 mt-3 mb-3">
            <button
              onClick={saveCustomer}
              className="btn btn-outline-primary ms-2 col"
            >
              Submit
            </button>
          </div>
          {/* 저장 버튼 끝 */}
        </div>
        {/* 폼(from) 입력양식 끝 */}
      </>
    )}
  </div>
  )
}

export default Add_Customer