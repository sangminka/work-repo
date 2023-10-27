package com.example.controllerexam.controller.exam08;

import com.example.controllerexam.model.Member;
import com.example.controllerexam.model.Qna;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : com.example.controllerexam.controller.exam08
 * fileName : ObjectResponseEntitiyController
 * author : GGG
 * date : 2023-10-06
 * description : @PostMapping, @RequestBody , ResponseEntity 클래스 사용
 *      목적 : 프로그램 품질 향상을 위해 사용
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-06         GGG          최초 생성
 */
@RestController
@RequestMapping("/exam08")
public class ObjectResponseEntityController {
//  TODO: ResponseEntity : 객체 : 상수(신호)
//    성공(신호) : HttpStatus.OK (200) : 200 ~ 400 사이 (거의 성공메세지)
//    실패(신호) : HttpStatus.NOT_FOUND (404) : 400번 이상 (거의 실패메세지)
//    사용법 : new ResponseEntity<>(배열[객체], 신호);
//    사용법 : new ResponseEntity<>(신호);
    @PostMapping("/object-body")
    public ResponseEntity<Object> getObgectRequestBody(
            @RequestBody Member member
            ){
        List<Member> list = new ArrayList<>();
        list.add(member);
        return  new ResponseEntity<>(list, HttpStatus.OK);
    }

//  TODO: //    멤버를 아래 결과와 같이 List 에 추가해서 출력해보세요.
//    단 상태 메세지는 OK 메세지를 출력하세요
//    결과 :
//       [
//           {
//               "id": "jang",
//               "name": "장길산"
//           }
//       ]

    @PostMapping("/object-body2")
    public ResponseEntity<Object> getObgectRequestBody2(
            @RequestBody Member member
    ){
        List<Member> list = new ArrayList<>();
        list.add(member);
        return  new ResponseEntity<>(list, HttpStatus.OK);
    }

//  TODO: 연습 문제 2)
//    아래 결과를 보고 QNA 클래스를 정의하고 List 에 추가해서 출력해보세요.
//    단 상태 메세지는 FOUND 메세지를 출력하세요
//    결과 :
//       [
//           {
//               "no": 1,
//               "title": "Qna 제목",
//               "content": "Qna 내용"
//           }
//       ]

    @PostMapping("/object-body3")
    public ResponseEntity<Object> getObgectRequestBody3(
            @RequestBody Qna qna
    ){
        List<Qna> list = new ArrayList<>();
        list.add(qna);
        return  new ResponseEntity<>(list, HttpStatus.FOUND);
    }
}
