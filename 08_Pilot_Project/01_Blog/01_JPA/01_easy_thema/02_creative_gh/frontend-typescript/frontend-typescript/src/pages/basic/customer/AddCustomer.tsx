import React, { useState } from 'react'
import ICustomer from '../../../types/basic/ICustomer';
import CustomerService from '../../../services/basic/CustomerService';
import TitleCom from '../../../components/common/TitleCom';
import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
import CustomerList from './CustomerList';


function AddCustomer() {
    const Navigate = useNavigate();
    const initialCustomer = {
        cid: null,
        fullName: "",
        email: "",
        phone: "",
      };
    
      // 부서 객체
      const [customer, setCustomer] = useState<ICustomer>(initialCustomer);
      // 저장버튼 클릭후 submitted = true 변경됨
      const [submitted, setSubmitted] = useState<boolean>(false);
      
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      // input 태그에 수동 바인딩
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target; // 화면 값
        setCustomer({ ...customer, [name]: value });  // 변수 저장
      };
    
    
      // 저장 함수
      const saveCustomer = () => {
        var data = {
          // 임시 부서 객체
          fullName: customer.fullName,
          email: customer.email,
          phone: customer.phone,
        };
    
        
        CustomerService.create(data)    // 저장 요청
          .then((response: any) => {
            setSubmitted(true);
            console.log(response.data);
            // Navigate("/customer")      
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      // 새폼 보여주기 함수 : 변수값 변경 -> 함수 자동 갱신(리엑트 특징)
      const newCustomer = () => {
        setCustomer(initialCustomer); // 부서 초기화
        setSubmitted(false);  // submitted 변수 초기화
        // Navigate("/customer")      

      };
      
      // const newCustomer2 = () => {
      //   // setCustomer(initialCustomer); // 부서 초기화
      //   // setSubmitted(false);  // submitted 변수 초기화
      //   return <CustomerList/> 

      // };
  return (
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
          {/* <button className="btn btn-success" onClick={newCustomer2}>
            back
          </button> */}
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Customer" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            {/* fullname 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              {/* 라벨 시작 */}
              <div className="col-3">
                <label htmlFor="fullName" className="col-form-label">
                FullName
                </label>
              </div>
              {/* 라벨 끝 */}

              <div className="col-9">
                <input
                  type="text"
                  id="fullName"
                  required
                  className="form-control"
                  value={customer.fullName}
                  onChange={handleInputChange}
                  placeholder="fullName"
                  name="fullName"
                />
              </div>
            </div>
            {/* fullname 입력창 끝 */}

            {/* email 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              {/* 라벨 시작 */}
              <div className="col-3">
                <label htmlFor="email" className="col-form-label">
                Email
                </label>
              </div>
              {/* 라벨 끝 */}

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
            {/* email 입력창 끝 */}

            {/* phone 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              {/* 라벨 시작 */}
              <div className="col-3">
                <label htmlFor="phone" className="col-form-label">
                Phone
                </label>
              </div>
              {/* 라벨 끝 */}

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
            {/* phone 입력창 끝 */}



            {/* 저장버튼 시작 */}
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
        </>
      )}
    </div>
  )
}

export default AddCustomer