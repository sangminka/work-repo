// ICodeCategory.ts(대분류 : 공통코드 분류) : 인터페이스
// 예 대분류(3자리) 소분류(2자리) 총 5자리로 사용
export default interface ICodeCategory {
    categoryId: number,
    categoryName: string
}


//     CATEGORY_ID   NUMBER NOT NULL
//     CATEGORY_NAME VARCHAR2(255)
