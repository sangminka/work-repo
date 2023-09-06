//IWebtoon.ts : 새로운 객체 자료형(웹툰)

export default interface IWebtoon{
    id?:number,
    name:string,
    link:string,
    img:string,
    isUpdate:boolean
}
