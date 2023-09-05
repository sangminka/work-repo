// AddEmp.js
// rfce
import React from "react";
import "../asset/chapter15.css";
import { useState } from "react";
function AddEmp() {
  // TODO 변수정의
  const initailemp = {
    ename: "", // 사원명
    job: "", // 직위
    manager: "", // 관리자 사번
    hiredate: "", // 입사일
    salary: "", // 월급
    commission: "", // 인센티브
    dno: "", // 부서 번호
  };

  let [emp, setEmp] = useState(initailemp);
  // TODO 함수 정의
  // onChange : 역바인딩 함수(직접 코딩) : handleChange();
  // nfn
  const handleChange = (event) => {
    // 현재 화면 입력값 :
    let attrValue = event.target.value;
    // 현재 화면 태그의 이름
    let attrName = event.target.name; // 태그의 이름 === 객체의 속성명
    // 스프레드 연산자로 객체 속성 수정
    setEmp({ ...Emp, [attrName]: attrValue });
  };
  const saveEmp = () => {
    alert("저장되었습니다.");
  };
  return (
    <div className="submit-form">
      <div className="form-group">
        <label htmlFor="ename">Ename</label>
        <input
          type="text"
          className="form-control"
          id="ename"
          required
          value={emp.ename}
          onChange={handleChange}
          name="ename"
        />
      </div>

      <div className="form-group">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="form-control"
          id="job"
          required
          value={emp.job}
          onChange={handleChange}
          name="job"
        />
      </div>

      <div className="form-group">
        <label htmlFor="manager">manager</label>
        <input
          type="number"
          className="form-control"
          id="manager"
          required
          value={emp.manager}
          onChange={handleChange}
          name="manager"
        />
      </div>

      <div className="form-group">
        <label htmlFor="hiredate">hiredate</label>
        <input
          type="number"
          className="form-control"
          id="hiredate"
          required
          value={emp.hiredate}
          onChange={handleChange}
          name="hiredate"
        />
      </div>

      <div className="form-group">
        <label htmlFor="salary">salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          required
          value={emp.salary}
          onChange={handleChange}
          name="salary"
        />
      </div>

      <div className="form-group">
        <label htmlFor="commission">commission</label>
        <input
          type="number"
          className="form-control"
          id="commission"
          required
          value={emp.commission}
          onChange={handleChange}
          name="commission"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dno">dno</label>
        <input
          type="number"
          className="form-control"
          id="dno"
          required
          value={emp.dno}
          onChange={handleChange}
          name="dno"
        />
      </div>

      <button onClick={saveEmp} className="btn btn-success mt-3">
        Submit
      </button>
    </div>
  );
}

export default AddEmp;
