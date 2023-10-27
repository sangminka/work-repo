package chap12.sec02.exam02;

import java.util.LinkedList;
import java.util.Queue;

/**
 * packageName : chap12.sec02.exam02
 * fileName : MessageApplication
 * author : GGG
 * date : 2023-09-26
 * description : 큐 예제 소개
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class MessageApplication {
    public static void main(String[] args) {
//        큐(인터페이스) 객체 생성
        Queue<Message> messagesQueue = new LinkedList<>();

//        TODO: 큐에 자료 저장: .offer(값) 또는 .add(값)

        messagesQueue.offer(new Message("sendMail","홍길동"));
        messagesQueue.offer(new Message("sendSMS","신용권"));
        messagesQueue.offer(new Message("sendKakao","홍두깨"));

//        TODO: 꺼내기 : .poll() 또는

         while (messagesQueue.isEmpty() == false){
             Message message = messagesQueue.poll(); // 1st 꺼내기
             System.out.println(message.to);        //보낼사람 이름
         }
    }
}
