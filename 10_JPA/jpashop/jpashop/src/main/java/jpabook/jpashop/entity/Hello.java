package jpabook.jpashop.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * packageName : jpabook.jpashop.entity
 * fileName : Hello
 * author : GGG
 * date : 2023-12-15
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-12-15         GGG          최초 생성
 */
@Getter @Setter
@Entity
public class Hello {
    @Id
    private String data;
}
