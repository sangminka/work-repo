package chap10.sec02.exam02;

/**
 * packageName : chap10.sec02.exam02
 * fileName : TryCatch2Application
 * author : GGG
 * date : 2023-09-26
 * description : 예외 처리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class TryCatch2Application {
    public static void main(String[] args) {
//        TODO: Out of Bound 에러 발생 시키는 코드
//          현재 main의 매개변수는 기본적으로 없음
//          try ~ catch(){}
        String data1 = null;
        String data2 = null;

        try{
            data1 = args[0];
            data2 = args[1];

            System.out.println(data1); // 에러 발생 -> catch로 이동함
            System.out.println(data2);
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("실행 매개변수값이 없습니다.");
        }

//        TODO: 강제로 Number Format 에러 발생 예제
//        TODO 문자열 숫자로 변경 " Integer.ParseINt
        try{
            int value1 = Integer.parseInt(data1);
            int value2 = Integer.parseInt(data2);
            System.out.println(data1 + " " + data2);
        }catch (NumberFormatException e){
            System.out.println("숫자로 변환할 수 없습니다.");
        }finally {
//            TODO: 에러 유무와 상관없이 무조건 실행되는 블럭
            System.out.println("다시 실행하세요");
        }


    }
}
