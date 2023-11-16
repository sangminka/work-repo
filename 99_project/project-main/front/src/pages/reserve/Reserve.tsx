import React, { useEffect } from "react";
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";

function Reserve() {
  useEffect(() => {
    initScripts();
    initCustom();
  }, []);
  return (
    <>
      {/* 공통 */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">예약 하다</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container">

        {/* 마일리지 항공권 예약 버튼 */}
        <div className="d-flex justify-content-end mt-5">
          <button className="sangmin_reserve_btn d-flex justify-content-end">
            마일리지 항공권 예약하기
          </button>
        </div>

        {/* step bedge */}
        <div className="d-flex justify-content-center mt-5 col-12">
          <div className="sangmin_step_bedge">
            <span className="badge rounded-pill text-bg-danger"> 1 검색 </span>
            {/* <span> 검색 </span> */}
            {/* <span></span> */}
          </div>
          <div className="sangmin_step_bedge">
            <span className="badge rounded-pill text-bg-danger">2</span>
            {/* <span> 검색 </span> */}
            {/* <span></span> */}
          </div>
          <div className="sangmin_step_bedge">
            <span className="badge rounded-pill text-bg-danger">3</span>
            {/* <span> 검색 </span> */}
            {/* <span></span> */}
          </div>
        </div>

        {/* 안내상황 */}
        <div className="sangmin_reserve_notice mt-5">
        <ul>
            <li>
            개인정보보호법 시행령 제39조의3 제④항 강화 시행령에 따라 만 14세 미만 미성년자 예매 시 법정대리인의 동의 및 인증이 불가피하므로 14세 이상의 성인께서 로그인 후 예매진행을 해 주시기 바랍니다.
            </li>
        </ul>
        </div>

        <div className="sangmin_reserve_sub_title mt-5">
            <h4>여정/날짜 선택</h4>
        </div>
        
      </div>
    </>
  );
}

export default Reserve;
