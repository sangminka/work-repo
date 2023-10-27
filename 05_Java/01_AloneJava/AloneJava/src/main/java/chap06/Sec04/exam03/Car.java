package chap06.Sec04.exam03;

/**
 * packageName : chap06.Sec04.exam03
 * fileName : Car
 * author : GGG
 * date : 2023-09-20
 * description : 자동차 모델 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Car {
//    TODO 속성(필드), 생성자 함수, 함수(메소드)

    int gas; // 기름

    //    속성에 값을 넣지 않고 1) 생성자를 이용해서 값을 넣거나
//                       2) setter 함수 이용해서 값을 수정하거나
//    사용법 : void set속성명(int 속성명) {this.속성명 = 속성명;}
//    역할 : 속성에 값을 저장/수정 하는 함수
//    자동화 기능 alt + insert => setter
    void setGas(int gas) {
        this.gas = gas;
    }

    /**
     * gas가 남았는지 확인하는 함수
     */
    boolean isLeftGas(){
        if (gas == 0){
            System.out.println("gas가 없습니다.");
            return false;
        }else {
            System.out.println("gas가 있습니다.");
            return true;
        }
    }
    /**
     * 자동차를 달리게 하는 함수 gas가 1씩 감소함
     * 계속 달리다가 gas == 0 순간 중단
     */
    void run(){
        while (true){
            if(gas > 0){
                System.out.println("달립니다.(gas잔량: " + gas +")");
                gas = gas - 1;
            }else {
                System.out.println("멈춤니다.(gas잔량: " + gas +")");
                return; // break 동일한 효과(강제 중단)
            }
        }
    }
}
