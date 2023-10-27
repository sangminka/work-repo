package com.example.mybatisexam.controller.exam02;

import com.example.mybatisexam.model.common.PageReq;
import com.example.mybatisexam.model.common.PageRes;

import com.example.mybatisexam.model.vo.Emp;
import com.example.mybatisexam.service.exam01.EmpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.mybatisexam.controller.exam02
 * fileName : Emp02Controller
 * author : GGG
 * date : 2023-10-16
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/exam02")
public class Emp02Controller {

    @Autowired
    EmpService empService;

    @GetMapping("/emp")
    public ResponseEntity<Object> getEmpAll(
            @RequestParam(defaultValue = "") String ename
            , @RequestParam(defaultValue = "0") int page
            , @RequestParam(defaultValue = "3") int size
    ){
        try{
            PageReq pageReq = new PageReq(page, size);

//      todo: 전체 조회 함수 호출
            PageRes<Emp> pageRes
                    = empService.findByEnameContaining(ename, pageReq);

//      todo: jsp 정보전달( 부서배열, 페이징정보 )
//        자료구조 : 키,값 : Map 자료구조
            Map<String,Object> response = new HashMap<>();
            response.put("emp", pageRes.getContent()); // 부서배열
            response.put("currentPage", pageRes.getNumber()); // 현재 페이지 번호
            response.put("totalItems", pageRes.getTotalElements()); // 전체 테이블 건수
            response.put("totalPages", pageRes.getTotalPages()); // 전체 페이지 개수

            if (pageRes.isEmpty() == false){
//                TODO: 조회 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            }else {
//                TODO: 0건 조회 (실패)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/{eno}")
    public ResponseEntity<Object> getEmpId(@PathVariable int eno){
        try{

            Optional<Emp> optionalEmp = empService.findById(eno);

            if (optionalEmp.isEmpty() == false){
//                TODO: 조회 성공
                return new ResponseEntity<>(optionalEmp, HttpStatus.OK);
            }else {
//                TODO: 0건 조회 (실패)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/emp")
    public ResponseEntity<Object> createEmp(
            @RequestBody Emp emp
    ){
        try{
            int count = empService.save(emp);

            return new ResponseEntity<>(count, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/emp/{eno}")
    public ResponseEntity<Object> updateEmp(
            @PathVariable int eno,
            @RequestBody Emp emp
    ){
        try{
            int count = empService.save(emp);

            return new ResponseEntity<>(count, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/emp/deletion/{eno}")
    public ResponseEntity<Object> deleteEmp(
            @PathVariable int eno
    ){
        try{

//              todo: 삭제함수 호출
            boolean bSuccess = empService.removeById(eno);
            if (bSuccess == true){
//                TODO: 삭제 성공
                return new ResponseEntity<>(HttpStatus.OK);
            }else {
//                TODO: 0건 삭제 (실패)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** TODO: dynamic sql */
    @GetMapping("/emp/dynamic")
    public ResponseEntity<Object> getEmpDynamic(
            @RequestParam(defaultValue = "") String ename,
            @RequestParam(defaultValue = "") String job,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
//      todo: 페이징 요청 객체에 정보 저장
//        page : 현재페이지 번호, size : 1 페이지당 개수

        try{
            PageReq pageReq = new PageReq(page, size);

//      todo: 전체 조회 함수 호출
            PageRes<Emp> pageRes
                    = empService.findByDynamicContaining(ename,job,pageReq);

//      todo: 정보전달( 부서배열, 페이징정보 )
//        자료구조 : 키,값 : Map 자료구조
            Map<String,Object> response = new HashMap<>();
            response.put("emp", pageRes.getContent()); // 부서배열
            response.put("currentPage", pageRes.getNumber()); // 현재 페이지 번호
            response.put("totalItems", pageRes.getTotalElements()); // 전체 테이블 건수
            response.put("totalPages", pageRes.getTotalPages()); // 전체 페이지 개수

            if (pageRes.isEmpty() == false){
//                TODO: 조회 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            }else {
//                TODO: 0건 조회 (실패)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }



    }

}
