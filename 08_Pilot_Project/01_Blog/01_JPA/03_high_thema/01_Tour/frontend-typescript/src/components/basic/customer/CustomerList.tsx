import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import TitleCom from "../../../components/common/TitleCom";
import { Pagination } from "@mui/material";
import ICustomer from "../../../types/basic/ICustomer";
import CustomerService from "../../../services/basic/CustomerService";
import TitleCom from "../../common/TitleCom";

function CustomerList() {
  // 변수 정의
  // qna 배열 변수
  const [customer, setCustomer] = useState<Array<ICustomer>>([]);
  // select 태그에 선택된 값을 저장할 변수 : 기본 (question)
  const [searchSelect, setSearchSelect] = useState<string>("fullName");
  // 검색어 input 변수
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  // 함수 정의

  // todo: 공통 페이징 변수 4개
  // TODO: 공통 변수 : page(현재페이지), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당 개수
  // TODO :pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  // 함수 정의
  // 화면이 뜰때 실행되는 이벤트 + 감시변수
  useEffect(() => {
    retrieveCustomer(); // 전체 조회 실행
  }, [page, pageSize]);

  // 전체 조회
  const retrieveCustomer = () => {
    // 백엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    CustomerService.getAll(searchSelect, searchKeyword, page - 1, pageSize)
      .then((response: any) => {
        const { customer, totalPages } = response.data;
        setCustomer(customer);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //    select 태그 수동 바인딩
  const onChangeSearchSelect = (e: any) => {
    setSearchSelect(e.target.value); // 화면 값 -> 변수 저장
  };

  //    input 태그 수동 바인딩
  const onChangeSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value); // 화면 값 -> 변수 저장
  };

  // TODO: 공통 페이징 함수
  // handlePageSizeChange : pageSize 값 변경시 실행되는 함수
  // 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지 번호 :1로 강제설정
  };
  // Pagination 수동 바인딩
  // 페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지 번호
    setPage(value);
  };
  return (
    <>
      {/* 제목 start */}
      {/* <TitleCom title="Customer List" /> */}
      {/* 제목 end */}

      {/* customer start */}
      <div className="col-md-8 offset-2">
        <div className="col-12 input-group mb-3">
          <select
            className="form-select"
            onChange={onChangeSearchSelect}
            value={searchSelect}
          >
            <option key="fullName" value="fullName">
              fullName
            </option>
            <option key="email" value="email">
              email
            </option>
          </select>

          <input
            type="text"
            className="form-control"
            placeholder="Search by Question"
            value={searchKeyword}
            onChange={onChangeSearchKeyword}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveCustomer}
            >
              Search
            </button>
          </div>
          
        </div>
      </div>
      {/* customer end */}

      {/* select + table 시작 */}
      <div className="col-md-12">
        {/* page control start */}
        <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          {/* <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          /> */}
        </div>
        {/* page control end */}

        {/* table start */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">cid</th>
              <th scope="col">fullName</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer &&
              customer.map((data) => (
                // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
                <tr key={data.cid}>
                  <td>{data.cid}</td>
                  <td>{data.fullName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={"/customer/" + data.cid}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>

      {/* 페이지 네이션 시작 */}
      <div className="col-md-6 offset-5">
        <Pagination
          className="my-3"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
      {/* 페이지 네이션 끝 */}
    </>
  );
}

export default CustomerList;
