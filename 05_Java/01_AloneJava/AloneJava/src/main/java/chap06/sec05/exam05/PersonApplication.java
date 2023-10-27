package chap06.sec05.exam05;

/**
 * packageName : chap06.sec05.exam05
 * fileName : PersonApplication
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class PersonApplication {
    public static void main(String[] args) {
//        객체 생성
        Person person = new Person("123456-1234567", "홍길동");

//      상수 출력
        System.out.println(person.nation); // 상수
        System.out.println(person.ssn);    // 상수
        System.out.println(person.name);   // 변수
//        테스트 : 상수/변수
        person.name = "강감찬";
//        person.nation = "캐나다"; // 상수이므로 변경불가(에러 발생)
    }
}
