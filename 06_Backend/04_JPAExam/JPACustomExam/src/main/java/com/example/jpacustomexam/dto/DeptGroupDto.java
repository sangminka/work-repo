package com.example.jpacustomexam.dto;

import java.util.List;

/**
 * packageName : com.example.jpacustomexam.dto
 * fileName : DeptGroupDto
 * author : GGG
 * date : 2023-10-20
 * description : DTO 인터페이스 (부서 그룹함수용)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-20         GGG          최초 생성
 */
public interface DeptGroupDto {
//    속성 => 상수 x
//    getter 함수
//    sumVar , avgVar, maxVar , minVar
    Integer getSumVar();
    Integer getAvgVar();
    Integer getMaxVar();
    Integer getMinVar();


//    예제 5) upperDname(String), lowerDname(String),
//    trimOracle(String), charSysdate(String)
    String getUpperDname();
    String getLowerDname();
    String getTrimOracle();
    String getCharSysdate();

    //    예제 6) dno(Integer), incentive(String)
    Integer getDno();
    String getIncentive();

    //    연습 7. "SELECT COUNT(ENO) AS countEno, MAX(SALARY) AS sumSalary" +
//            "FROM TB_EMP
    Integer getCountEno();
    Integer getSumSalary();





}
