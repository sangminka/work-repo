import http from "../util/http-common";

const getAll = () => {
  return http.get("/customer");
};

const findByCname = (Cname) => {
  return http.get(`/customer?cname=${Cname}`);
};

const create = (data) => {
  return http.post("/customer", data);
};
const get = (id) => {
  return http.get(`customer/${id}`);
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

const EmpService = {
  getAll,
  findByCname,
  create,
  get,
  remove,
  update
};

export default EmpService;
