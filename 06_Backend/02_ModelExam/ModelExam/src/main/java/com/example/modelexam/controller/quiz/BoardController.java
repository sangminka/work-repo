package com.example.modelexam.controller.quiz;

import com.example.modelexam.model.Board;
import com.example.modelexam.model.Dept;
import com.example.modelexam.service.quiz.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.quiz
 * fileName : BoardController
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
@Slf4j
@RestController
@RequestMapping("/quiz")
public class BoardController {
//     todo: 종합문제 1) 부서 업무 클래스들을 참고하
//      BoardController 클래스를 만들어서 CRUD 에 해당하는 컨틀롤러 함수를 정의하세요
//      단, @RestController 를 사용하고,
//          예외처리와 ResponseEntity 를 사용해 데이터와 메세지를 같이 전송하세요
//      url : board 이용 (기본키 : id)
//      객체 : Board (model 폴더)
//      DB함수 : BoardDao (dao 폴더)

//    TODO: MVC 의 Model(Service 클래스)가져오기
    @Autowired
    BoardService boardService;

    /**
     * 전체 조회 함수
     * @param
     * @return
     */
    @GetMapping("/board")
    public ResponseEntity<Object> getBoardAll(){
        try{
            List<Board> list = boardService.findAll();
            if (list.isEmpty() == false){
//                TODO: 조회 성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            }else {
//                TODO: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT );
            }
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /**
     * 상세조회(1건 조회)
     */

    @GetMapping("/board/{id}")
    public ResponseEntity<Object> getBoardId(
            @PathVariable int id
    ){
        try{
            Optional<Board> optionalDept = boardService.findbyID(id);
            if (optionalDept.isEmpty() == false){
//                TODO: 조회 성공
                return new ResponseEntity<>(optionalDept.get(),HttpStatus.OK);
            }else {
//                TODO: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT );
            }
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /**
     * 저장 함수
     */
    @PostMapping("/board")
    public ResponseEntity<Object> createBoard(
            @RequestBody Board board){
        try{
            List<Board> list = boardService.save(board);
            return new ResponseEntity<>(list,HttpStatus.CREATED);
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500) : sql 구문 에러 등
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 수정 함수
     */
    @PutMapping("/board/edit/{id}")
    public ResponseEntity<Object> updateBoard(
            @PathVariable int id,
            @RequestBody Board board
    ){
        try {
            List<Board> list = boardService.save(board);
            return new ResponseEntity<>(list,HttpStatus.CREATED);

        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 삭제 함수
     */
    @DeleteMapping("/board/delete/{id}")
    public ResponseEntity<Object> deleteBoard(
            @PathVariable int id
    ){
        try{
            boolean bSuccess = boardService.removeById(id);
            if (bSuccess == true){
//                TODO: 조회 성공
                return new ResponseEntity<>(bSuccess,HttpStatus.OK);
            }else {
//                TODO: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT );
            }
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
