package chap15.sec01.exam07;

import java.io.FileWriter;
import java.io.Writer;

/**
 * packageName : chap15.sec01.exam07
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
//      TODO : 파일 쓰기용(출력용) 열기(문자기반(char) : 2byte)
//        사용법:Writer 변수 = new FileWriter("파일생성경로")
        Writer writer = new FileWriter("src/main/resources/test7.txt");
//      TODO: 파일에 쓸 변수
        char a = 'A';
        char b = 'B';
        char c = 'C';
//      TODO: 파일 쓰기
        writer.write(a);
        writer.write(b);
        writer.write(c);
//      TODO: 임시버퍼 -> 진짜 파일 쓰기
        writer.flush();
        writer.close(); // 파일닫기
    }
}
