// TODO : 연습문제1
// h1 태그 1개만 선택해서 아래와 같이 변경 하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "from Java script"
// 힌트 : querySelector

// let h1_1 = document.querySelector("h1")
// h1_1.style.color = "orange"
// h1_1.style.background = "red"
// h1_1.innerHTML = "from java script"

// TODO : 연습문제2
// h1 태그 모두 선택해서 아래와 같이 변경 하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "from Java script"

let all_h1 = document.querySelectorAll("h1")

for(let i = 0; i < all_h1.length; i++){
    all_h1[i].style.color = "orange"
    all_h1[i].style.background = "red"
    all_h1[i].innerHTML = "from Java script"
}
