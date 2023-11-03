package com.example.simpledms.model.entity.normal;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.normal
 * fileName : ReplyBoard
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Entity
@Table(name="TB_REPLY_BOARD")
@SequenceGenerator(
        name = "SQ_REPLY_BOARD_GENERATOR"
        , sequenceName = "SQ_REPLY_BOARD"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_REPLY_BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE BID = ?")
public class ReplyBoard extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
                    ,generator = "SQ_REPLY_BOARD_GENERATOR")
    private Integer bid;

    private String boardTitle;

    private String boardContent;

    private String boardWriter;

    private Integer viewCnt;

    private Integer boardGroup; // 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )

    private Integer boardParent;// 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )


}

//    CREATE TABLE TB_REPLY_BOARD
//        (
//                BID           NUMBER NOT NULL
//                CONSTRAINT PK_REPLY_BOARD PRIMARY KEY, -- 게시판번호
//                        BOARD_TITLE   VARCHAR2(256),               -- 제목
//        BOARD_CONTENT VARCHAR2(255),               -- 내용
//        BOARD_WRITER  VARCHAR2(255),               -- 작성자
//        VIEW_CNT      NUMBER DEFAULT 0,            -- 조회수
//        BOARD_GROUP   NUMBER,                      -- 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )
//        BOARD_PARENT  NUMBER,                      -- 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )
//        DELETE_YN     VARCHAR2(1) DEFAULT 'N',
//        INSERT_TIME   VARCHAR2(255),
//        UPDATE_TIME   VARCHAR2(255),
//        DELETE_TIME   VARCHAR2(255)
//        );