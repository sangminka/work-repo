// AddCustomerPage.tsx
import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import AddCustomer from "../../components/basic/customer/AddCustomer";
import aos from "./../../../public/assets/vendor/aos/aos.esm";
// import initMain1 from "../../assets/js/main";

function AddCustomerPage() {
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
              <p>
                게시글 추가를 할 수 있습니다.
              </p>
            </div>

            
            {/* ======= Counts Section ======= */}
            <section id="customer" className="customer">
              <div className="container" data-aos="fade-up">
                <div className="row mt-5">
                  {/* <AddCustomer /> */}
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

export default AddCustomerPage;
