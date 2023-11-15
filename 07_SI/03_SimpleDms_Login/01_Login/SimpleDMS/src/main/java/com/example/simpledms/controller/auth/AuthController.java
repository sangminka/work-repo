package com.example.simpledms.controller.auth;

import com.example.simpledms.model.dto.auth.request.UserReq;
import com.example.simpledms.model.dto.auth.response.UserRes;
import com.example.simpledms.model.entity.auth.ERole;
import com.example.simpledms.model.entity.auth.User;
import com.example.simpledms.security.jwt.JwtUtils;
import com.example.simpledms.security.services.UserDetailsImpl;
import com.example.simpledms.service.admin.CodeService;
import com.example.simpledms.service.auth.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * packageName : com.example.simpledms.controller.auth
 * fileName : AuthController
 * author : GGG
 * date : 2023-11-14
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-14         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    //    인증/권한체크 관리 객체
    @Autowired
    AuthenticationManager authenticationManager; // DI

    //    웹토큰 객체
    @Autowired
    JwtUtils jwtUtils; //DI

    //    패스워드 암호화 객체
    @Autowired
    PasswordEncoder encoder; // DI


    //    유저 서비스
    @Autowired
    UserService userService; // DI

    //
    @Autowired
    CodeService codeService;
    //    로그인 함수( 조회 : post 방식 전송(보안)
    @PostMapping("/signin")
    public ResponseEntity<Object> login(@RequestBody UserReq userReq) {
        try {
//            1) 인증관리자가 인증 시작 : Id(email) / Pwd 로 db에 있는지 조사
//            authentication : 인증을 통과한 객체(id/pwd,유저명, 인증여부 = true)
            Authentication authentication = authenticationManager.authenticate(
                    // 아이디와 패스워드로, Security 가 알아 볼 수 있는 token 객체로 생성해서 인증처리
                    new UsernamePasswordAuthenticationToken(userReq.getEmail(), userReq.getPassword()));

//            2) 인증된 객체들을 홀더(필통)에 저장해둠
            SecurityContextHolder.getContext().setAuthentication(authentication);

//            3) JWT(웹토큰) 발행(생성)
//            웹토큰 구조 : 유저id/디지털 서명
            String jwt = jwtUtils.generateJwtToken(authentication);

//            4) 인증된 객체(authentication : 유저 및 환경정보)
//            => authentication.getPrincipal() : 순수한 유저정보(UserDetailsImpl :id/pwd/권한)
            UserDetailsImpl userDetails
                    = (UserDetailsImpl) authentication.getPrincipal();

//            5) 리엑트 전송 : 웹토큰 + id(email) + 유저명 + 권한
//            5-1) 권한을 임시 변수에(codeName) 저장
            String codeName = userDetails.getAuthorities().toString();

//            결과 전송을 위한 DTO : UserRes 객체
            UserRes userRes = new UserRes(
                    jwt, // 웹토큰
                    userDetails.getEmail(), // id(email)
                    userDetails.getUsername(),// 유저명
                    codeName
            );
            return new ResponseEntity<>(userRes, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
//            INTERNAL_SERVER_ERROR 500번 -> 리엑트 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> createUser(@RequestBody UserReq userReq) {
        try {
//            1) 요청된 유저객체가 DB에 id(email) 있는 지 확인
            if (userService.exisisById(userReq.getEmail())) {
                return ResponseEntity
                        .badRequest()
                        .body("에러 : 이메일이 이미 있습니다.");
            }

//            2) 신규 유저 생성 : 권한 없음

            User user = new User(
                    userReq.getEmail(),     // id 이메일
//                  todo: encoder.encode(패스워드) -> 암호화된 패스워드
                    encoder.encode(userReq.getPassword()), //패스워드(암호화)
                    userReq.getUsername()   // 유저명
            );

//            3) 일단 리엑트에서 요청한 권한 있는지 조사
            String codeName = userReq.getCodeName(); // 요청 권한 가져오기

//            임시 상태 체크 변수
            boolean bResult = false;

//            4) CodeName(리엑트 요청권한) 없으면 ROLE_USER 권한으로 신규 유저 생성
            if (codeName == null) {
                bResult = codeService.existsByCodeName(ERole.ROLE_USER.name());
//                에러 처리
                if (!bResult) {
                    new RuntimeException("Error: Role is not found.");
                }
                user.setCodeName(ERole.ROLE_USER.name());
            } else {
//              5) CodeName(리엑트 요청권한) 있으면 ROLE_USER 권한으로 신규 유저 생성
                switch (codeName) {
//                    5-1) 리엑트 요청권한이 ROLE_ADMIN 이라면 그 권한을 신규 유저에 저장
                    case "ROLE_ADMIN":
                        bResult = codeService.existsByCodeName(ERole.ROLE_ADMIN.name());
//                에러 처리
                        if (!bResult) {
                            new RuntimeException("Error: Role is not found.");
                        }
                        user.setCodeName(ERole.ROLE_ADMIN.name()); // 관리자 권한 수정

                        break;
//                     5-2) 리엑트 요청권한이 ROLE_ADMIN 이 아니라면 ROLE_USER 권한을 신규 유저에 저장
                    default:
                        bResult = codeService.existsByCodeName(ERole.ROLE_USER.name());
//                에러 처리
                        if (!bResult) {
                            new RuntimeException("Error: Role is not found.");
                        }
                        user.setCodeName(ERole.ROLE_USER.name());
                }
                ;
            }

            userService.save(user);

            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);


        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
