import React, { useEffect, useState } from "react";
import IReservation from "../../types/reserve/IReservation";
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import MyareaModal from "../modal/MyareaModal";
import ForiareaModal from "../modal/ForiareaModal";

function ReserveChoose() {
  const initiaReservaionl = {
    AirlineReservaitonNumber: null,
    FlightName: "",
    UserId: "",
    RoundOrOne: "",
    EnName: "",
    Departure: "",
    Arrival: "",
    OperationDay: "",
    Airline: "",
    SeatType: "",
    AdultCount: 0,
    ChildCount: 0,
    InfantCount: 0,
    MileUseStatus: "",
    MembershipStatus: "",
    DomesticInternational: "",
    KorCity: "",
    ForiCountry: "",
    ForiCity: "",
    AirportFee:""
  };
//   add 함수
  const [reservation, setReservation] =
    useState<IReservation>(initiaReservaionl);
//   조회 함수
  const [reservationList, setReservationList] = useState<Array<IReservation>>([]);

  // modalcontrol
  const [modalShow, setModalShow] = useState(false);
  const [foriModalShow, foriSetModalShow] = useState(false);

  useEffect(() => {
    initScripts();
    initCustom();
  }, []);
  // const myMo

  return (
    <>
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">항공권 조회</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 상단 바 */}
      <div className="sangmin_choose_top">
        <div className="container">
          {/* 출발지 */}
          <div className="sangmin_choose_top_itineary_select text-start">
            <input
              type="text"
              title="출발지"
              className="sangmin_choose_top_myArea"
              value="출발지"
              onClick={() => setModalShow(true)}
            />
          </div>
          {/* 도착지 */}
          <div className="sangmin_choose_top_itineary_select">
            <input
              type="text"
              title="도착지"
              className="sangmin_choose_top_arriveArea"
              value="도착지"
              onClick={() => foriSetModalShow(true)}
            />
          </div>
          {/* 탑승일 */}
          <div className="sangmin_choose_top_itineary_select">
            <input
              type="text"
              title="탑승일"
              className="sangmin_choose_top_date"
              value="탑승일"
              // className="form-control"
              name="daterange"
            />
          </div>
          {/* 탑승 인원 */}
          <div className="sangmin_choose_top_itineary_select">
            <input
              type="text"
              title="탑승인원"
              className="sangmin_choose_top_passanger_count"
              value="탑승인원"
            />
          </div>
          {/* 좌석등급 */}
          <div className="sangmin_choose_top_itineary_select">
            <input
              type="text"
              title="좌석등급"
              className="sangmin_choose_top_class"
              value="좌석등급"
            />
          </div>
        </div>
      </div>

      {/* step bedge */}
      <div className="d-flex justify-content-center mt-5 col-12">
        <div className="sangmin_step_bedge">
          <span className="badge rounded-pill text-bg-danger">
            {/* {" "} */}
            {/* 1 검색 */}1
          </span>
          {/* <span> 검색 </span> */}
          {/* <span></span> */}
        </div>
        <div className="sangmin_step_bedge">
          <span className="badge rounded-pill text-bg-danger">2 항공편</span>
          {/* <span> 검색 </span> */}
          {/* <span></span> */}
        </div>
        <div className="sangmin_step_bedge">
          <span className="badge rounded-pill text-bg-danger">3</span>
          {/* <span> 검색 </span> */}
          {/* <span></span> */}
        </div>
      </div>
      {/* subTitle */}
      <div className="container">
        <h3 className="sangmin_reserve_choose_subTitle d-flex justify-content-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="air_icon bi bi-airplane-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
          </svg>
          첫 번째 여정
        </h3>
      </div>

      {/* 출/도착 */}
      <div className="sangmin_choose_airport d-flex justify-content-center mt-5">
        <span>서울</span>
        <span> &gt; </span>
        <span>광저우</span>
      </div>
      {/* 반복문 */}
      <div className="sangmin_choose_airport_pee_date">
        <div>
        {reservationList &&
              reservationList.map((data) => (
                // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
                <tr key={data.AirlineReservaitonNumber}>
                    {/* 날짜 */}
                  <td>{data.Departure} + 월</td> 
                  <td>{data.AirportFee}</td>
                </tr>
                
              ))}
          <p className="sangmin_choose_airport_data">11.27 (월)</p>

          <p className="sangmin_choose_airport_price">
            KRW<span className="currency"> 257,000</span>
          </p>
        </div>
      </div>

      {/* test start */}
      {/* <div className="ui_slider_area">
        <div
          className="slide_cont slide_view_content slide_active"
          // style={margin-right: 8px}
        >
          <div className="reservation_cont">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202311260000"
              data-price="257000.00"
              // onClick="javascript:selectCalendarDate(this);"
            >
              <p className="data">11.26 (일)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>

        <div
          className="slide_cont slide_view_content slide_next"
          // style="margin-right: 8px"
        >
          <div className="reservation_cont">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202311270000"
              data-price="257000.00"
              // onclick="javascript:selectCalendarDate(this);"
            >
              <p className="data">11.27 (월)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>

        <div className="slide_cont slide_view_content">
          <div className="reservation_cont">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202311280000"
              data-price="257000.00"
              // onclick="javascript:selectCalendarDate(this);"
            >
              <p className="data">11.28 (화)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>

        <div className="slide_cont slide_view_content">
          <div className="reservation_cont current">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202311290000"
              data-price="257000.00"
              // onclick="javascript:selectCalendarDate(this);"
              title="선택됨"
            >
              <p className="data">11.29 (수)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>

        <div className="slide_cont slide_view_content">
          <div className="reservation_cont">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202311300000"
              data-price="257000.00"
              // onclick="javascript:selectCalendarDate(this);"
            >
              <p className="data">11.30 (목)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>

        <div className="slide_cont slide_view_content">
          <div className="reservation_cont">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202312010000"
              data-price="257000.00"
              // onclick="javascript:selectCalendarDate(this);"
            >
              <p className="data">12.01 (금)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>

        <div className="slide_cont slide_view_content">
          <div className="reservation_cont">
            <a
              href="#none"
              className="text_cont"
              data-segindex="0"
              data-searchdatetime="202312020000"
              data-price="257000.00"
            >
              <p className="data">12.02 (토)</p>

              <p className="price">
                KRW<span className="currency"> 257,000</span>
              </p>
            </a>
          </div>
        </div>
      </div> */}

      {/* test end */}

      {/* 모달 불러오기 */}
      <MyareaModal show={modalShow} onHide={() => setModalShow(false)} />
      <ForiareaModal
        show={foriModalShow}
        onHide={() => foriSetModalShow(false)}
      />
    </>
  );
}

export default ReserveChoose;
