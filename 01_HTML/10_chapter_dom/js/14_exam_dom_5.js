
let input = prompt("y를 넣으면 글쓰기")

if(input === "y"){
    document.querySelector("#app").innerHTML = "<button>글쓰기</button>"

}else{
    document.querySelector("#app").innerHTML = "<button>글수정</button>"
}