package com.example.mybatisexam.dao;

import com.example.mybatisexam.model.common.PageReq;
import com.example.mybatisexam.model.vo.Emp;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.mybatisexam.dao
 * fileName : EmpDao
 * author : GGG
 * date : 2023-10-12
 * description :
 * 요약 : 사원 Dao(Mabatis mapper :@Mapper 사용)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Mapper
public interface EmpDao {
    /** 전체조회 : like 검색 있음 */
    public List<Emp> findByEnameContaining(@Param("ename") String ename,
                                           PageReq pageReq
                                           );
    long countByEname(String ename);

    /** 상세조회(1건조회) */
    Optional<Emp> findById(int eno);

    /** 저장함수 */
    int insert(Emp emp);

    /** 수정함수 */
    int update(Emp emp);

    int deleteById(int eno);

    long existByid(int eno);

    public List<Emp> findByDynamicContaining(
            @Param("ename") String ename,
            @Param("job") String job,
            PageReq pageReq);

    long countByDynamic(String ename, @Param("job") String job);
}
