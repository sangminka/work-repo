package com.example.jpacustomexam.service;

import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.model.Emp;
import com.example.jpacustomexam.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.jpacustomexam.service
 * fileName : EmpService
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
@Service
public class EmpService {

    @Autowired
    EmpRepository empRepository;

    /** 전체 조회 + 정렬(eno 내림차순) */
    public List<Emp> findAllByOrderByEnoDesc(){
        List<Emp> list = empRepository.findAllByOrderByEnoDesc();
        return list;

    }
    /** 전체 조회 + 정렬(ename 오름차순) */


    public List<Emp> findAllByOrderByEname(){
        List<Emp> list = empRepository.findAllByOrderByEname();
        return list;
    }

    //    todo: 연습 3) ename like 검색
    public List<Emp> findByEnameContainingOrderByEname(String ename){
        List<Emp> list = empRepository.findByEnameContainingOrderByEname(ename);
        return list;
    }


    public List<Emp> findAllByJobAndDno(String job, int dno){
        List<Emp> list = empRepository.findAllByJobAndDno(job,dno);
        return list;
    }

    public List<Emp> findAllBySalaryBetween(int min, int max){
        List<Emp> list = empRepository.findAllBySalaryBetween(min,max);
        return list;
    }

    public List<Emp> findAllByJobIgnoreCase(String job){
        List<Emp> list = empRepository.findAllByJobIgnoreCase(job);
        return list;
    }

    //    todo: 7) commission 을 받는 사원을 모두 출력하는 함수를 작성하세요.
//     힌트 : where commission is not null
    public List<Emp> findAllByCommissionIsNotNull(){
        List<Emp> list = empRepository.findAllByCommissionIsNotNull();

        return list;
    }


    public List<Emp> findAllByOrderBySalaryDescEnameAsc(){
        List<Emp> list = empRepository.findAllByOrderBySalaryDescEnameAsc();

        return list;
    }

    public List<Emp> findAllBySalaryLessThanOrSalaryGreaterThan(int less, int greate){
        List<Emp> list = empRepository.findAllBySalaryLessThanOrSalaryGreaterThan(less,greate);

        return list;
    }

    public List<Emp> findAllByCommissionOrCommissionOrCommission(int commission1, int commission2, int commission3){
        List<Emp> list = empRepository.findAllByCommissionOrCommissionOrCommission(commission1,commission2,commission3);

        return list;
    }

    //  todo: 1) ename like 검색 (단, % 1개만 사용 )
    public List<Emp> selectByEname(
            String ename
    ){
        List<Emp> list = empRepository.selectByEname(ename);
        return list;
    }

    /** salary 내림차순, ename 오름차순 */
    public List<Emp> selectByDesc(){
        List<Emp> list = empRepository.selectByDesc();
        return list;
    }

    /**  3) commission 이 null이고 salary 매개변수로 전달되는 값보다
     같거나 큰 사원 모두 출력하세요. */
    public List<Emp> selactSalary(int salary){
        List<Emp> list = empRepository.selactSalary(salary);
        return list;
    }

    /**  4) 1982년도에 입사한 사원 출력하기, 입사일 내림차순하세요 */
    public List<Emp> selactHiredate(String first, String last){
        List<Emp> list = empRepository.selactHiredate(first,last);
        return list;
    }

    /**  5 @Quert(dto)*/

    public List<EmpGroupDto> selectGroupDnoJob(){
        List<EmpGroupDto> list = empRepository.selectGroupDnoJob();
        return list;
    }

    /** 6 dno 별 월급여의 평균 출력하는 함수를 작성하세요 */
    public List<EmpGroupDto> selectGroupDnoTrunc(){
        List<EmpGroupDto> list = empRepository.selectGroupDnoTrunc();
        return list;
    }
//    todo: 7) 사원의 수와 최고월급을 출력하세요.
//       nativeQuery = true 사용,
//       dto : EmpGroupDto
    public List<EmpGroupDto> selectGroupSumMax(){
        List<EmpGroupDto> list = empRepository.selectGroupSumMax();
        return list;
    }

//    todo: 8) 사원 테이블에서 가장 오래된 입사일과 가장 빠른 입사일을 출력하세요.
//       nativeQuery = true 사용,
//       dto : EmpGroupDto
    public List<EmpGroupDto> selectGroupHiredate(){
        List<EmpGroupDto> list = empRepository.selectGroupHiredate();
        return list;
    }

//    ----------------------------
//    페이지 예제
//    ----------------------------
    public Page<Emp> findAllByEnameContaining(
            String ename,
            Pageable pageable
    ){
        Page<Emp> page = empRepository.findAllByEnameContaining(ename,pageable);
        return page;
}

//  findAll 함수
    public Page<Emp> findAllEmp(
            Pageable pageable
    ){
        Page<Emp> page = empRepository.findAll(pageable);
        return page;
    }
//    ----------------------------------------
//    @Query 페이징 처리
//    ----------------------------------------
//    2) 기본 제공되는 전체 조회 함수 : 페이징처리 기능 추가
    public Page<Emp> selectByEnamePage(String ename, Pageable pageable) {
        Page<Emp> page = empRepository.selectByEnamePage(ename,pageable);

        return page;
    }


}
