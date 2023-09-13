import React from "react";

function Customer() {
  const initialCustomer = [
    {
      cid: 1, //부서번호
      dname: "홍길동", //부서명
      email: "hong@naver.com",
      phone: "010-1234-5678", //부서위치
    },
    {
      cid: 2, //부서번호
      dname: "장길산", //부서명
      email: "jang@naver.com",
      phone: "010-1234-5678", //부서위치
    },
    {
      cid: 1, //부서번호
      dname: "홍길동", //부서명
      email: "lim@naver.com",
      phone: "010-1234-5678", //부서위치
    },
  ];
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
            {/* 반복문 시작 */}
            {initialCustomer &&
              initialCustomer.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.dname}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            {/* 반복문 끝 */}
          </tbody>
      </table>
    </div>
  );
}

export default Customer;
