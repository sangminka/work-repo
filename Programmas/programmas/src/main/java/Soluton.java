/**
 * packageName : PACKAGE_NAME
 * fileName : Soluton
 * author : GGG
 * date : 2023-09-19
 * description : 솔루션 함수 작성하는 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Soluton {
    /**
     * 문자 리스트를 문자열로 변환하기
     * @param arr : ["a","b","c"]
     * @return : "abc
     */
    public String solution(String[] arr) {
        String answer = "";
        for (int i = 0; i < arr.length; i++) {
            answer = answer + arr[i];
        }
        return answer;
    }
}
