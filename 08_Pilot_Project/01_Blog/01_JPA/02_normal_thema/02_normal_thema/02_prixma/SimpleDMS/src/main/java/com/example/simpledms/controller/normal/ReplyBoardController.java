package com.example.simpledms.controller.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import com.example.simpledms.service.normal.ReplyBoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.normal
 * fileName : ReplyBoardController
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
@Slf4j
@RestController
@RequestMapping("/api/normal")
public class ReplyBoardController {
    @Autowired
    ReplyBoardService replyBoardService;

    //  전체 조회(계층형, dto) : like 검색
//  전체 조회 + dname like 검색
    @GetMapping("/reply-board")
    public ResponseEntity<Object> selectByConnectByPage(@RequestParam(defaultValue = "") String boardTitle, @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            //          전체조회(dname="") + like 검색(dname="S")
            Page<ReplyBoardDto> replyBoardDtos = replyBoardService.selectByConnectByPage(boardTitle, pageable);

            //          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("replyBoard", replyBoardDtos.getContent()); // 배열
            response.put("currentPage", replyBoardDtos.getNumber()); // 현재 페이지 번호
            response.put("totalItems", replyBoardDtos.getTotalElements()); // 총건수 ( 개수 )
            response.put("totalPages", replyBoardDtos.getTotalPages()); // 총페이지 수
            if (replyBoardDtos.isEmpty() == false) {
                //                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                //                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //  답변글 저장 함수
    @PostMapping("/reply")
    public ResponseEntity<Object> create(@RequestBody ReplyBoard replyBoard) {

        try {
            ReplyBoard replyBoard2 = replyBoardService.save(replyBoard);

            return new ResponseEntity<>(replyBoard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //  게시물 저장 함수
    @PostMapping("/reply-board")
    public ResponseEntity<Object> createBoard(@RequestBody ReplyBoard replyBoard) {

        try {
            int insertCount = replyBoardService.saveBoard(replyBoard);

            return new ResponseEntity<>(insertCount, HttpStatus.OK);
        } catch (Exception e) {
    //            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //   수정 함수
    @PutMapping("/reply-board/{bid}")
    public ResponseEntity<Object> update(@PathVariable int bid, @RequestBody ReplyBoard replyBoard) {

        try {
            ReplyBoard replyBoard1 = replyBoardService.save(replyBoard);

            return new ResponseEntity<>(replyBoard1, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회
    @GetMapping("/reply-board/{bid}")
    public ResponseEntity<Object> findById(@PathVariable int bid) {

        try {
            Optional<ReplyBoard> optionalReplyBoard = replyBoardService.findByID(bid);

            if (optionalReplyBoard.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalReplyBoard.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 답변만 삭제 함수
    @DeleteMapping("/reply/deletion/{bid}")
    public ResponseEntity<Object> delete(@PathVariable int bid) {

    //        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = replyBoardService.removeId(bid);

            if (bSuccess == true) {
    //                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
    //            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
    //            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    게시물 답변 2개이상 모두 삭제
    @DeleteMapping("/reply-board/deletion/{boardGroup}")
    public ResponseEntity<Object> deleteBoard(@PathVariable int boardGroup) {

        //        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = replyBoardService.removeAllByBoardGroup(boardGroup);

            if (bSuccess == true) {
                //                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
            //            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            //            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
