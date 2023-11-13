package com.example.simpledms.controller.normal;

import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.service.normal.ThreadBoardService;
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
 * fileName : ThreadBoardController
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
public class ThreadBoardController {
    @Autowired
    ThreadBoardService threadBoardService;

    //  전체 조회(계층형, dto) : like 검색
//  전체 조회 + dname like 검색
    @GetMapping("/thread-board")
    public ResponseEntity<Object> selectByConnectByPage(
            @RequestParam(defaultValue = "") String subject,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            //          전체조회(dname="") + like 검색(dname="S")
            Page<ThreadBoardDto> threadBoardDtos = threadBoardService
                    .selectByConnectByPage(subject, pageable);

            //          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("threadBoard", threadBoardDtos.getContent()); // 배열
            response.put("currentPage", threadBoardDtos.getNumber()); // 현재 페이지 번호
            response.put("totalItems", threadBoardDtos.getTotalElements()); // 총건수 ( 개수 )
            response.put("totalPages", threadBoardDtos.getTotalPages()); // 총페이지 수
            if (threadBoardDtos.isEmpty() == false) {
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

    @PostMapping("/thread")
    public ResponseEntity<Object> create(@RequestBody ThreadBoard threadBoard) {

        try {
            ThreadBoard threadBoard2 = threadBoardService.save(threadBoard);

            return new ResponseEntity<>(threadBoard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/thread-board")
    public ResponseEntity<Object> createBoard(@RequestBody ThreadBoard threadBoard) {

        try {
            int threadBoard2 = threadBoardService.saveBoard(threadBoard);

            return new ResponseEntity<>(threadBoard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //   수정 함수
    @PutMapping("/thread-board/{tid}")
    public ResponseEntity<Object> update(@PathVariable int tid, @RequestBody ThreadBoard threadBoard) {

        try {
            ThreadBoard threadBoard1 = threadBoardService.save(threadBoard);

            return new ResponseEntity<>(threadBoard1, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회
    @GetMapping("/thread-board/{tid}")
    public ResponseEntity<Object> findById(@PathVariable int tid) {

        try {
            Optional<ThreadBoard> optionalThreadBoard = threadBoardService.findByID(tid);

            if (optionalThreadBoard.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalThreadBoard.get(), HttpStatus.OK);
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
    @DeleteMapping("/thread/deletion/{tid}")
    public ResponseEntity<Object> delete(@PathVariable int tid) {

        //        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = threadBoardService.removeId(tid);

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
    @DeleteMapping("/thread-board/deletion/{tgroup}")
    public ResponseEntity<Object> deleteBoard(@PathVariable int tgroup) {

        //        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = threadBoardService.removeAllByBoardGroup(tgroup);

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
