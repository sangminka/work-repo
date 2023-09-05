// Emp.js : 사원 상세조회 페이지
// rfce
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmpService from "../../services/EmpService";


function Emp() {
  // TODO 1) 상세조회 함수 작성하기
  // TODO : 변수명 : customer(객체),message
  // TODO : EmpService.js(공통js 함수: get(`customer/${id}`):)
  const { id } = useParams();
  let navigate = useNavigate();

  //바인딩 변수

  //임시객체 초기화
  const initialEmp = {
    cname: "",
    email: "",
    phone: "",
    id: "",
  };
  let [customer, setCustomer] = useState(initialEmp);
  let [message, setMessage] = useState("");
//   TODO: 함수 정의

  const getEmp = (id) =>{
    EmpService.get(id)
    .then((response)=>{
        setCustomer(response.data)
        console.log(response.data)
    })
    .catch((e)=>{
        console.log(e)
    })
  }

  useEffect(() => {
    if(id){
        getEmp(id)
    }
  },[id])
  const handleInputChange = (event) => {
    //
    let attrValue = event.target.value; // 화면 입력값 (객체의 속성값)
    let attrName = event.target.name; // 화면 태그 이름(객체의 속성명)
    // 스프레드 연산자 속성 수정
    setCustomer({ ...customer, [attrName]: attrValue });
  };
  // 수정함수 : 클릭
  const updateCustomer = () => {
    EmpService.update(customer.id,customer)
    .then((response) => {
        console.log(response.data)
        setMessage("부서 수정이 성공하였습니다.")
    })
    .catch((e)=>{
        console.log(e)
        setMessage("수정 완료")
    })
  };

  // 삭제함수 : 클릭
  const deleteCustomer = () => {
    EmpService.remove(customer.id)
    .then((response)=>{
        console.log(response.data)
        navigate("/emp")
    })
    .catch((e)=>{
        console.log(e)
    })
  };
  return (
    <>
      {/* 제목 start */}
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-6 mb-5 mt-5">
          <h1>Emp Detail</h1>
        </div>
        {/* 제목 끝 */}
      </div>
      {/* 제목 end */}

      <>
        {customer ? (
          <div className="col-6 mx-auto">
            <form>
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="cname" className="col-form-label">
                    Cname
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
              </div>
            </form>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteCustomer}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateCustomer}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>

            <p>{message}</p>
          </div>
        ) : (
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Customer...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Emp;
