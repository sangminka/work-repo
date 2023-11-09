import React, { useState } from 'react'
import IEmp from "../../types/IEmp";
import EmpService from '../../services/EmpService';
import TitleCom from '../../components/common/TitleCom';


function AddEmpNop() {
    // 변수 정의
    // TODO: 초기확 객체
    const initialEmp = {
        eno: null ,
        commission: "",
        dno:  "" ,
        ename: "" ,
        hiredate: "" ,
        job: "",
        manager: "",
        salary: ""
    }
  
    // TODO: 새부서 객체 변수
    const [emp,setEmp] = useState<IEmp>(initialEmp);
    // TODO: 저장하면 true, 아니면 false 인 변수(값에따라 화면 바뀜)
    const [submitted,setSubmitted] = useState<boolean>(false);
  
    // 함수 정의
    // TODO: 새로운 폼(form)을 보여주는 함수
    const newEmp = () => { 
      // 새폼 == 객체초기화, submitted 변수 초기화(false)
      setEmp(initialEmp); // 객체 초기화
      setSubmitted(false);
     }
    // TODO: 각각의 입력창 수동바인딩 공통함수
    const handleInputChange = (event: any) => { 
        const { name, value } = event.target; // 화면값[이름]
        // 화면값 -> Dept 객체에 속성에 저장 
        setEmp({...emp, [name]:value});
     }
  
    // TODO: 저장 함수
    const saveEmp = () => { 
      // 임시 부서 변수 (저장될 객체)
      var data = {
        commission: emp.commission,
        dno : emp.dno,
        ename : emp.ename,
        hiredate : emp.hiredate,
        job : emp.job,
        manager : emp.manager,
        salary : emp.salary
       }
      // 저장 함수 호출
      EmpService.create(data) // 백엔드로 저장 요청
      .then((response:any)=>{
        // 저장 성공 유무 -> submitted 변수 : true 변경
        setSubmitted(true); // 화면 변경
        console.log(response.data);
      })
      .catch((e:Error)=>{
          console.log(e);
      })
      
     }
  
    return (
      // 여기
      <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmp}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Emp Nopage" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="dname" className="col-form-label">
                  Ename
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="ename"
                  required
                  className="form-control"
                  value={emp.ename}
                  onChange={handleInputChange}
                  placeholder="ename"
                  name="ename"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Job
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="job"
                  required
                  className="form-control"
                  value={emp.job}
                  onChange={handleInputChange}
                  placeholder="job"
                  name="job"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Manager
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="manager"
                  required
                  className="form-control"
                  value={emp.manager}
                  onChange={handleInputChange}
                  placeholder="manager"
                  name="manager"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Hiredate
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="hiredate"
                  required
                  className="form-control"
                  value={emp.hiredate}
                  onChange={handleInputChange}
                  placeholder="hiredate"
                  name="hiredate"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Salary
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="salary"
                  required
                  className="form-control"
                  value={emp.salary}
                  onChange={handleInputChange}
                  placeholder="salary"
                  name="salary"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Commission
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="commission"
                  required
                  className="form-control"
                  value={emp.commission}
                  onChange={handleInputChange}
                  placeholder="commission"
                  name="commission"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Dno
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="dno"
                  required
                  className="form-control"
                  value={emp.dno}
                  onChange={handleInputChange}
                  placeholder="dno"
                  name="dno"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button onClick={saveEmp} className="btn btn-outline-primary ms-2 col">
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    );
  }

export default AddEmpNop