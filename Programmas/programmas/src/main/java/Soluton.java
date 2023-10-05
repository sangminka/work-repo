import java.sql.Array;
import java.util.ArrayList;
import java.util.Scanner;

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

/**
 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

 arr	            queries                     	 result
 [0, 1, 2, 4, 3]	[[0, 4, 1],[0, 3, 2],[0, 3, 3]]	 [3, 2, 4, 6, 4]
 */
class Solution {
    public ArrayList<Integer> solution(int[] arr, int[][] queries) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        for (int i = 0; i < arr.length; i++) {
            answer.add(arr[i]);
        }

        for (int i = 0; i < queries.length; i++) {
            int small = queries[i][0];
            int big = queries[i][1];
            int standard = queries[i][2];
            for (int j = small; j <= big; j++) {
                if (j % standard == 0){
                    answer.set(j, answer.get(j) + 1);
                }
            }


        }
        return answer;
    }
}