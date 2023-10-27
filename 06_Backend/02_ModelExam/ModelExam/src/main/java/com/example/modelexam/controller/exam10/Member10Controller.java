package com.example.modelexam.controller.exam10;

import com.example.modelexam.model.Member;
import com.example.modelexam.service.exam10.Member10Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.exam10
 * fileName : Member10Controller
 * author : GGG
 * date : 2023-10-11
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-11         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/exam10")
public class Member10Controller {

    @Autowired
    Member10Service memberService;

    @GetMapping("/member")
    public ResponseEntity<Object> getMemberAll(){
        try {
            List<Member> list = memberService.findAll();
            if (list.isEmpty() == false){
                return new ResponseEntity<>(list,HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT );
            }
        }catch (Exception e){
            log.debug(e.getMessage());

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/member/{eno}")
    public ResponseEntity<Object> getMemberId(
            @PathVariable long eno
    ){
        try{
            Optional<Member> optionalDept = memberService.findById(eno);
            if (optionalDept.isEmpty() == false){
//                TODO: 조회 성공
                return new ResponseEntity<>(optionalDept.get(),HttpStatus.OK);
            }else {
//                TODO: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT );
            }
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/member")
    public ResponseEntity<Object> createMember(
            @RequestBody Member member){
        try{
            List<Member> list = memberService.save(member);
            return new ResponseEntity<>(list,HttpStatus.CREATED);
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500) : sql 구문 에러 등
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/member/edit/{eno}")
    public ResponseEntity<Object> updateMember(
            @PathVariable int eno,
            @RequestBody Member member){
        try{
            List<Member> list = memberService.save(member);
            return new ResponseEntity<>(list,HttpStatus.CREATED);
        }catch (Exception e){
            log.debug(e.getMessage());
//            TODO: INTERNAL_SERVER_ERROR(500) : sql 구문 에러 등
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
