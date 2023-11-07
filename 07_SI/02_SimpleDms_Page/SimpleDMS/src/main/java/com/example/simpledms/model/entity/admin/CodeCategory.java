package com.example.simpledms.model.entity.admin;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * packageName : com.example.simpledms.model.entity.admin
 * fileName : CodeCategory
 * author : GGG
 * date : 2023-11-07
 * description : 공통코드 분류( 대분류 : 부모 )
 * 요약 :
 *      1) 시퀀스 사용 않함
 *      2) 삭제 없음 : 소프트/하드 삭제 기능 없음
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
@Table(name = "TB_CODE_CATEGORY")
public class CodeCategory {
    @Id
    private Integer categoryId; // 기본키
    private String categoryName;
}

