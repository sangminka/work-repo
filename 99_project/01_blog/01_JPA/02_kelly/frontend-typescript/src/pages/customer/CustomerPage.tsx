//CustomerPage.tsx

import React, { useEffect } from "react";
import CustomerList from "../../components/basic/customer/CustomerList";
import Customer from "../../components/basic/customer/Customer";
import initMain1 from "../../assets/js/main";
import initMain from "../../assets/js/main";
import "../../assets/css/style.css";

function CustomerPage() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
      <main id="main">
        <section id="add" className="add">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>추가 페이지</h2>
              <p>게시글 추가를 할 수 있습니다.</p>
            </div>

            {/* ======= Counts Section ======= */}
            <section id="customer" className="customer">
              <div className="container" data-aos="fade-up">
                <div className="row mt-5">
                  {/* <Customer /> */}
                </div>
              </div>
            </section>
            {/* End Counts Section */}
          </div>
        </section>
      </main>
    </>
  );
}

export default CustomerPage;
