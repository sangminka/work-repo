package com.example.modelexam.controller.exam05;

import com.example.modelexam.model.Member;
import com.example.modelexam.service.exam05.Member05Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

/**
 * packageName : com.example.modelexam.controller.exam01
 * fileName : MemberController
 * author : GGG
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
@Slf4j
@Controller
@RequestMapping("/exam05")
public class Member05Controller {

    @Autowired
    Member05Service memberService;

    @GetMapping("/member")
    public String getMemberAll(Model model){

        List<Member> list = memberService.findAll();
        model.addAttribute("list",list);

        log.debug(list.toString());

        return "exam05/member/member_all.jsp";
    }
    
    
    
//    @PostMapping("/member")
//    @ResponseBody
//    public List<Member> createMember(
//            @RequestBody Member member
//    ){
//        List<Member> list = memberService.save(member);
//        return list;
//    }

    @GetMapping("/member/addition")
    public String addMember() {
        return "exam05/member/add_member.jsp";
    }

    @PostMapping("/member/add")
    public RedirectView createMember(@ModelAttribute Member member){
        memberService.save(member);
        return new RedirectView("/exam05/member");
    }

    @GetMapping("/member/edition/{eno}")
    public String editMember(@PathVariable long eno, Model model){

        Member member = memberService.findById(eno);
        model.addAttribute("member",member);
        return "exam05/member/update_member.jsp";
    }

//    TODO: 수정 저장 : 리다이렉트(강제이동) : 전체조회페이지로 이동
    @PutMapping("/member/edit/{eno}")
    public RedirectView updateMember(@PathVariable long eno,
                                     @ModelAttribute Member member){
//        TODO: 수정 저장 함수 호출
        memberService.save(member);
        return new RedirectView("/exam05/member");
    }

}


