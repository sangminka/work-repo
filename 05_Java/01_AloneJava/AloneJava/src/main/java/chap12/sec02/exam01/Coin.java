package chap12.sec02.exam01;

/**
 * packageName : chap12.sec02.exam01
 * fileName : Coin
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
public class Coin {
//    속성
    private int value;
//    TODO: 기본생성자/풀 속성 생성자, setter/getter 함수

//    생성자
    public Coin(){}
    public Coin(int value) {
        this.value = value;
    }

//    get/set
    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
