package chap07.sec03.exam02;

/**
 * packageName : chap07.sec03.exam02
 * fileName : AnimalApplication
 * author : GGG
 * date : 2023-09-22
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class AnimalApplication {
    public static void main(String[] args) {
//        자식 객체
        Dog dog = new Dog();
        Cat cat = new Cat();

        cat.sound();
        dog.sound();
        System.out.println("----------------------------");
//        TODO: 사용목적 : 다형성 이용
        Animal animal = new Dog();
        animal.sound();

        animal = new Cat();
        animal.sound();
    }
}
