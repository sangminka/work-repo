// CodeService.ts

import ICode from "../../../types/admin/code/ICode";
import http from "../../../utils/http-common";

// axios 공통함수 : 백엔드 연동


// 전체 조회 + Like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (codeName :string, page:number, size:number) => {
  return http.get<Array<ICode>>(`/admin/code?codeName =${codeName }&page=${page}&size=${size}`);
};

// 전체 조회 : 페이징 처리 안됨
const getAllNoPage = () => { 
    return http.get<Array<ICode>>("/admin/code/all");
 }


// 상세 조회
const get = (codeId:any) => {
  return http.get<ICode>(`/admin/code/${codeId}`);
};

// 저장 함수
const create = (data:ICode) => {
  return http.post<ICode>("/admin/code", data);
};

// 수정 함수
const update = (codeId:any, data:ICode) => {
  return http.put<any>(`/admin/code/${codeId}`, data);
};

const CodeService = {
  getAll,
  getAllNoPage,
  get,
  create,
  update,
};

export default CodeService;
