package chap12.sec01.exam09;


import java.util.HashMap;
import java.util.Map;

/**
 * packageName : chap12.sec01.exam09
 * fileName : HashMapApplication
 * author : GGG
 * date : 2023-09-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class HashMapApplication {
    public static void main(String[] args) {
//        객체생성 : Map<키,값>
        Map<String,Student> map = new HashMap<>();

//        TODO: 객체 자료 추가
          map.put("신용권",new Student(1,"신용권"));
          map.put("홍길동",new Student(2,"홍길동"));
          map.put("장길산",new Student(3,"장길산"));
          map.put("임꺽정",new Student(4,"임꺽정"));
        System.out.println(map);

//        TODO: 객체 조회 : map.get(키)
        System.out.println("홍길동 값 : " + map.get("홍길동"));

//        TODO: 객체 사제 : map.remove(키)
        map.remove("홍길동");
    }
}
