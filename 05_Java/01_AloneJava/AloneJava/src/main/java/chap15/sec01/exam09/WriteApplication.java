package chap15.sec01.exam09;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

/**
 * packageName : chap15.sec01.exam09
 * fileName : WriteApplication
 * author : GGG
 * date : 2023-09-27
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class WriteApplication {
    public static void main(String[] args) throws Exception {
//      TODO:  파일 열기(문자기반)
        Writer writer = new FileWriter("src/main/resources/test9.txt");

//      TODO: 배열 정의
        char[] array = {'A','B','C','D','E'};

//      TODO: 일부만 파일에 쓰기
        writer.write(array,1,3);
//      TODO: 임시버퍼 : 진짜 파일에 쓰기
        writer.flush();
        writer.close();
    }
}
