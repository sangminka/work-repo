package com.example.simpledms.model.entity.admin;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.example.simpledms.model.entity.admin
 * fileName : Code
 * author : GGG
 * date : 2023-11-07
 * description : 공통 코드 (소분류 : 자식)
 * 요약 :
 *      1) 시퀀스 안씀
 *      2) 삭제 기능 없음 : 소프트/하드 삭제 없음
 *      * 다른 테이블 공통컬럼(생성일자, 수정일자, 삭제일자) 있음
 *      하지만 공통코드분류/공통코드 테이블은 관리안함
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-07         GGG          최초 생성
 */
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@Entity
@Table(name = "TB_CODE")
public class Code{
    @Id
    private Integer codeId;
    private String codeName;
    private Integer categoryId;
    private String useYn;

}


