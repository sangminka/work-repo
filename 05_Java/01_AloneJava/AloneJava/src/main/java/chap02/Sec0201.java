package chap02;

/**
 * packageName : chap02
 * fileName : Sec0201
 * author : GGG
 * date : 2023-09-18
 * description :
 * 요약 :
 *      변수          : 값을 저장할수 있는 메모리 공간
 *      변수 사용 범위 :{} 안에서만 사용가능
 *          만약에 {} 안에 {} 있다면 변수는 안에 {} 도 사용가능함
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Sec0201 {
    public void exam01(){
//        변수 선언
        int value = 20;

//        변수 연산
//        예제 2) 변수 value 에 값을 10더하는 연산을 한 후 화면에 출력하세요
        int result = value + 10;
        System.out.println(result);
    }
    public void exam02(){
//        예제 3) x = 3, y = 5 가 있습니다. x와 y 값을 바꾸어서 출력하세요
//        결과 출력은 아래와 같이 출력하세요
//        결과 x= 6, y =3
        int x = 3;
        int y = 5;
        int temp = x;
        x = y;
        y = temp;
        System.out.println("x = "+ x + " , y = "+ y );
    }
    public void exam04(){
        int v1 = 15;
        if(v1> 10){
            int v2;
//            v2 = v1 - 1
        }
//        int v3 = v1 + v2 +5; // v2변수 사용불가 선언 X
    }
}

