function sum_avg(num1, num2, num3) {
  document.querySelector("#kor").innerHTML = num1;
  document.querySelector("#eng").innerHTML =num2;
  document.querySelector("#math").innerHTML = num3;
  let sum = num1 + num2 + num3; //합계
  let avg = sum/3; //평균
  document.querySelector("#sum").innerHTML = sum;
  document.querySelector("#avg").innerHTML =avg;

}
