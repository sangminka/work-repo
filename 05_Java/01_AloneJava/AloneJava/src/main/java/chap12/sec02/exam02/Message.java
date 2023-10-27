package chap12.sec02.exam02;

/**
 * packageName : chap12.sec02.exam02
 * fileName : Message
 * author : GGG
 * date : 2023-09-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class Message {
    //  TODO: 속성
    public String command; // 명령어
    public String to;      // 누구?
    //  TODO: 생성자 2개
    public Message() {
    }

    public Message(String command, String to) {
        this.command = command;
        this.to = to;
    }
}
