import React, { useEffect } from 'react'
import initMain from '../../assets/js/main';
import CinemaList from '../../components/shop/cinema/CinemaList';

function CinemaListPage() {
    useEffect(() => {
        initMain();
      }, []);
  return (
    <>
    <main id="main">
      <section id="add" className="add">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Cinema List</h2>
            {/* <p>게시글 조회를 할 수 있습니다.</p> */}
          </div>
          {/* ======= Counts Section ======= */}
          {/* <section id="customer" className="customer"> */}
          <div className="container" data-aos="fade-up">
            <div className="row mt-5">
              <CinemaList />
            </div>
          </div>
          {/* </section> */}
          {/* End Counts Section */}
        </div>
      </section>
    </main>
  </>
    )
}

export default CinemaListPage