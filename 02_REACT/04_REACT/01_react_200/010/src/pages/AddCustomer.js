// AddCustomer.js : customer 추가 페이지
// rfce
import React, { useState } from 'react'
import CustomerService from '../../services/CustomerService';
import { useState } from 'react';

function AddCustomer() {

  // TODO 변수 정의
  // 임시 객체(초기화)
  const initialCustomer = {
    id: null, //부서번호
    cname: "",//부서명
    loc: ""   //부서위치
  }

  // 바인딩 변수 : let [변수명,set변수명] = useState(초기값);
  let[customer,setCustomer] = useState(initialCustomer)   // 벡엔드로 전송할 변수(insert 요청)
  let[submitted,setSubmitted] = useState(false); // 저장버튼 클릭여부를 가진 변수

  // TODO 함수 정의
  // 역바인딩 함수 : onChange={handleInputChange}
  // nfn 화살표 단축키
  const handleInputChange = (event) => { 
    // 
    let attrValue = event.target.value; // 화면 입력값 (객체의 속성값)
    let attrName = event.target.name; // 화면 태그 이름(객체의 속성명)
    // 스프레드 연산자 속성 수정
    setCustomer({...customer, [attrName] : attrValue})
   }
  //  저장 함수 : 클릭 함수(onClick={함수명})
  // nfn
  // 백엔드로 customer 객체를 저장 요청 (axios : 공통저장함수(create()))
   const saveCustomer = () => { 
    //임시 저장용 객체
    let data = {
      cname: customer.cname, //화면 입력값(부서명)
      loc: customer.loc      //화면 입력값(부서위치)
    }

    CustomerService.create(data)      // 저장요청(부서객체)
    .then((response) => {     //성공하면 자동실행
      setCustomer(response.data); //벡엔드에 저장한 객체를 받아서 변수에 저장
      setSubmitted(true);     //저장 버튼 클릭 + 저장성공(false -> true)
      console.log(response.data)
    })
    .catch((e) => {   //실패하면 자동실행
      console.log(e); //에러 메세지 출력
    })
    }

    // 저장 버튼 클릭 : 새로운 화면 전환(버튼이 1개 있는 화면)
    // 3항 연산자의 다른 화면이 출력(submitted == true)
    // nfn
    const newCustomer = () => {
      // 역활 : 변수 초기화(객체, submitted = false)
      setCustomer(initialCustomer)
      setSubmitted(false)
    }

  return (
    // TODO: 여기
    <div className="row">
      {/* 변수(submitted) ? 참 : 거짓 */}
    {submitted ? (
      // submitted = true : 저장버튼을 클릭했다는 의미
      // newCustomer() 함수 실행되면 : 새로운 빈폼을 화면에 보여주고, submitted = false
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
          {/* 부서명(cname) 시작 */}
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="cname" className="col-form-label">
                Dname
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="cname"
                required
                className="form-control"
                value={customer.cname}
                onChange={handleInputChange}
                placeholder="cname"
                name="cname"
              />
            </div>
          </div>
          {/* 부서명(cname) 끝 */}

          {/* 부서 위치(loc) 시작 */}
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Loc
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="loc"
                required
                className="form-control"
                value={customer.loc}
                onChange={handleInputChange}
                placeholder="loc"
                name="loc"
              />
            </div>
          </div>
          {/* 부서 위치(loc) 끝 */}

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

export default AddCustomer