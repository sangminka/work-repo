// A_Accommodate_Exam2.js : 자식(연습)
// rfce
// TODO : 연습문제 ) 아래 소스를 완성하세요
//   버튼을 클릭하면 isTable 변수의 값을 true 로 바꾸고,
//   아래 내용을 담고 있는 테이블 태그로
//   화면에 보이게 만드세요.
//   (부트스트랩 테이블 디자인을 활용하세요.)
//    테이블 내용 :
//               No   Dname       Loc
//               1    Sales       부산
//               2    Development 서울
import React from "react";
import { useState } from 'react';

function A_Accommodate_Exam2() {
    let [tableBool,setTableBool] = useState(false) 

    const clickBtn = () => { 
        tableBool ? setTableBool(false) : setTableBool(true)
     }
  return (
    <div>
      <button onClick ={clickBtn} className="btn btn-warning">
        테이블 보이기
      </button>
      <br />
      {
        tableBool &&
         <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Dname</th>
            <th scope="col">Loc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sales</td>
            <td>부산</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Development</td>
            <td>서울</td>
          </tr>
        </tbody>
      </table>
      }
     
    </div>
  );
}

export default A_Accommodate_Exam2;