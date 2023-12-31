// CustomerService.js : axios 공통 함수가 정의된 파일
// axios 기본 주소 정의 파일 import : http-common
import http from "../util/http-common";

// 공통 모든 데이터 조회 함수:customer
// nfn
const getAll = () => {
  return http.get("/customer");
};


// 검색어 조회 함수 : /customer?cname= 검색어
// 인터넷 주소 :  http//url:포트번호/추가url?변수명 = 값
// 웹브라우저 주소창에서 다른 페이지 이동시 변수에 값을 저장해서 전달할 수 있음
// 예) 1번페이지 : /customer        2번페이지 : /customer-detail?변수=값
// nfn
const findByCname = (cname) => {
  return http.get(`/customer?cname=${cname}`);
};

// TODO 조회 : axios.get() 함수 사용
// 저장 요청 함수(대상: 화면에 입력된 객체)
// nfn
// TODO 저장요청: axios.post("url",객체)함수 사용
const create = (data) => {
  return http.post("/customer", data);
};

// TODO 상세조회 : axios.get(url/부서번호) 함수 사용
//nfn
const get = (id) => {
  return http.get(`/customer/${id}`);
};
// TODO 삭제요청 함수(1건) : axios.delete(`/customer/${id}`)
// nfn
const remove = (id) => {
  return http.delete(`/customer/${id}`);
};
// TODO 수정요청 함수 :axios.put("url/부서번호",수정될객체)
// nfn
const update = (id,data) => { 
   return http.put(`/customer/${id}`,data)
 }

const CustomerService = {
  getAll, // 모든 데이터 조회
  findByCname, // 검색어 조회
  create, // 저장요청
  get, //상세조회
  remove,//삭제 요청
  update
};

export default CustomerService; // 함수 내보내기