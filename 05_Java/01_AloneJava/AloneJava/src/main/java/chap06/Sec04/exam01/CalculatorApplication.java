package chap06.Sec04.exam01;

/**
 * packageName : chap06.Sec04.exam01
 * fileName : CalculatorApplication
 * author : GGG
 * date : 2023-09-20
 * description :실행클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class CalculatorApplication {
    public static void main(String[] args) {
//        객체 생성
//        사용법: 클래스명 객체변수명 = new 생성자함수();
        Calculator calculator = new Calculator();

//        TODO: 1) 전원을 ON
        calculator.powerOn();
//        TODO: 2) 더하기 계산
//              리턴값이 있는 함수를 사용하는 전용 패턴
        int result = calculator.plus(5,6);
//        결과출력 : sout
        System.out.println(result);

//        TODO: 예제 3) 계산기에 나눗셈 기능을 추가하려고 합니다,
//                  나눗셈을 추가하고 결과를 실해하세요
        double result2 = calculator.divide(10,4);
        System.out.println(result2);

//        TODO: 예제 4) 추가 기능을 요청해서 추가했습니다,
//                  계산기를 끄는 기능을 추가해 주세요
        calculator.powerOff();
    }
}
