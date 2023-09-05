let i = 0;
  
  function chagePic() {
    if( i == 0){
        document.querySelector("#cup").src = "./img/cup-2.png";
        i = 1;
    }else{
        document.querySelector("#cup").src = "./img/cup-1.png";
        i = 0;
    }    
}