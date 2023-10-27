
package com.example.modelexam.service.exam05;

import com.example.modelexam.dao.MemberDao;
import com.example.modelexam.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.modelexam.service.exam01
 * fileName : MemberService
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
@Service
public class Member05Service {

    @Autowired
    MemberDao memberDao;

    public List<Member> findAll() {
        List<Member> list = memberDao.selectAll();

        return list;
    }

    public Member findById(long eno) {
//      todo: 상세조회(1건조회)
        Member member = memberDao.selectById(eno);

        return member;
    }



    public List<Member> save(Member member){
        List<Member> list =null;

        if (member.getEno() == null ){
            int count = memberDao.selectAll().size();
            int newEno = (count + 1) * 10;
            member.setEno((newEno));
            list = memberDao.insert(member);
        }else{
            list = memberDao.update(member);
        }
        return list;
    }
}