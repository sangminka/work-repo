//CustomerPage.tsx

import React, { useEffect } from 'react'
import CustomerList from '../../components/basic/customer/CustomerList'
import Customer from '../../components/basic/customer/Customer'
import initMain1 from '../../assets/js/main';

function CustomerPage() {
  useEffect(() => {
    initMain1();
  }, []);
  return (
    <>
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>고객 상세조회</h2>
            <p>고객 상세조회를 할 수 있습니다.</p>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* ======= Counts Section ======= */}
        <section id="customer" className="customer">
          <div className="container" data-aos="fade-up">
              <div className="row mt-5">
                <Customer />
              </div>
          </div>
        </section>
        {/* End Counts Section */}
    </>
  )
}

export default CustomerPage