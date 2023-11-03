import React from 'react'
import Qna from '../../components/basic/qna/Qna'
import { useEffect } from 'react';
import initScripts from '../../assets/js/scripts';
import initCustom from '../../assets/js/custom';

function QnaPage() {
    useEffect(() => {
        // initScripts();
        initCustom();
      }, []);
  return (
    <>
      {/* 태마디자인 소스 복사 */}
      {/* 1 */}
      {/* 테마 제목 시작 */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">상세 조회</h1>
                <p className="text-white">
                  여기에서 Q & A 정보를 확인하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 테마 제목 끝 */}

      {/* 본문 시작 */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <Qna/>
          </div>
        </div>
      </div>
      {/* 본문 끝 */}
    </>
  )
}

export default QnaPage