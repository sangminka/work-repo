import React from "react";
import "./Main.css";
function Main() {
  return (
    <div className="Main">
      {/* 메인 시작 */}
      <div className="main">
        {/* 이름 */}
        <div className="mainTitle">
          <h1>자유 게시판</h1>
        </div>
        {/* 이름 끝 */}
        {/* 글목록 시작 */}
        <div className="mainForm">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">제목</th>
                <th scope="col">글쓴이</th>
                <th scope="col">작성시간</th>
                <th scope="col">좋아요</th>
              </tr>
            </thead>
          </table>
        </div>
        {/* 글목록 끝 */}
      </div>
      {/* 메인 끝 */}

      {/* 글쓰기 버튼 시작 */}
      <div className="main_writeDiv">
        <button className="main_writeButton">글쓰기</button>
      </div>
      {/* 글쓰기 버튼 끝 */}
    </div>
  );
}

export default Main;
