// IAuth.ts : 인터페이스

import IUser from "./IUser";

// 유저 상태 정보 : 로그인 여부
export default interface IAuth {
    isLoggedIn : boolean, //로그인 상태(true/false)
    user?: IUser|null 
}