package chap06.Sec04.exam04;

/**
 * packageName : chap06.Sec04.exam04
 * fileName : Calculator
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Calculator {
//    TODO: 속성, 생성자함수, 함수(메소드)
//    속성 생략
//    생성자 생략
//    TODO: 함수 : 덧셈, 평균, 계산실행
//    사용법 : 접근제어지시자 리턴자료형 함수명(매개변수...){}

    /**
     * 덧셈 함수
     * @param a
     * @param b
     * @return
     */
    int plus(int a, int b){
        int result = a + b;
        return result;
    }

    double avg(int a, int b){
        int sum = plus(a,b);
        double result = (double)sum/2;
        return result;
    }
    void println(String message){
        System.out.println("계산결과 : " + message);
    }
    /**
     *
     */
    void execute(){
//       1) 평균 함수
        double result = avg(7,10);
        println(result + "");
    }

}
