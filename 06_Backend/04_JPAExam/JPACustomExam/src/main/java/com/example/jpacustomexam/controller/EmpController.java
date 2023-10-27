package com.example.jpacustomexam.controller;

import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.model.Emp;
import com.example.jpacustomexam.service.DeptService;
import com.example.jpacustomexam.service.EmpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * packageName : com.example.jpacustomexam.controller
 * fileName : EmpController
 * author : GGG
 * date : 2023-10-17
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Slf4j
@RestController
public class EmpController {
    @Autowired
    EmpService empService;

    /** 전체 조회 + 정렬(eno 내림차순) */

    @GetMapping("/emp/desc")
    public ResponseEntity<Object> getEmpAllDesc(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByOrderByEnoDesc();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /** 전체 조회 + 정렬(eno 오름차순) */

    @GetMapping("/emp/ename/asc")
    public ResponseEntity<Object> findAllByOrderByEname(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByOrderByEname();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/ename/containing/{ename}")
    public ResponseEntity<Object> findByEnameContainingOrderByEname(
            @PathVariable String ename
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findByEnameContainingOrderByEname(ename);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/jobAndDno/{job}/{dno}")
    public ResponseEntity<Object> findAllByJobAndDno(
            @PathVariable String job,
            @PathVariable int dno
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByJobAndDno(job,dno);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/emp/salaryBetween/{min}/{max}")
    public ResponseEntity<Object> findAllBySalaryBetween(
            @PathVariable int min,
            @PathVariable int max
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllBySalaryBetween(min,max);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/job/ignorecase/{job}")
    public ResponseEntity<Object> findAllByJobIgnoreCase(
            @PathVariable String job
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByJobIgnoreCase(job);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/notnull/commission")
    public ResponseEntity<Object> findAllByCommissionIsNotNull(
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByCommissionIsNotNull();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/desc/salary/asc/ename")
    public ResponseEntity<Object> findAllByOrderBySalaryDescEnameAsc(
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByOrderBySalaryDescEnameAsc();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/emp/less/salary/greater/{desc}/{greater}")
    public ResponseEntity<Object> findAllBySalaryLessThanOrSalaryGreaterThan(
            @PathVariable int desc,
            @PathVariable int greater
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllBySalaryLessThanOrSalaryGreaterThan(desc,greater);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("emp/or/commission/{commission1}/{commission2}/{commission3}")
    public ResponseEntity<Object> findAllByCommissionOrCommissionOrCommission(
            @PathVariable int commission1,
            @PathVariable int commission2,
            @PathVariable int commission3
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.findAllByCommissionOrCommissionOrCommission(commission1,commission2,commission3);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //  todo: 1) ename like 검색 (단, % 1개만 사용 )
    @GetMapping("/emp/jq/ename/{ename}")
    public ResponseEntity<Object> selectByEname(
            @PathVariable String ename
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.selectByEname(ename);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** salary 내림차순, ename 오름차순 */
    @GetMapping("/emp/desc/asc")
    public ResponseEntity<Object> selectByDesc(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.selectByDesc();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**  3) commission 이 null이고 salary 매개변수로 전달되는 값보다
     같거나 큰 사원 모두 출력하세요. */

    @GetMapping("/emp/salary/{salary}")
    public ResponseEntity<Object> selactSalary(
            @PathVariable int salary
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.selactSalary(salary);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**  4) 1982년도에 입사한 사원 출력하기, 입사일 내림차순하세요 */
    @GetMapping("/emp/hiredate/{first}/{last}")
    public ResponseEntity<Object> selactHiredate(
            @PathVariable String first,
            @PathVariable String last
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<Emp> list = empService.selactHiredate(first,last);
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 5 dno, job 별 월급여의 합 출력하는 함수를 작성하세요 */
    @GetMapping("/emp/group/dno/job")
    public ResponseEntity<Object> selectGroupDnoJob(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<EmpGroupDto> list = empService.selectGroupDnoJob();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 6 dno 별 월급여의 평균 출력하는 함수를 작성하세요 */

    @GetMapping("/emp/dno/avg/trunc")
    public ResponseEntity<Object> selectGroupDnoTrunc(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<EmpGroupDto> list = empService.selectGroupDnoTrunc();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 연습 7 */
    @GetMapping("/emp/sum/max")
    public ResponseEntity<Object> selectGroupSumMax(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<EmpGroupDto> list = empService.selectGroupSumMax();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 연습 8 */
    @GetMapping("/emp/hiredate/min/max")
    public ResponseEntity<Object> selectGroupHiredate(){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            List<EmpGroupDto> list = empService.selectGroupHiredate();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 페이징 처리 */
    @GetMapping("/emp/ename/{ename}/paging")
    public ResponseEntity<Object> findAllByEnameContaining(
            @PathVariable String ename,
            Pageable pageable
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            Page<Emp> page = empService.findAllByEnameContaining(ename,pageable);

            //          TODO: Map 자료구조 정보저장 : 1) 부서객체, 2) 페이징 정보 (3개)
            Map<String,Object> response = new HashMap<>();
            response.put("emp",page.getContent()); // 사원 객체
            response.put("currentPage",page.getNumber()); // 현재 페이지 번호
            response.put("totalItems",page.getTotalElements()); // 전체 테이블 건수
            response.put("totalPages",page.getTotalPages()); // 전체 페이지 수

            if (page.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /** 페이징 처리 */
    @GetMapping("/emp/all/paging")
    public ResponseEntity<Object> EmpPageAll(
            Pageable pageable
    ){
        try {
//          전체 조회 + 정렬(dno 내림차순) 호출
            Page<Emp> page = empService.findAllEmp(pageable);

            //          TODO: Map 자료구조 정보저장 : 1) 부서객체, 2) 페이징 정보 (3개)
            Map<String,Object> response = new HashMap<>();
            response.put("emp",page.getContent()); // 사원 객체
            response.put("currentPage",page.getNumber()); // 현재 페이지 번호
            response.put("totalItems",page.getTotalElements()); // 전체 테이블 건수
            response.put("totalPages",page.getTotalPages()); // 전체 페이지 수

            if (page.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //    --------------------------------------------------
//    @Query 2) 예제
//    --------------------------------------------------
    /** 2) findAll() + 페이징 : @Query */
//    page = 현재페이지번호(0 ~ n), size = 전체페이지 수
    @GetMapping("/emp/all/paging/query/{ename}")
    public ResponseEntity<Object> selectByEnamePage(
            @PathVariable String ename,
            Pageable pageable
    ) {
        try {
            Page<Emp> page
                    = empService.selectByEnamePage(ename,pageable);

//          TODO: Map 자료구조 정보저장 : 1) 부서객체, 2) 페이징 정보 (3개)
            Map<String,Object> response = new HashMap<>();
            response.put("emp",page.getContent()); // 부서 객체
            response.put("currentPage",page.getNumber()); // 현재 페이지 번호
            response.put("totalItems",page.getTotalElements()); // 전체 테이블 건수
            response.put("totalPages",page.getTotalPages()); // 전체 페이지 수

            if (page.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e){
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
