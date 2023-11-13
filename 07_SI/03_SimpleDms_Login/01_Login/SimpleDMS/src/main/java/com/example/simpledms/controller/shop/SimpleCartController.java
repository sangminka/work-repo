package com.example.simpledms.controller.shop;

import com.example.simpledms.model.dto.shop.SimpleCartDto;
import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.shop.SimpleCart;
import com.example.simpledms.service.shop.SimpleCartService;
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
 * packageName : com.example.simpledms.controller.shop
 * fileName : SimpleCartController
 * author : GGG
 * date : 2023-11-09
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-09         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/shop")
public class SimpleCartController {
    @Autowired
    SimpleCartService simpleCartService; //DI


    //  전체 조회 + title like 검색
    @GetMapping("/simple-cart")
    public ResponseEntity<Object> find(@RequestParam(defaultValue = "") String title,
                                       @RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "3") int size) {
        try {
//            페이지 변수 저장(page: 현재페이지번호, size: 1페이지당 개수)
//            함수 매개변수: Pageable(위의 값을 넣기)
//            사용법 : Pageable pageable = PageRequest.of(현재페이지번호,1페이지당 개수)
            Pageable pageable = PageRequest.of(page, size);

//          전체조회(dname="") + like 검색(dname="S")
            Page<SimpleCartDto> simpleCartDtoPage = simpleCartService.selectByTitleContaining(title, pageable);

//          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("simpleCart", simpleCartDtoPage.getContent());
            response.put("currentPage", simpleCartDtoPage.getNumber()); // 현재 페이지 번호
            response.put("totalItems", simpleCartDtoPage.getTotalElements()); // 총건수 ( 개수 )
            response.put("totalPages", simpleCartDtoPage.getTotalPages()); // 총페이지 수
            if (simpleCartDtoPage.isEmpty() == false) {
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
    @PostMapping("/simple-cart")
    public ResponseEntity<Object> create(@RequestBody SimpleCart simpleCart) {

        try {
            SimpleCart simpleCart2 = simpleCartService.save(simpleCart);

            return new ResponseEntity<>(simpleCart2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회
    @GetMapping("/simple-cart/{scno}")
    public ResponseEntity<Object> selectById(@PathVariable int scno) {

        try {
            Optional<SimpleCartDto> optionalSimpleCartDto = simpleCartService.selectById(scno);

            if (optionalSimpleCartDto.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalSimpleCartDto.get(), HttpStatus.OK);
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
    @DeleteMapping("/simple-cart/deletion/{spno}")
    public ResponseEntity<Object> delete(@PathVariable int spno) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = simpleCartService.removeById(spno);

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
