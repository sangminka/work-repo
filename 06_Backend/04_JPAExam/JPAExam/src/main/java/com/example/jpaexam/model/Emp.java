package com.example.jpaexam.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.example.jpaexam.model
 * fileName : Emp
 * author : GGG
 * date : 2023-10-16
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
@Entity
// TODO: @Table(name = "생성될테이블명")
@Table(name = "TB_EMP")
// TODO: 사용법 : @SequenceGenerator(
//        name = "시퀀스 함수이름"
//        , sequenceName = "DB에 생성될시퀀스이름"
//        , initialValue = 시작값
//        , allocationSize = jpa에서 관리용 숫자(성능지표)
//  )
@SequenceGenerator(
        name = "SQ_EMP_GENERATOR"
        , sequenceName = "SQ_EMP"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
//TODO: jpa 어노테이션 sql문 자동 생성시 null 값 컬럼은 제외하고 생성
// 예) insert into 테이블명(컬럼1,컬럼2,컬럼3) values(1,2,null);
// => insert into 테이블명(컬럼1,컬럼2) values(1,2);
@DynamicInsert
@DynamicUpdate
public class Emp extends BaseTimeEntity {
    @Id
    @Column(columnDefinition = "NUMBER")
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            ,generator = "SQ_EMP_GENERATOR")
    private Integer eno;
    @Column(columnDefinition = "VARCHAR2(255)")
    private String ename;
    @Column(columnDefinition = "VARCHAR2(255)")
    private String job;
    @Column(columnDefinition = "NUMBER")
    private Integer manager;
    @Column(columnDefinition = "VARCHAR2(255)")
    private String hiredate;
    @Column(columnDefinition = "NUMBER")
    private Integer salary;
    @Column(columnDefinition = "NUMBER")
    private Integer commission;
    @Column(columnDefinition = "NUMBER")
    private Integer dno;






}
