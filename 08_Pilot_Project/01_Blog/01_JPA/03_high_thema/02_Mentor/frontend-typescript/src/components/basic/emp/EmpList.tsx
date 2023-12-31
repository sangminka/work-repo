import React, { useEffect, useState } from 'react'
import IEmp from '../../../types/basic/IEmp';
import EmpService from '../../../services/basic/EmpService';
import TitleCom from '../../../components/common/TitleCom';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

function EmpList() {
    // 변수 정의
    // 부서 배열 변수
    const[emp,setEmp] = useState<Array<IEmp>>([]);
    // 검색어 변수
    const[searchEname,setSearchEname] = useState<string>("");

    // TODO: 공통 변수 : page(현재페이지), count(총페이지건수), pageSize(3,6,9 배열)
    const[page, setPage] = useState<number>(1);
    const[count, setCount] = useState<number>(1);
    const[pageSize, setPageSize] = useState<number>(3); // 1페이지당 개수
    // TODO :pageSizes : 배열 (셀렉트 박스 사용)
    const pageSizes = [3,6,9];


    // 함수 정의
      // TODO: 1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {실행문},[])
      // TODO: 2) 컴포넌트의 변수값이 변할때 실행됨 : useEffect(() => {실행문},[감시변수])
  useEffect(() => {
    retrieveEmp(); // 전체 조회
  }, [page,pageSize]);

//   전체조회 함수
    const retrieveEmp = () => { 
      // 백엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
       EmpService.getAll(searchEname, page -1, pageSize)
       .then((response: any)=>{
      // 백엔드 성공시 실행됨
      // es6 문법 : 객체 분해 할당
      // const dept = response.data.dept; // 부서배열
      // const totalPages = response.data.totalPages; // 전체페이지수
        const { emp, totalPages } = response.data;
      // dept 저장
      setEmp(emp);
      setCount(totalPages);
      // 로그 출력
      console.log("response", response.data);
       })
       .catch((e: Error)=>{
          console.log(e);
       })
     }
    
//   검색어 수동 바인딩 함수
    const onChangeSearchEname = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchEname = e.target.value;
        setSearchEname(searchEname);
    };

    // handlePageSizeChange : pageSize 값 변경시 실행되는 함수
    // 수동 바인딩 : 화면값 -> 변수에 저장
    const handlePageSizeChange = (event : any) => {
        setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
        setPage(1); // 현재페이지 번호 :1로 강제설정
    }

    // Pagination 수동 바인딩
    // 페이지 번호를 누르면 => page 변수에 값 저장
    const handlePageChange = (event:any, value:number) => {
      // value == 화면의 페이지 번호
      setPage(value);
     }

  return (
    <>
    {/* 제목 start */}
    <TitleCom title="Emp List" />
    {/* 제목 end */}

    {/* dname start(검색어 입력창) */}
    <div className="row mb-5 justify-content-center">
      {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
      <div className="col-12 w-50 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by ename"
          value={searchEname}
          onChange={onChangeSearchEname}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              setPage(1); // 페이지를 1페이지로 초기화
              retrieveEmp(); // 검색 실행
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {/* ename end */}

    {/* paging 시작(페이지번호 컴포넌트) */}
    <div className="mt-3">
      {"Items per Page: "}
      {/* 페이지 사이즈 변경하는 셀렉트 박스 시작 */}
      <select onChange={handlePageSizeChange} value={pageSize}>
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      {/* 페이지 사이즈 변경하는 셀렉트 박스 끝 */}

      {/* Material UI 구글 컴포넌트 시작 */}
      {/* 사용법: count = {1페이지당개수}, page : 현재페이지번호 */}
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
      {/* Material UI 구글 컴포넌트 끝 */}

    </div>
    {/* paging 끝 */}

    {/* table start(테이블 본문) */}
    <div className="col-md-12">
      {/* table start */}
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Eno</th>
            <th scope="col">Ename</th>
            <th scope="col">Job</th>
            <th scope="col">Manager</th>
            <th scope="col">Hiredate</th>
            <th scope="col">Salary</th>
            <th scope="col">Commission</th>
            <th scope="col">Dno</th>
          </tr>
        </thead>
        <tbody>
          {emp &&
            emp.map((data) => (
              <tr key={data.eno}>
                <td>{data.eno}</td>
                <td>{data.ename}</td>
                <td>{data.job}</td>
                <td>{data.manager}</td>
                <td>{data.hiredate}</td>
                <td>{data.salary}</td>
                <td>{data.commission}</td>
                <td>{data.dno}</td>
                <td>
                  <Link to={"/emp/" + data.eno}>
                    <span className="badge bg-success">Edit</span>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* table end */}
    </div>
    {/* table end */}
  </>
  )

}

export default EmpList