package chap11.sec01.exam03;



/**
 * packageName : chap11.sec01.exam03
 * fileName : SmartPhoneApplication
 * author : GGG
 * date : 2023-09-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class SmartPhoneApplication {
    public static void main(String[] args) {
        SmartPhone smartPhone = new SmartPhone("google","Android");
        System.out.println(smartPhone); // 자동으로 toString() 함수가 호출됨
        System.out.println(smartPhone.toString());
    }
}
