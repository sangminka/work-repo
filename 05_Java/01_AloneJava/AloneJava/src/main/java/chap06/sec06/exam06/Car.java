package chap06.sec06.exam06;

/**
 * packageName : chap06.sec06.exam06
 * fileName : Car
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 *      1) 속성 : 외부 객체에서 속성 접근 못하게 막기 : private 자료형 속성;
 *      2) 함수 : 외부 객체에 함수 2개 제공 : public setter(), public getter() 함수
 *      setter 함수 : 속성에 값을 저장하는 함수      ex) set속성명()
 *      getter 함수 : 속성에 현재 값을 확인하는 함수  ex) get속성명()
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Car {
//    TODO: 속성, 생성자, 함수(메소드)
//    속성(필드)

    private int speed; //속도
    private boolean stop; //상태
    int defaultValue;     // default 테스트 속성

//  생성자 생략
//  TODO: 함수 : speed 속성 (setter/getter), stop(setter/getter) : alt + insert
    public int getSpeed() {
        return speed;
    }

    /**
     * 자동차의 속도(speed) 를 저장/수정하는 함수
     * @param speed
     */
    public void setSpeed(int speed) {
        // 음수가 나오면 0으로 강제 저장
        // 음수가 아니면 그냥 저장
        if (speed > 0){
            this.speed = speed;
        }else {
            this.speed = 0;
        }

    }

    public boolean isStop() {
        return stop;
    }

    /**
     * 자동차 정지하면 속도는 0이 되야함
     * @param stop
     */
    public void setStop(boolean stop) {
        this.stop = stop;
//        속도 = 0
        this.speed = 0;
    }
}
