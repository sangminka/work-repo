// CustomerListPage.tsx
import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import CustomerList from "../../components/basic/customer/CustomerList";
import initMain1 from "../../assets/js/main";

function CustomerListPage() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
      <main id="main">
        <section id="add" className="add">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>조회 페이지</h2>
              {/* <p>게시글 조회를 할 수 있습니다.</p> */}
            </div>
            {/* ======= Counts Section ======= */}
            {/* <section id="customer" className="customer"> */}
            <div className="container" data-aos="fade-up">
              <div className="row mt-5">
                <CustomerList />
              </div>
            </div>
            {/* </section> */}
            {/* End Counts Section */}
          </div>
        </section>
      </main>
    </>
  );
}

export default CustomerListPage;
