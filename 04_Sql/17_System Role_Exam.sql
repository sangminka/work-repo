-- 17_System Role_Exam.sql
-- 사용자 계정 / 권한 연습문제
-- 1) KBS라는 사용자를 생성하세요(암호는 pass)
CREATE USER KBS IDENTIFIED BY pass;
-- 2) 기본적인 권한 부여를 하지 않으면 데이터베이스에 로그인이 불가능하므로,
--    CONNECT,RESOURCE, 롤과 CREATE VIEW 를 KBS 사용자에게 부여하세요
-- 로그인 테스트 : 계정명: kbs , 암호:pass, 서비스명: xepdb1
GRANT CONNECT, RESOURCE, CREATE VIEW TO KBS;

DROP USER KBS;
