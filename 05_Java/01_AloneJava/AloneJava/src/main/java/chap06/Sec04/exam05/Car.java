package chap06.Sec04.exam05;

/**
 * packageName : chap06.Sec04.exam05
 * fileName : Car
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
public class Car {
    int speed;

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getSpeed() {
        return speed;
    }

    void keyTurnOn(){
        System.out.println("키를 돌립니다.");
    }

    void run(){
        for (int i = 10; i <= 50; i = i+10) {
            setSpeed(i);
            System.out.println("달립니다. (시속:" + speed +"Km/h)" );
        }
    }


}
