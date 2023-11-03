package com.example.simpledms.repository.normal;

import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

/**
 * packageName : com.example.simpledms.repository.normal
 * fileName : ThreadBoardRepository
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
public interface ThreadBoardRepository extends JpaRepository<ThreadBoard, Integer> {
    //    계층형 조회(특수) 쿼리 : @Query(, nativeQuery=true)
    @Query(value = "SELECT TID AS tid " +
            "    ,  LPAD('⤵', (LEVEL-1)) || subject AS subject " +
            "    ,  main_text AS mainText  " +
            "    ,  writer AS writer  " +
            "    ,  views AS views  " +
            "    ,  tgroup AS tgroup " +
            "    ,  tparent  AS tparent " +
            "FROM TB_THREAD_BOARD " +
            "WHERE SUBJECT LIKE '%' || :subject || '%' " +
            "AND   DELETE_YN = 'N' " +
            "START WITH TPARENT = 0 " +
            "CONNECT BY PRIOR TID = TPARENT " +
            "ORDER SIBLINGS BY TGROUP DESC", nativeQuery = true)
    Page<ThreadBoardDto> selectByConnectByPage(
            @Param("subject") String boardTitle,
            Pageable pageable);

    //    게시물 저장 함수(답변글) : 최초 생성(board_group(그룹 번호), board_parent(부모번호))
//    => board_group(부모 번호 == 자식번호(bid)), board_parent(0(최초생성), 부모번호)
//  TODO: JPA Insert 문 직접 작성(dml: 테이블 데이터 변경, 트랜잭션을 동반 )
//    ==> @Transactional(트랜잭션을 동반), @Modifying(테이블 데이터 변경)
//    ==> 예 변수 전달 : :#{#threadBoard.subject}
    @Transactional  //
    @Modifying      // INSERT
    @Query(value = "INSERT INTO TB_THREAD_BOARD " +
            "VALUES(sq_thread_board.nextval, :#{#threadBoard.subject}" +
            ",:#{#threadBoard.mainText}" +
            ",:#{#threadBoard.writer}" +
            ",0" +
            ",sq_thread_board.CURRVAL" +
            ", 0" +
            ",'N'" +
            ",TO_CHAR(SYSDATE, 'YYYY_MM_DD HH24:MI:SS')" +
            ", NULL" +
            ", NULL)", nativeQuery = true)
    int insertByBoard(@Param("threadBoard") ThreadBoard threadBoard);

    @Transactional
    @Modifying
    @Query(value = "UPDATE TB_THREAD_BOARD " +
            "SET DELETE_YN = 'Y' " +
            "  , DELETE_TIME = TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') " +
            "WHERE TGROUP = :tgroup", nativeQuery = true)
    int removeAllByBoardGroup(@Param("tgroup") int tgroup);
}

