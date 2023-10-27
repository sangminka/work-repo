package com.example.jpacustomexam.dto;

/**
 * packageName : com.example.jpacustomexam.dto
 * fileName : EmpGroupDto
 * author : GGG
 * date : 2023-10-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-20         GGG          최초 생성
 */
public interface EmpGroupDto {
//    속성 => 상수 x
//    연습 5) getter 함수 : dno(Integer) ,job(String), salary(Integer)
//    sumVar , avgVar, maxVar , minVar

    Integer getDno();
    String getJob();
    Integer getSalary();

//    연습 6, DNO, avgSalary(Integer)
    Integer getAvgSalary();

//    연습 7. "SELECT COUNT(ENO) AS countEno, MAX(SALARY) AS sumSalary" +
//            "FROM TB_EMP
    Integer getCountEno();
    Integer getSumSalary();

//  연습 8 maxHiredate(String), minHiredate(String)
    String getMaxHiredate();
    String getMinHiredate();

}
