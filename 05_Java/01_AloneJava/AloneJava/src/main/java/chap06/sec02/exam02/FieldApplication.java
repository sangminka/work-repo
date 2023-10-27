package chap06.sec02.exam02;

/**
 * packageName : chap06.sec02.exam02
 * fileName : FieldApplication
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
public class FieldApplication {
    public static void main(String[] args) {
//        객체 생성 : new 연산자(힙방에 해당객체를 생성함)
//        TODO: 클래스명 명명법: 첫글자 대문자 나머지 소문자, 단어사이는 대문자(파스칼 표기법)
//        사용법 : 클래스명 객체 변수명 = new 생성자함수();
        Fieldinit fieldinit = new Fieldinit();

//        TODO: 예제 : fieldInit 객체변수의 모든 속성 출력하세요
//        정수형
        System.out.println(fieldinit.bField);
        System.out.println(fieldinit.sField);
        System.out.println(fieldinit.iField);
        System.out.println(fieldinit.lField);

//        실수형
        System.out.println(fieldinit.fField);
        System.out.println(fieldinit.dField);

//        char/boolean
        System.out.println(fieldinit.cField);
        System.out.println(fieldinit.boField);

//       참조
        System.out.println(fieldinit.strField);
        System.out.println(fieldinit.arrField);

    }
}
