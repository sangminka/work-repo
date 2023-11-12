// axios 공통함수 : 백엔드 연동

import ISimpleProduct from "../../types/shop/ISimpleProduct";
import http from "../../utils/http-common";



// 전체 조회 + Like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (title:string, page:number, size:number) => {
  return http.get<Array<ISimpleProduct>>(`/shop/simple-product?title=${title}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (spno:any) => {
  return http.get<ISimpleProduct>(`/shop/simple-product/${spno}`);
};


// 저장 함수
const create = (data:ISimpleProduct) => {
  return http.post<ISimpleProduct>("/shop/simple-product", data);
};

// 수정 함수
const update = (spno:any, data:ISimpleProduct) => {
  return http.put<any>(`/shop/simple-product/${spno}`, data);
};



const SimpleProductService = {
  getAll,
  get,
  create,
  update,
};

export default SimpleProductService;