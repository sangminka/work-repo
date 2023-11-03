//scripts.js
import Typed from "typed.js";
/* eslint-disable */
export default function initScripts() {
  $(function () {
    // .typed-words(css 클래스) 있을대만 Typed 생성자 함수 실행
    if (document.querySelector(".typed-words")) {
      var slides = $(".slides"),
        images = slides.find("img");

      images.each(function (i) {
        $(this).attr("data-id", i + 1);
      });

      //타이브 lib (npm 설치)
      var typed = new Typed(".typed-words", {
        strings: [
          "San Francisco.",
          " Paris.",
          " New Zealand.",
          " Maui.",
          " London.",
        ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        preStringTyped: (arrayPos, self) => {
          arrayPos++;
          console.log(arrayPos);
          $(".slides img").removeClass("active");
          $('.slides img[data-id="' + arrayPos + '"]').addClass("active");
        },
      });
    }
  });
}
