package chap06.sec03.exam02;

/**
 * packageName : chap06.sec03.exam02
 * fileName : KoreanApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class KoreanApplication {
    /**
     * 한국인 객체를 생성하고 매개변수 2개짜리 생성자를 이용해서 속성을 초기화하세요.
     * 초기
     * @param args
     */
    public static void main(String[] args) {
        Korean k1 = new Korean("박자바", "011225-1234567");
        Korean k2 = new Korean("김자바", "930525-0654321");

        System.out.println("k1.name : " + k1.name);
        System.out.println("k1.ssn : " + k1.ssn);

        System.out.println("k2.name : " + k2.name);
        System.out.println("k2.ssn : " + k2.ssn);

    }
}
