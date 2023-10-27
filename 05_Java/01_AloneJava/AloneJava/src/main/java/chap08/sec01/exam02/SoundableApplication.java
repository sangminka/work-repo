package chap08.sec01.exam02;

/**
 * packageName : chap08.sec01.exam02
 * fileName : SoundableApplication
 * author : GGG
 * date : 2023-09-22
 * description : 매개변수의(함수) 다형성
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class SoundableApplication {
//    공유(정적,전역) 함수

    static void printSound(Soundable soundable){
        System.out.println(soundable.sound()); // 부모 인터페이스의 함수 호출
    }
    public static void main(String[] args) {
        printSound(new Cat());
        printSound(new Dog());
    }
}
