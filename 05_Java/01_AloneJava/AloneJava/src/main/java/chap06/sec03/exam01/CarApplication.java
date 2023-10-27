package chap06.sec03.exam01;

/**
 * packageName : chap06.sec03.exam01
 * fileName : CarApplication
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 *
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class CarApplication {
    public static void main(String[] args) {
//        객체 생성 :
//        사용법 : 클래스명 객체변수명 = new 생성자함수();
        Car car = new Car("검정", 3000);
        Car car2 = new Car("흰색", 2000);
//        결과 출력 : 1st 자동차
        System.out.println(car.ccNum);
        System.out.println(car.col);
//        결과 출력 : 2nd 자동차
        System.out.println(car2.ccNum);
        System.out.println(car2.col);
    }
}
