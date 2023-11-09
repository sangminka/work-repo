package com.example.simpledms.service.shop;

import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.model.entity.shop.SimpleProduct;
import com.example.simpledms.repository.shop.ProductRepository;
import com.example.simpledms.repository.shop.SimpleProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.shop
 * fileName : ProductService
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
public class ProductService {
    @Autowired
    ProductRepository productRepository;


    public List<Product> findAll(){
        List<Product> list = productRepository.findAll();
        return list;
    }

    public Page<Product> findAllByPnameContains(
            String pname,
            Pageable pageable){
        Page<Product> page = productRepository.findAllByPnameContains(pname,pageable);
        return page;
    }

    //    저장 함수(수정함수)
    public Product save(Product product) {

        Product product2 = productRepository.save(product);

        return product2;
    }

    //    상세 조회(1건조회)
    public Optional<Product> findById(int pno) {
        Optional<Product> optionalProduct = productRepository.findById(pno);

        return optionalProduct;
    }
}
