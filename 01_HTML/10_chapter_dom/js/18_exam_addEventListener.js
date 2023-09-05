let image = document.querySelector("#cover");

image.addEventListener("mouseover",function(){
    image.src = "./img/boy.jpg"
})
image.addEventListener("mouseout",function(){
    image.src = "./img/girl.jpg"
})