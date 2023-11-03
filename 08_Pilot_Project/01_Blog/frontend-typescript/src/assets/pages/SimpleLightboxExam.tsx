import React, { useEffect } from 'react'
import initMain from '../js/initMain';
import img01 from "../../assets/img/gallery/full/01.jpg";
import img02 from "../../assets/img/gallery/full/02.jpg";
import img03 from "../../assets/img/gallery/full/03.jpg";
import img04 from "../../assets/img/gallery/full/04.jpg";
import img05 from "../../assets/img/gallery/full/05.jpg";
import img06 from "../../assets/img/gallery/full/06.jpg";

import imgt01 from "../../assets/img/gallery/thumb/01.jpg";
import imgt02 from "../../assets/img/gallery/thumb/02.jpg";
import imgt03 from "../../assets/img/gallery/thumb/03.jpg";
import imgt04 from "../../assets/img/gallery/thumb/04.jpg";
import imgt05 from "../../assets/img/gallery/thumb/05.jpg";
import imgt06 from "../../assets/img/gallery/thumb/06.jpg";

function SimpleLightboxExam() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <div>
    <h1 className="align-center">Simple Lightbox Demo Page</h1>
    {/* 사용법:
           => html :
               <div className="부모선택자명">z
                   <a href={이미지 경로n}>
                       <img src={이미지 경로n}
                   </a>
                   ...
                   <a href={이미지 경로n}>
                       <img src={이미지 경로n}
                   </a>
               </div> 
           => js :
               new SimpleLightbox*/}

    <div className="row gallery">
      <a href={img01} className="col-4 ">
        <img src={imgt01} />
      </a>
      <a href={img02} className="col-4 ">
        <img src={imgt02} />
      </a>
      <a href={img03} className="col-4 ">
        <img src={imgt03} />
      </a>
      <a href={img04} className="col-4 ">
        <img src={imgt04} />
      </a>
      <a href={img05} className="col-4 ">
        <img src={imgt05} />
      </a>
      <a href={img06} className="col-4 ">
        <img src={imgt06} />
      </a>
      <div className="clear"></div>
    </div>
  </div>
  )
}

export default SimpleLightboxExam