package chap14.sec02.exam01;

import java.util.Arrays;

/**
 * packageName : chap14.sec02.exam01
 * fileName : ArraysApplication
 * author : GGG
 * date : 2023-09-27
 * description : Arrays 의 유용한 함수들
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class ArraysApplication {
    public static void main(String[] args) {
        int[] arr = {0,1,2,3,4};
        int[][] arr2D = { {11,12,13}, {21,22,23}};

//      TODO: Arrays : 자바에서 배열을 대표하는 클래스(유용한 함수들 다수)
//      TODO: 배열 -> 문자열로 변환
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.deepToString(arr2D));

//      TODO: 2) 배열 복사
        int[] arr2 = Arrays.copyOf(arr,arr.length); // 전체 복사
        int[] arr3 = Arrays.copyOfRange(arr,2,4); // 2 ~ (4 - 1) 복사
        System.out.println(Arrays.toString(arr2));
        System.out.println(Arrays.toString(arr3));

//      TODO: 3) 배열 동등 비교
        System.out.println("---- 배열 동등 비교 ----");
        System.out.println(Arrays.equals(arr,arr2)); // true (틀리면 false)

//      TODO: 4) 배열 오름차순 정렬
        char[] chArr = {'A', 'D', 'C', 'B', 'E'};
        Arrays.sort(chArr);
        System.out.println(Arrays.toString(chArr)); // 결과 출력

//      TODO: 5) 이진 탐색(검색, 조회) : 리턴값 : 인텍스 번호
//            사용시 : 미리 정렬 되어야 함 -> 이진 탐색
        System.out.println("B의 인덱스번호 : " + Arrays.binarySearch(chArr,'B'));
    }
}
