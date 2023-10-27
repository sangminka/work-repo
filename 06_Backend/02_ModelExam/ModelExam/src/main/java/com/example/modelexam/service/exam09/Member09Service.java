
package com.example.modelexam.service.exam09;

import com.example.modelexam.dao.MemberDao;
import com.example.modelexam.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
public class Member09Service {

    @Autowired
    MemberDao memberDao;

    public List<Member> findAll() {
        List<Member> list = memberDao.selectAll();

        return list;
    }

    public Optional<Member> findById(long eno) {
//      todo: 상세조회(1건조회)
        Member member = memberDao.selectById(eno);

        Optional<Member> optionalMember = Optional.ofNullable(member);

        return optionalMember;
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

    public boolean removeById(int eno){
        int iCount = memberDao.deleteById(eno);

        return (iCount > 0) ? true : false;


    }
}