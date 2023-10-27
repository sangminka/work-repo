package chap07.verify.exam02;

/**
 * packageName : chap07.verify.exam02
 * fileName : Point
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Point {
    int x ;
    int y;
    void set(int a,int b){
        this.x = a;
        this.y = b;

    }
    void showPoint(){
        System.out.println("(" + x + "," + y +")");


    }
}
