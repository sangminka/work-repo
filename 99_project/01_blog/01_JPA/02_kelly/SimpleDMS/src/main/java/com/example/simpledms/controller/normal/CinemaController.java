package com.example.simpledms.controller.normal;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.normal.CinemaFaq;
import com.example.simpledms.model.entity.normal.Faq;
import com.example.simpledms.repository.normal.CinemaFaqRepository;
import com.example.simpledms.repository.normal.FaqRepository;
import com.example.simpledms.service.normal.CinemaFaqService;
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
 * fileName : CinemaController
 * author : GGG
 * date : 2023-10-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-25         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/normal")
public class CinemaController {

    @Autowired
    CinemaFaqService cinemaFaqService; // DI
    //  전체 조회 + dname like 검색
    @GetMapping("/cinema-faq")
    public ResponseEntity<Object> find(@RequestParam(defaultValue = "")
                                       String question,
                                       @RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "3") int size) {
        try {
//            페이지 변수 저장(page: 현재페이지번호, size: 1페이지당 개수)
//            함수 매개변수: Pageable(위의 값을 넣기)
//            사용법 : Pageable pageable = PageRequest.of(현재페이지번호,1페이지당 개수)
            Pageable pageable = PageRequest.of(page, size);

//          전체조회(dname="") + like 검색(dname="S")
            Page<CinemaFaq> cinemaFaqPage = cinemaFaqService.findAllByQuestionContaining(question, pageable);

//          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("cinemaFaq", cinemaFaqPage.getContent());
            response.put("currentPage", cinemaFaqPage.getNumber()); // 현재 페이지 번호
            response.put("totalItems", cinemaFaqPage.getTotalElements()); // 총건수 ( 개수 )
            response.put("totalPages", cinemaFaqPage.getTotalPages()); // 총페이지 수
            if (cinemaFaqPage.isEmpty() == false) {
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

    //   저장 함수
    @PostMapping("/cinema-faq")
    public ResponseEntity<Object> create(@RequestBody CinemaFaq cinemaFaq) {

        try {
            CinemaFaq cinemaFaq2 = cinemaFaqService.save(cinemaFaq);

            return new ResponseEntity<>(cinemaFaq2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //   수정 함수
    @PutMapping("/cinema-faq/{cfno}")
    public ResponseEntity<Object> update(@PathVariable int cfno, @RequestBody CinemaFaq cinemaFaq) {

        try {
            CinemaFaq cinemaFaq2 = cinemaFaqService.save(cinemaFaq);

            return new ResponseEntity<>(cinemaFaq2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회
    @GetMapping("/cinema-faq/{cfno}")
    public ResponseEntity<Object> findById(@PathVariable int cfno) {

        try {
            Optional<CinemaFaq> optionalCinemaFaq = cinemaFaqService.findById(cfno);

            if (optionalCinemaFaq.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalCinemaFaq.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제 함수
    @DeleteMapping("/cinema-faq/deletion/{cfno}")
    public ResponseEntity<Object> delete(@PathVariable int cfno) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = cinemaFaqService.removeById(cfno);

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
