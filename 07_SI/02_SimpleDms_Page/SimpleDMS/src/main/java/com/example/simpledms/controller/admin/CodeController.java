package com.example.simpledms.controller.admin;

import com.example.simpledms.model.dto.admin.CodeDto;
import com.example.simpledms.model.entity.admin.Code;
import com.example.simpledms.model.entity.admin.CodeCategory;
import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.service.admin.CodeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.admin
 * fileName : CodeController
 * author : GGG
 * date : 2023-11-07
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-07         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/admin")
public class CodeController {

    @Autowired
    CodeService codeService;

    /**
     * like 검색 : 페이징
     */
    @GetMapping("/code")
    public ResponseEntity<Object> findAllByCategoryNameContaining(
            @RequestParam(defaultValue = "") String codeName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {
        try {

            Pageable pageable = PageRequest.of(page, size);

            Page<CodeDto> codeDtoPage = codeService.selectByCodeNameContaining(codeName, pageable);

//          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("code", codeDtoPage.getContent());     // 대분류 코드 배열
            response.put("currentPage", codeDtoPage.getNumber());       // 현재 페이지 번호
            response.put("totalItems", codeDtoPage.getTotalElements()); // 총건수 ( 개수 )
            response.put("totalPages", codeDtoPage.getTotalPages());    // 총페이지 수
            if (codeDtoPage.isEmpty() == false) {
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
    @PostMapping("/code")
    public ResponseEntity<Object> create(@RequestBody Code code) {

        try {
            Code code2 = codeService.save(code);

            return new ResponseEntity<>(code2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //   수정 함수
    @PutMapping("/code/{codeId}")
    public ResponseEntity<Object> update(@PathVariable int codeId, @RequestBody Code code) {

        try {
            Code code2 = codeService.save(code);

            return new ResponseEntity<>(code2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회
    @GetMapping("/code/{codeId}")
    public ResponseEntity<Object> findById(@PathVariable int codeId) {

        try {
            Optional<Code> optionalDept = codeService.findById(codeId);

            if (optionalDept.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalDept.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
