//initMain.ts
// typed.jsi import
import Typed from "typed.js";
import { WOW } from "wowjs";
// TODO simplelightbox import
import SimpleLightbox from "simplelightbox";

// eslint-disable
export default function initMain() {
  // todo: 1) countup lib 사용
  // todo: 사용법 : $(선택자).counterUp({옵션 설정})
  // todo: jquery 타입 무시 ($(선택자) as any)
  ($('[data-toggle="counter-up"]') as any).counterUp({
    delay: 10,
    time: 2000,
  });

  // todo: 1-1) 연습 counterup lib
  ($(".counter") as any).counterUp({
    delay: 10,
    time: 2000,
  });

  // todo: 2) typed.js lib
  // 사용법: new Typed(선택자, {옵션})
  let typed = document.querySelector("#typed1");

  // typed1 있으면 타이핑 객체 생성
  if (typed != null) {
    new Typed("#typed1", {
      // 타이핑 대상 글자
      strings: ["원하는 글씨를", "순서대로", "출력해 줍니다."],
      typeSpeed: 100, // 타이핑 되는 속도
      backSpeed: 100, // 지워지는 속도
      cursorChar: "_",
      loop: true, // 글자 순환
    });
  }

  // todo: 2-1) typed.js lib
  let typed2 = document.querySelector("#typed2");

  // typed1 있으면 타이핑 객체 생성
  if (typed2 != null) {
    new Typed("#typed2", {
      // 타이핑 대상 글자
      strings: ["안녕하세요", "또 만납시다.", "잘가세요."],
      typeSpeed: 0, // 타이핑 되는 속도
      backSpeed: 0, // 지워지는 속도
      cursorChar: "_",
      loop: true, // 글자 순환
    });
  }

  // todo: 3) wowjs
  // 사용법 : new WOW().init()
  new WOW().init();

  // todo: 4) SimpleLisghtbox
  new SimpleLightbox(".portfolio a");
  // todo: 4-1) 연습:SimpleLightbox
  new SimpleLightbox(".gallery a");

  // todo: 5) owl-carousel
  // 사용법: $(선택자).owlCarousel({옵션});
  $(".carousel-div").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    items: 1,
    loop: true,
  });

  $(".carousel-div-exam").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    items: 1,
    loop: true,
  });

  // rounded-circle

  // todo: 6) isotope + imageLoaded(버그 해결)
  // 버그 : 이미지가 겹치는 버그
  // 소제목 부분 :
  // 필터 부분 : portfolio-container
  // 사용법 : ($("필터 선택자") as any).imagesLoaded(function() {
  //            isotope 코딩
  //            let 변수명 = $(필터선택자).isotope({
  //                itemSelector : "필터선택자의 자식선택자(div여러개)",(**)
  //                layoutMode: "화면모드"
  //             })
  //             isotope 소재목 설정 코딩
  //          }

  $(".portfolio-container").imagesLoaded(function () {
    // 필터 선택자 : portfolio-container 태그를 선택해서 isotope 객체 생성
    let portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
    // 소재목 선택자 : #portfolio-filter li
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("active"); // active 클래스 제거
      $(this).addClass("active");   // 현재 클릭한 소제목에 active 클래스 추가

      // data-filter=값 , 값 : *(필터명), .first(필터명), .second(필터명)
      // 현재 클릭한 필터의 값을 선택해서 isotope 를 적용함
      // isotope 객체 생성 : $(필터 선택자).isotope({})
      //    filter: 필터명
      // });

      // $(this).data("filter") => data-filter="값"을 가져오는 함수
      portfolioIsotope.isotope({ filter: $(this).data("var") });
    });
  });

  //todo : 6-1) isotope exam
  $(".exam-container").imagesLoaded(function () {
    // 필터 선택자 : portfolio-container 태그를 선택해서 isotope 객체 생성
    let portfolioIsotope = $(".exam-container").isotope({
      itemSelector: ".exam-item",
      layoutMode: "fitRows",
    });
    // 소재목 선택자 : #portfolio-filter li
    $("#exam-flters li").on("click", function () {
      $("#exam-flters li").removeClass("active"); // active 클래스 제거
      $(this).addClass("active");   // 현재 클릭한 소제목에 active 클래스 추가

      // data-filter=값 , 값 : *(필터명), .first(필터명), .second(필터명)
      // 현재 클릭한 필터의 값을 선택해서 isotope 를 적용함
      // isotope 객체 생성 : $(필터 선택자).isotope({})
      //    filter: 필터명
      // });

      // $(this).data("filter") => data-filter="값"을 가져오는 함수
      portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });
  });

  // todo: 7) easing
  $(function () {
    $("#boxing").click(function () {
      $("#boxing")
      // .animate({css속성:값}, 지속시간, easing_효과)
      // easeOutElastic 함수 : easing.js 에 라이브러리 함수가 정의되어 있음
        .animate({ marginLeft: "50px" }, 1000, "easeOutElastic")
        .animate({ marginTop: "50px" }, 1000, "easeOutBounce")
        .animate({ marginLeft: "-150px" }, 1000, "easeOutQuad")
        .animate({ marginTop: "-150px" }, 1000, "easeInOutBack")
        .animate(
          { height: "100px", marginTop: "0px", width: "50px" },
          1000,
          "easeOutElastic"
        )
        .animate(
          { height: "50px", marginTop: "25px", width: "50px" },
          1000,
          "easeOutBounce"
        )
        .animate(
          { height: "50px", marginTop: "25px", width: "100px" },
          1000,
          "easeOutQuad"
        )
        .animate(
          { height: "100px", marginTop: "0px", width: "100px" },
          1000,
          "easeInOutBack"
        );
    });
  });
}
