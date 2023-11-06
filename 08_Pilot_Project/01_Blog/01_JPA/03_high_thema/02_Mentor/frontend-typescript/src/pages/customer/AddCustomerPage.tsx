// AddCustomerPage.tsx
import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import AddCustomer from "../../components/basic/customer/AddCustomer";
import aos from './../../../public/assets/vendor/aos/aos.esm';
import initMain1 from "../../assets/js/main";

function AddCustomerPage() {
  useEffect(() => {
    initMain1();
  }, []);
  return (
    <>
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>고객 추가</h2>
            <p>고객 추가를 할 수 있습니다.</p>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* ======= Counts Section ======= */}
        <section id="customer" className="customer">
          <div className="container" data-aos="fade-up">
              <div className="row mt-5">
                <AddCustomer />
              </div>
          </div>
        </section>
        {/* End Counts Section */}
    </>
  );
}

export default AddCustomerPage;
