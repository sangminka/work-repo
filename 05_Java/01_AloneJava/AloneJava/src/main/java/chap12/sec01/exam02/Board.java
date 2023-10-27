package chap12.sec01.exam02;

import java.util.Objects;

/**
 * packageName : chap12.sec01.exam02
 * fileName : Board
 * author : GGG
 * date : 2023-09-25
 * description : Board 객체를 저장하는 Vector
 * 요약 :
 *      Vector : 멀티쓰레드 환경에서 사용하는 자료구조, ArrayList 거의 유사
 *              (병렬처리: 속도 향상(장점), 코딩 복잡도 증가(동기화 문제 등))
 *         속도 : ArrayList > Vector
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class Board {
    String subject; //제목

    String content; //내용

    String write; //작성자

//    3개 생성자 : alt + insert
    public Board(String subject, String content, String write) {
        this.subject = subject;
        this.content = content;
        this.write = write;
    }
//    .equals(), .hashCode() 재정의 함수 : alt + insert

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Board board = (Board) o;
        return Objects.equals(subject, board.subject) && Objects.equals(content, board.content) && Objects.equals(write, board.write);
    }

    @Override
    public int hashCode() {
        return Objects.hash(subject, content, write);
    }

//  TODO: 편리성 증진 : 함수 재정의 toString(): 객체를 문자열로 변환하는 함수

    @Override
    public String toString() {
        return "[" + subject + "," + content + "," + write + "]";
    }
}
