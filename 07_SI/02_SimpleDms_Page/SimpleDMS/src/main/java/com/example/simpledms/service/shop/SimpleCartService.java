package com.example.simpledms.service.shop;

import com.example.simpledms.model.dto.shop.SimpleCartDto;
import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.shop.SimpleCart;
import com.example.simpledms.repository.shop.SimpleCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.shop
 * fileName : SimpleCartService
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
@Service
public class SimpleCartService {

    @Autowired
    SimpleCartRepository simpleCartRepository;

    // like 검색 + 페이징 + 조인
    public Page<SimpleCartDto> selectByTitleContaining(
            String title,
            Pageable pageable){
        Page<SimpleCartDto> page = simpleCartRepository.selectByTitleContaining(title,pageable);
        return page;
    }

    // 조인 상세검색 : 기본키로 검색
    public Optional<SimpleCartDto> selectById(
            Integer scno) {
        Optional<SimpleCartDto> optionalSimpleCartDto = simpleCartRepository.selectById(scno);
        return optionalSimpleCartDto;
    }

    //    저장 함수(수정함수)
    public SimpleCart save(SimpleCart simpleCart) {

        SimpleCart simpleCart2 = simpleCartRepository.save(simpleCart);

        return simpleCart2;
    }


    //   삭제 함수
    public boolean removeById(int scno){
        if (simpleCartRepository.existsById(scno)){ // scno 있는지 확인
            simpleCartRepository.deleteById(scno);  // 삭제 진행
            return true;
        }
        return false;
    }
}
