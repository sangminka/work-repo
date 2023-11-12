// SPNO       NUMBER NOT NULL
// CONSTRAINT PK_SIMPLE_PRODUCT PRIMARY KEY, -- 상품번호
// CODE_ID    NUMBER,                            -- 상품종류코드
// TITLE      VARCHAR2(255),                     -- 상품명
// IMG_PATH   VARCHAR2(255),                     -- 이미지 경로
// UNIT_PRICE NUMBER,                            -- 단가
// USE_YN     VARCHAR2(1) DEFAULT 'Y'            -- 사용여부

export default interface ISimpleProduct {
    spno?: any | null,
    codeId: number,
    title: string,
    imgPath: string,
    unitPrice: number,
    useYn: string
}