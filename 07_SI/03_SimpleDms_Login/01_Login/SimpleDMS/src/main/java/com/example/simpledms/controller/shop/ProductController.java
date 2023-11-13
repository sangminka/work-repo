package com.example.simpledms.controller.shop;

import com.example.simpledms.model.entity.admin.CodeCategory;
import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.SimpleProduct;
import com.example.simpledms.service.shop.ProductService;
import com.example.simpledms.service.shop.SimpleProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.shop
 * fileName : ProductController
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
public class ProductController {
    @Autowired
    ProductService productService; // DI

    //  전체 조회 + dname like 검색
    @GetMapping("/product")
    public ResponseEntity<Object> find(@RequestParam(defaultValue = "") String pname,
                                       @RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "3") int size) {
        try {
//            페이지 변수 저장(page: 현재페이지번호, size: 1페이지당 개수)
//            함수 매개변수: Pageable(위의 값을 넣기)
//            사용법 : Pageable pageable = PageRequest.of(현재페이지번호,1페이지당 개수)
            Pageable pageable = PageRequest.of(page, size);

//          전체조회(dname="") + like 검색(dname="S")
            Page<Product> productPage = productService.findAllByPnameContains(pname, pageable);

//          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("product", productPage.getContent());
            response.put("currentPage", productPage.getNumber()); // 현재 페이지 번호
            response.put("totalItems", productPage.getTotalElements()); // 총건수 ( 개수 )
            response.put("totalPages", productPage.getTotalPages()); // 총페이지 수
            if (productPage.isEmpty() == false) {
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
    @PostMapping("/product")
    public ResponseEntity<Object> create(@RequestBody Product product) {

        try {
            Product product2 = productService.save(product);

            return new ResponseEntity<>(product2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 전체조회 : 페이징 x
     */
    @GetMapping("/product/all")
    public ResponseEntity<Object> findAllByNoPage() {
        try {

            List<Product> list = productService.findAll();

//          리엑트 전송 : 부서배열, 페이징 정보[자료구조 : Map<키이름, 값>
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //   수정 함수
    @PutMapping("/product/{pno}")
    public ResponseEntity<Object> update(@PathVariable int pno, @RequestBody Product product) {

        try {
            Product product2 = productService.save(product);

            return new ResponseEntity<>(product2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회
    @GetMapping("/product/{pno}")
    public ResponseEntity<Object> findById(@PathVariable int pno) {

        try {
            Optional<Product> optionalProduct = productService.findById(pno);

            if (optionalProduct.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalProduct.get(), HttpStatus.OK);
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
