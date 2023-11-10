// pno         number not null
//         constraint pk product primary key,상품번호
//     kindCode   number,      상품종류코드
//     pname       varchar2(255),상품명
//     image       varchar2(255),이미지경로
//     unit price  number,      단가
//     status code number default20001,상품상태코드(20001(신상),20002(이월상품),20003(전시품))
//     useYn    varchar2(1) default 'y'    -- 사용여부
export default interface IProduct {
    pno?: any | null,
    kindCode: number,
    pname: string,
    image: string,
    unitPrice: number,
    statusCode: number,
    useYn: string,
}