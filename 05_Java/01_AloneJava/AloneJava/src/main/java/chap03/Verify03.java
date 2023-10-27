package chap03;

import java.util.Scanner;

/**
 * packageName : chap03
 * fileName : Verify03
 * author : GGG
 * date : 2023-09-18
 * description : 연습문제 자바 파일
 * 요약 : 
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Verify03 {
//    속성(멤버변수)
//    생성자 함수
//    메소드(멤버 메소드)

    /**
     * 두실수를 입력 받아서 나눗셈을 결과를 출력하세요
     * 단, 두번째 수가 0일 경운 "무한대"로 출력하세요
     * 입력 9
     *     3
     * 출력 3.0
     */
    public void exam01(){
        Scanner scanner = new Scanner(System.in);
//        scanner.nextLine() : 문자열 입력 -> 실수로 변환 Double.parseDouble

        double a = scanner.nextDouble(); // 1st 줄
        double b = scanner.nextDouble(); // 2nd 줄
        if(b != 0.0){
            System.out.println("결과 : " + (a/b));
        }else {
            System.out.println("결과 : 무한대");
        }
        
    }
    /**
     * 문제: 원의 넓이를 구하시오
     */
    public void exam02(){
        int var1 = 10; // 반지름
        System.out.println(var1*var1*3.14);
    }

    /**
     * 아이디와 패스워드를 각각 입력받아 아이디가 "java"r가 아니면
     * "로그인실패: 아이디가 존재하지 않음"을 출력하세요
     * 아이디가"java"이면, 패스워드를 체크해서 패스워드가12345이면 "로그인 성공" 출력하고,
     * 패스워드가 12345가 이니면 "로그인 실패: 패스워드가 틀림" 을 출력하세요
     * 힌트 : 중첩 if문
     */
    public void exam03(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("아이디 : ");
        String id = scanner.next();
        System.out.println("비밀번호 : ");
        String password = scanner.next();
        int ipassword = Integer.parseInt(password); // 숫자 패스워드

        if (id.equals("java")){
            if (ipassword == 12345){
                System.out.println("로그인성공");
            }else {
                System.out.println("로그인 실패: 패스워드가 틀림");
            }
        }else {
            System.out.println("로그인 실패: 아이디가 존재하지 않음");
        }
    }
}
