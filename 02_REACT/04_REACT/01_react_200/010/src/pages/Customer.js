import React, { useEffect, useState } from "react";
import CustomerService from "../service/CustomerService";
import { Link } from "react-router-dom";

function Customer() {
  // TODO 변수정의
  let [customer, setCustomer] = useState();
  let [searchCname, setSearchCname] = useState("");
  // TODO 함수 정의
  const retrieveCustomer = () => {
    CustomerService.gatall()
      .then((response) => {
        setCustomer(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveCustomer();
  }, []);

  const findByCname = () => {
    CustomerService.findByCname(searchCname) // 검색어로 조회 요청
      .then((response) => {
        // 성공하면 자동실행
        setCustomer(response.data); // 백엔드에서 전달해준 데이터를 저장 (response.data)
        //로그 찍기
        console.log(response.data); //벡엔드데이터(response.data)
      })
      .catch((e) => {
        //실패하면 자동실행
        console.log(e); //에러메세지 출력 콘솔
      });
  };

  const onChangeSearchCname = (event) => {
    setSearchCname(event.target.value);
  };
  return (
    <div>
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-12 mb-5 mt-5">
          <h1>Customer List</h1>
        </div>
        {/* 제목 끝 */}
      </div>

      {/* 검색창 시작 */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          {/* 검색어 입력창 시작 */}
          <input
            type="text"
            className="form-control"
            placeholder="Search by cname"
            value={searchCname}
            onChange={onChangeSearchCname}
          />
          {/* 검챗어 입력창 끝 */}

          {/* 검색 버튼 */}
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCname}
            >
              Search
            </button>
          </div>
          {/* 검색 버튼 끝 */}  
        </div>
      </div>

      {/* 테이블 시작 */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          {/* 테이블 제목 시작 */}
          <thead className="table-light">
            <tr>
              <th scope="col">Cname</th>
              <th scope="col">Loc</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* 테이블 제목 끝 */}

          <tbody>
            {/* 반복문 시작 */}
            {customer &&
              customer.map((data, index) => (
                <tr key={index}>
                  <td>{data.cname}</td>
                  <td>{data.loc}</td>
                  <td>
                    {/* 1)사용법 : /url?변수명=변수값 (쿼리스트링 방식)  */}
                    {/* 2)사용법 : /url/변수값        (파라메터 방식)
                    -> 다른페이지에서 값을 받을수 있음 */}
                    {/* 클릭하면 상세페이지(컴포넌트)가 화면에 뜸(부서번호도 넘겨줌) */}
                    <Link to={"/customer/" + data.id}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
            {/* 반복문 끝 */}
          </tbody>
        </table>
        {/* table end */}
      </div>
      {/* 테이블 끝 */}
    </div>
  );
}

export default Customer;
