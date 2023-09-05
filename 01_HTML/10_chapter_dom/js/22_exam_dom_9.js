function get_pay(book, dis, dele) {
  document.querySelector("#price").innerHTML = book + "원";
  document.querySelector("#discount").innerHTML = dis + "%";
  document.querySelector("#shipping").innerHTML = dele + "원";
  let re_pay = book - book * (dis / 100) + dele;
  document.querySelector("#pay").innerHTML = re_pay + "원";
}

// 2시간 :포트폴리오 평가 ( 홈페이지 만들기 : 소스파일 결과 캡쳐해서 전송)
// 문제 풀이 시나리오 평가: 자바스크립트 기본문제 5개 (1시간)
// ppt 양식 : 문제해결 시나리오 풀이
// 문제 1) 함수 get_pay 함수를 정의한다
//      2)공식 pay(지불금액) = pay(지불금액) = price - (price(책값) * (discount(할인율)/100)) + shipping(배송료) -->
//      적용해서 넣는다
//      3)각각의 값을(pay,price.discount,shipping) 화면에 div를 출력한다.
