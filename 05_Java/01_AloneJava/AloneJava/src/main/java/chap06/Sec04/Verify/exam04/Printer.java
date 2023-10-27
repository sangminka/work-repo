package chap06.Sec04.Verify.exam04;

/**
 * packageName : chap06.Sec04.Verify.exam04
 * fileName : Printer
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

public class Printer {
//  TODO: 속성, 생성자함수, 함수(메소드)
//  속성, 생성자함수 생략
//  함수
    static void println(int a){
        System.out.println("공유함수 (int) : " + a);
    }
    static void println(boolean a){

        System.out.println("공유함수 (boolean) : " +a);
    }
    static void println( double a){

        System.out.println("공유함수 (double) : " +a);
    }
    static void println(String a){
        System.out.println("공유함수 (String) : " +a);
    }

}
