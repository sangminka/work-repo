package com.example.modelexam.controller.exam08;

import com.example.modelexam.model.Dept;
import com.example.modelexam.model.Member;
import com.example.modelexam.service.exam08.Member08Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.exam08
 * fileName : Member08Controller
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
@RequestMapping("/exam08")
public class Member08Controller {

    @Autowired
    Member08Service memberService;

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

}
