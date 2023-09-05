// 리엑트 주소 : http://localhost:3000
// http://(프로토콜), localhost(인터넷 주소 예)naver.com ) : 개인pc 인터넷 주소
// 3000 : 포트번호 (0 ~ 90000)  , 80(이것만 생략)
// App.js 리엑트의 1st 페이지(사이트 home 페이지)
// => 리엑트 서버가 가동되고 처음으로 실행되는 페이지(js)
// 리엑트 페이지(js) : 컴포넌트(==페이지)
// 사용법 : 
// function 컴포넌트명() {
    // return{
    //    <div>내용</div>
    // }
// }

import logo from './logo.svg';
import './App.css';
// 자식 컴포넌트(페이지) import
import Home from './components/Home';import Header from './components/Header';
import Footer from './components/Footer';
import B_Home2 from './components/B_Home2';
import C_Exam from './components/C_Exam';
import D_ImportComp from './components/D_ImportComp';
// 최상위 부모 컴포넌트(App.js)
// 자식 컴포넌트 : Home(Home.js)
function App() {
  return (
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
      </div>
      {/* 머릿말 */}
      {/* <header></header> */}
      {/* 주석 : ctrl + / */}
      {/* Home.js 컴포넌트 태그 */}
      {/* <Home></Home> */}
      {/* <B_Home2></B_Home2> */}
      {/* 연습문제 */}
      {/* <C_Exam></C_Exam> */}
      {/* 꼬릿말 */}
      {/* <footer></footer> */}
      
      {/* <D_ImportComp></D_ImportComp> */}
    </div>
  );
}

export default App;
