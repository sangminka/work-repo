package com.example.controllerexam.controller.exam06;

import com.example.controllerexam.model.Board;
import com.example.controllerexam.model.Dept;
import com.example.controllerexam.model.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * packageName : com.example.controllerexam.controller.exam06
 * fileName : MultiPathRestController
 * author : GGG
 * date : 2023-10-06
 * description : @PathVariable, @RestController
 * 요약 :
 *      @Controller : jsp 개발 시 사용
 *          => return 값 : 이동할 jsp 페이지명
 *      @RestController : react / vue 연동 개발시 사용
 *         => return 값 : json 데이터로 출력됨 : {속성:값}
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-06         GGG          최초 생성
 */
@RestController
@RequestMapping("/exam06")
public class MultiPathRestController {
    //  TODO: http://localhost:8000/exam06/multi-path-rest/id/hong/name/홍길동
    @GetMapping("/multi-path-rest/id/{id}/name/{name}")
    public Member getMultiPath(
            @PathVariable String id,
            @PathVariable String name
    ){
//             멤버 객체 생성
        Member member = new Member(id,name);
//        결과 json 데이터로 전송
        return member;

    }
    //  TODO: 연습 1) 부서 클래스의 속성에 아래와 같이
//         데이터를 저장해서 화면에 출력해 보세요.
//    결과 :
//      {
//          "dno": 10,
//          "loc": "Seoul",
//          "dname": "Sales"
//      }
    @GetMapping("/multi-path-rest/dno/{dno}/loc/{loc}/dname/{dname}")
    public Dept getMultiPath(
            @PathVariable int dno,
            @PathVariable String loc,
            @PathVariable String dname
    ){
        Dept dept = new Dept(dno,dname,loc);
        return dept;

    }


    @GetMapping("/multi-path-rest/no/{no}/title/{title}/content/{content}/count/{count}")
    public Board getMultiPath(
            @PathVariable int no,
            @PathVariable String count,
            @PathVariable String title,
            @PathVariable String content
    ){
        Board board = new Board(no, title, content, count);
        return board;
    }

}
