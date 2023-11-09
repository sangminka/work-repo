package com.example.simpledms.repository.shop;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.shop.SimpleProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.shop
 * fileName : SimpleProductRepository
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
@Repository
public interface SimpleProductRepository extends JpaRepository<SimpleProduct,Integer> {
//   title 검색
    Page<SimpleProduct> findAllByTitleContaining(String title, Pageable pageable);


}
