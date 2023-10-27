package chap06.Sec04.Verify.exam03;

/**
 * packageName : chap06.Sec04.Verify.exam03
 * fileName : MemberService
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class MemberService {
//    멤버변수
    String id = "hong";
    String password = "12345";

//    setter/getter


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPass() {
        return password;
    }

    public void setPass(String pass) {
        this.password = pass;
    }
// 메소드
    Boolean login(String id, String pass) {
        if (id.equals(getId()) && pass.equals(getPass()) == true) {
            return true;
        }else {
            return false;
        }

    }

    Boolean logout(String id){
        System.out.println(getId() + " 로그아웃 되었습니다.");
        return false;
    }

}
