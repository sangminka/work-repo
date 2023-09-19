import java.util.Scanner;

/**
 * packageName : PACKAGE_NAME
 * fileName : SolutionApplication
 * author : GGG
 * date : 2023-09-19
 * description :    main 함수 있는 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class SolutionApplication {
    public static void main(String[] args) {
        /**
         * 문자열 출력하기
         * 입력 : HelloWorld!
         * 출력 : HelloWorld!
         */
//        Scanner sc = new Scanner(System.in);
//        String a = sc.next();
//        System.out.println(a);

        Soluton soluton = new Soluton();
        String[] arg = {"a","b","c"};
        System.out.println(soluton.solution(arg));
    }


}

