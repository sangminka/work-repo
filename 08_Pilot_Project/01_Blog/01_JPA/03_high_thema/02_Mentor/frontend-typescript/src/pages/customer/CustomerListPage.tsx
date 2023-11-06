// CustomerListPage.tsx
import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import CustomerList from "../../components/basic/customer/CustomerList";
import initMain1 from "../../assets/js/main";

function CustomerListPage() {
  useEffect(() => {
    // initMain1();
  }, []);
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>고객 조회</h2>
            <p>고객 추가를 할 수 있습니다.</p>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* ======= Counts Section ======= */}
        {/* <section id="customer" className="customer"> */}
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <CustomerList />
          </div>
        </div>
        {/* </section> */}
        {/* End Counts Section */}
      </main>
    </>
  );
}

export default CustomerListPage;
