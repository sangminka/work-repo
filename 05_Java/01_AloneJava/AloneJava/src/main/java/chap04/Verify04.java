package chap04;

/**
 * packageName : chap04
 * fileName : Verify04
 * author : GGG
 * date : 2023-09-19
 * description : 4장 연습문제 : 조건문/반복문
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Verify04 {
    /**
     * for문을 이용해서 1부터 1--까지의 정수 주에서
     * 3의 배수의 총합을 구하는 코드를 작성해 보세요
     */
    public void exam02(){
        int sum = 0;
        for (int i = 1; i <= 100 ; i++) {
            if (i % 3 == 0){
                sum += i;
            }
        }
        System.out.println(sum);
    }
    /**
     * while문과 Math.random() 함수를 이용해서 2개의 주사위를 던졌을 때
     * 나오는 눈을(눈1, 눈2) 형태로 출력하고,
     * 눈의 합이 5가 아니면 계속 주사위를 던지고,
     * 눈의 합이 5이면 실행을 멈추는 코드를 작성해 보세요.
     */
    public void exam03() {

        while (true) {
            int num1 = (int) (Math.random() * 6) + 1;
            int num2 = (int) (Math.random() * 6) + 1;
            System.out.println(num1 + "," + num2);
            if (num1 + num2 == 5) {
                break;
            }

        }
    }
    /**
     * 중첩 for문을 이용해서 방정식 4x+5y = 60의 모든 해를 구해서 x,y 형태로 출력해 보세요
     * 단 x 와 y는 10이하의 자연수 입니다
     */
    public void exam04(){
        for (int x = 1; x <= 10; x++) {
            for (int y = 1; y <=10; y++) {
                if((4*x) + (5*y) == 60){
                    System.out.println(x + "," + y);
                }
            }
        }
    }
    /**
     * for문을 이용해서 다음과 같이 *를 출력하는 코드를 작성해 보세요.
     * 출력 : *
     *       **
     *       ***
     *       ****
     */
    public void exam05() {
        String star = "";
        for (int i =1; i<=4; i++){
            star = star + '*';
            System.out.println(star);
        }
    }
}
