package com.example.mybatisexam.model.vo;

import com.example.mybatisexam.model.common.BaseTimeEntity;
import lombok.*;

/**
 * packageName : com.example.mybatisexam.model.vo
 * fileName : Emp
 * author : GGG
 * date : 2023-10-12
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Emp extends BaseTimeEntity {
//    ENO         NUMBER NOT NULL PRIMARY KEY,
//    ENAME       VARCHAR2(255),
//    JOB         VARCHAR2(255),
//    MANAGER     NUMBER,
//    HIREDATE    VARCHAR2(255),
//    SALARY      NUMBER,
//    COMMISSION  NUMBER,
//    DNO         NUMBER,

//    TODO : ctrl + shift + u (대/소문자 바꾸기)
    private Integer eno;
    private String ename;
    private String job;
    private Integer manager;
    private String hiredate;
    private Integer salary;
    private Integer commission;
    private Integer dno;

}
