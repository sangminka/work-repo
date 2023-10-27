package com.example.modelexam.service.quiz;

import com.example.modelexam.dao.BoardDao;
import com.example.modelexam.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.service.quiz
 * fileName : BoardService
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
@Service
public class BoardService {

    @Autowired
    BoardDao boardDao; // 가짜 DB 접근

    /**
     * 전체 조회 함수 : selectAll()(DAO 객체 함수) 호출
     *
     */
    public List<Board> findAll()
    {
//       TODO: boardDao.selectAll() : db 조회 함수 호출
        List<Board> list = boardDao.selectAll();
        return list;
    }
    /**
     * id 기본키로 조회 : 상세 조회
     */

    public Optional<Board> findbyID(int id){
        Board board = boardDao.selectById(id);

        Optional<Board> optionalBoard = Optional.ofNullable(board);

        return optionalBoard;
    }

    public List<Board> save(Board board) {
        List<Board> list = null;


        if (board.getId() == null){
            int count = boardDao.selectAll().size();
            int newId = count + 1;
            board.setId(newId);
            list = boardDao.insert(board);
         }else {
            list = boardDao.update(board);
        }
        return list;
    }
    /**
     * 삭제 함수
     */
    public boolean removeById(int id){
        int iCount = boardDao.deleteById(id);

        return (iCount > 0) ? true : false;
    }
}
