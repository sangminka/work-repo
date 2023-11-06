import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import AddQna from "../../components/basic/qna/AddQna";
import initMain1 from "../../assets/js/main";

function AddQnaPage() {
  useEffect(() => {
    initMain1();
  }, []);
  return (
    <>
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Q & A 조회</h2>
          <p>Q & A 조회 게시판 입니다.</p>
        </div>
      </div>
      {/* End Breadcrumbs */}

      <section id="qna" className="qna">
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <AddQna />
          </div>
        </div>
      </section>
      {/* End Counts Section */}
    </>
  );
}

export default AddQnaPage;
