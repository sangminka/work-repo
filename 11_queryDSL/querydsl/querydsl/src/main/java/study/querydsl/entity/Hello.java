package study.querydsl.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * packageName : study.querydsl.entity
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
@Entity
@Getter @Setter
public class Hello {
    @Id @GeneratedValue
    public  Long id;
}
