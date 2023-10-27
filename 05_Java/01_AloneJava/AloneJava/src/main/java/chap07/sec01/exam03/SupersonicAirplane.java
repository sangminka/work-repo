package chap07.sec01.exam03;

/**
 * packageName : chap07.sec01.exam03
 * fileName : SupersonicAirplane
 * author : GGG
 * date : 2023-09-21
 * description : 자식클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class SupersonicAirplane extends Airplane {
//    속성 : 모드 바꿈 설정
    public static final String NORMAL = "NORMAL";           //공유(정적,전역) 상수
    public static final String SUPERSONIC = "SUPERSONIC";

    public String flymode = NORMAL; // 기본모드 : 최초에 NORMAL

    /**
     * fly() 함수에 모드 선택 추가 : 오버라이딩(메소드 재정의)
     */
    @Override
    public void fly() {
        if (flymode.equals(SUPERSONIC) == true){
            System.out.println("Supersonic fly");
        }else {
//          TODO: super.함수() : 부모쪽에 있는 함수를 호출
            super.fly();
        }
    }
}
