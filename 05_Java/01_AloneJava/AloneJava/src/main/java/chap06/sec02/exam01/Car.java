package chap06.sec02.exam01;

/**
 * packageName : chap06.sec02.exam01
 * fileName : Car
 * author : GGG
 * date : 2023-09-19
 * description : 자동차 클래스
 * 요약 :
 *      클래스         : 객체의 구조를 정의하는 곳 (속성(필드, 멤버 변수), 생성자, 함수(메소드))
 *      객체(인스턴스)  : 클래스로 부터 생성되면 new 생성자함수() 이용해서 생성함
 *      new 연산자     : 객체 생성 연산자이며 , 생성자함수를 호출하고 힙 메모리방에 객체를 저장함
 *      사용법         : 클래스 객체변수 = new 생성자함수();
 *      객체변수       : 힙 메모리 방번호(주소)가 저장됨
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Car {
//    클래스의 3요소 : 속성, 생성자함수, 함수(메소드)
//    TODO: 속성(필드, 멤버변수)
    String company ="현대자동차";
    String model = "그랜저";
    String color = "검정";
    int maxSpeed = 350;
    int speed; // 기본 초기화(0)
}
