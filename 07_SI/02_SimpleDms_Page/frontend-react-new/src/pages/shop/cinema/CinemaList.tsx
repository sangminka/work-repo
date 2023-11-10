// CinemaList
import React, { useEffect, useRef, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import { Link } from "react-router-dom";
import ICinema from "../../../types/shop/ICinema";
import CinemaService from "../../../services/shop/CinemaService";
// 달력 이미지 경로
import imgCalendar from "../../../assets/img/calendar.png";

function CinemaList() {
  // todo: 변수 정의
  // 배열 변수
  const [cinema, setCinema] = useState<Array<ICinema>>([]);
  // 검색어(k: 한국영화, F : 외국영화) 변수
  const [searchNationCode, setSearchNationCode] = useState<string>("");

  // TODO: 공통 변수 :pageSize(3,6,9 배열)
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당 개수
  // TODO :pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];
  // todo: 달력변수 정의
  // useRef() : html 태그에 직접접근하게 하는 함수
  // datepicker.current.value : 그 html 태그의 값
  const datepicker = useRef<any>();

  // todo : 함수 정의
  useEffect(() => {
    // todo: 달력(jquery-ui 초기화)
    $("#datepicker").datepicker({
        dateFormat: "yymmdd",
        showOn: "button", // 버튼을 클릭하면 달력보이기
        buttonImage: imgCalendar, // 버튼에 달력 이미지 보이기
      });
    retrieveCinema(); // 전체 조회
  }, [pageSize]);

  //   전체조회 함수
  const retrieveCinema = () => {

    // 백엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    // getall(현재 선택된 날짜, 영화구분, 페이지크기)
    CinemaService.getAll(datepicker.current.value,searchNationCode,pageSize)
      .then((response: any) => {
        // 백엔드 성공시 실행됨
        // es6 문법 : 객체 분해 할당
        const { dailyBoxOfficeList } = response.data.boxOfficeResult;        // dept 저장
        setCinema(dailyBoxOfficeList);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //   검색어 수동 바인딩 함수
  const onChangeSearchNationCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchNationCode(e.target.value);
  };

  // handlePageSizeChange : pageSize 값 변경시 실행되는 함수
  // 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
  };

  return (
    <>
      {/* 제목 start */}
      <TitleCom title="Cinema List" />
      {/* 제목 end */}

      <div className="row mb-3"></div>

      {/* rankOldAndNew start */}
      <div className="row mb-1">
        <div className="col-1">
          <label htmlFor="inputPassword6" className="col-form-label">
            영화구분 :
          </label>
        </div>

        <div className="col-2">
          <select
            className="form-select"
            onChange={onChangeSearchNationCode}
            value={searchNationCode}
          >
            <option key="all" value="">
              전체
            </option>
            <option key="korea" value="K">
              국내영화
            </option>
            <option key="foreign" value="F">
              외국영화
            </option>
          </select>
        </div>

        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-auto w-25 input-group mb-3">
          <div className="input-group">
            <span className="input-group-addon me-2">
              <label htmlFor="inputPassword6" className="col-form-label">
                달력 :
              </label>
            </span>
            <input
              type="text"
              id="datepicker"
              className="form-control"
              disabled
              ref={datepicker}
            />
            <button className="btn btn-primary ms-5" onClick={retrieveCinema}>
              조회
            </button>
          </div>
        </div>
      </div>
      {/* rankOldAndNew end */}
      {/* paging 시작 */}
      <div className="mb-1">
        {"Items per Page: "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      {/* paging 끝 */}
      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">순위</th>
              <th scope="col">영화명</th>
              <th scope="col">개봉일</th>
              <th scope="col">누적관객수</th>
              <th scope="col">상영관수</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cinema &&
              cinema.map((data) => (
                <tr key={data.movieCd}>
                  <td>{data.rank}</td>
                  <td>
                    {data.movieNm}
                    <span className="badge rounded-pill text-bg-warning ms-2">
                      {data.rankOldAndNew == "NEW" ? data.rankOldAndNew : ""}
                    </span>
                  </td>
                  <td>{data.openDt}</td>
                  <td>{parseInt(data.audiAcc).toLocaleString()}</td>
                  <td>{parseInt(data.scrnCnt).toLocaleString()}</td>
                  <td>
                    <Link to={"/cinema/" + data.movieCd}>
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
  );
}

export default CinemaList;
