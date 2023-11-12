// ThemaLoadService.ts : 공공 데이터 포털 API 함수

import axios from "axios"
import { url } from "inspector"
import IThemaLoad from "../../types/shop/IThemaLoad"

// 공공데이터 포털 : 부산 테마거리 음식점 기본 주소
let baseUrl = "https://api.odcloud.kr/api"

// 인증키 변수
let apiKey = "Kn6wh2%2F6NRM2R0j%2FdC%2Bt882mefUdk6X5srF4hXd%2B5GOLavX1DD7xOjxd5MCDyWagmF7IAjj4SEjSOYO9DPUZtg%3D%3D"

// 전체 조회
// page : 현재 페이지 번호
// PerPage : 1페이지당 개수
const getAll = (page:number, perPage:number) => { 
    // url 조합: 기본주소 + 추가주소 + 변수명(쿼리스트링)
    let url = `${baseUrl}/15096719/v1/uddi:97c65bfc-32e9-40d7-bc8e-b9b56ac3129c?page=${page}&perPage=${perPage}&serviceKey=${apiKey}`
    console.log(url);

    return axios.get<Array<IThemaLoad>>(url);
 }
const ThemaLoadService = { 
    getAll
 }

export default ThemaLoadService;