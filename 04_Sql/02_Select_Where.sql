-- 파일명 : 02_Select_Where.sql
-- 데이터를 조건을 붙여 조회하기
-- 1) 비교연산자로 조건문 사용하기
-- 예제 1) 월급(SALARY)이 1500 이상인 사원(EMPLOYEE) 조회하기
-- 사용법 : SELECT 컬럼명,컬럼명2... FROM 테이블명
--         WHERE 조건절(컬럼명 > 값)
-- 비교연산자 : > , < , <=, =(같다), <>(같지않다)
SELECT ENAME,SALARY FROM EMPLOYEE
WHERE SALARY >1500;

-- 예제 2) 10번 부서의 소속 사원을 출력하세요
-- 사원 테이블 : EMPLOYEE
-- 부서번호 : DNO
SELECT *FROM EMPLOYEE
WHERE DNO = 10;

-- 예제 3) 사원명(ENAME) 이 SCOTT 사원을 출력하세요( 전체출력 )
-- 사원 테이블 : EMPLOYEE
-- 힌트) SQL 문자열 : '문자열' (홑따옴표)
SELECT * FROM EMPLOYEE
WHERE ENAME = 'SCOTT';

-- 예제 4) 입사일(FIREDATE) 이 '1981/01/01' 이전인 사원만 출력하기
-- 힌트) 문자열 비교 (비교연산자 : > , <)
SELECT * FROM EMPLOYEE
WHERE HIREDATE <= '1981/01/01';

-- 2) 논리 연산자와 함께 조건절 사용하기
-- 논리연산자 (AND, OR, NOT)
-- 예제 5) 부서번호(DNO) 가 10이고 직급이(JOB)이 'MANAGER' 사원을 출력하세요
SELECT * FROM EMPLOYEE
WHERE (DNO = 10) AND (JOB = 'MANAGER');

-- 연습1) 급여가(SALARY)1000 과 1500 사이의 사원 조회하기(전체 조회)
-- 사원 : EMPLOYEE
SELECT * FROM EMPLOYEE
WHERE SALARY >= 1000
AND SALARY <= 1500;

-- 예제 6) 부서번호(DNO)가 10이거나(OR) 직급이 'MANAGER'인 사원만 출력하기
SELECT * FROM EMPLOYEE
WHERE DNO = 10
OR    JOB = 'MANAGER';

-- 예제 7) 10번 부서에 소속된 사원을 제외하고 나머지 사원 출력하기
SELECT * FROM EMPLOYEE
WHERE DNO <> 10;

-- 연습 2) 급여가(SALARY) 1000 미만이거나 1500 초과인 사원 출력하기
-- EMPLOYEE
SELECT * FROM EMPLOYEE
WHERE SALARY < 1000
OR SALARY > 1500;

-- 연습 3) 커미션(COMMISSION)이 300이거나 500 이거나 1400인 사원 출력하기
SELECT * FROM EMPLOYEE
WHERE COMMISSION = 300
OR COMMISSION = 500
OR COMMISSION = 1400;

-- 3) BETWEEN 예약어 소개
-- 예제 8) 급여가 1000 과 1500 사이의 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE SALARY >= 1000
AND   SALARY <= 1500;

-- BETWEEN 사용
-- 사용법) SELECT 컬러명 FROM 테이블명 BETWEEN 최소값 AND 최대값;
-- 사용처 : 작은값 ~ 큰값 사이의 결과 조회하기 할때 사용
SELECT * FROM EMPLOYEE
WHERE   SALARY BETWEEN 1000 AND 1500;

-- NOT BETWEEN
-- 예제 9) 급여가 1000미만 이거나 1500 초과인 사원 조회하기
-- 사원 : EMPLOYEE
SELECT * FROM EMPLOYEE
WHERE SALARY < 1000
OR    SALARY > 1500;

-- NOT BETWEEN
SELECT * FROM EMPLOYEE
WHERE SALARY NOT BETWEEN 1000 AND 1500;

-- 연습3) 1982년에 입사한(HIREDATE 사원 조회하기
-- 단 BETWEEN ~ AND 사용해서 작성하세요
-- 사원 : EMPLOYEE
SELECT * FROM EMPLOYEE
WHERE HIREDATE BETWEEN '1982/01/01' AND '1982/12/31';

-- 4) in 예약어
-- 예제 10) 상여금(COMMISSION) 300 이거나 500 이거나 1400인 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE COMMISSION = 300
OR    COMMISSION = 500
OR    COMMISSION = 1400;

-- 사용법) SELECT 컬럼명 FROM 테이블명 WHERE 컬럼명 IN (값1,값2,...);
-- 사용처: OR로 연결된 데이터를 간단하게 사용가능
SELECT * FROM EMPLOYEE
WHERE COMMISSION IN(300,500,1400);

-- NOT IN 사용
--예제 11) 상여금(COMMISON) 300이 아니고 500이 아니고 1400 아닌 사원 조회하기
SELECT * FROM EMPLOYEE
WHERE COMMISSION NOT IN(300,500,1400);

-- 5) LIKE 검색(*****)
-- 정의 : 일부 키워드(영문자, 한글)만 사용해서 비슷한 것들만 추려서 조회하기
-- 예제 12) 이름이 'F' 로 시작하는 사원 조회하기
-- 사원 : EMPlOYEE
-- 대상 컬럼 : ENAME
-- 사용법) SELECT * FROM EMPLOYEE WHERE ENAME LIKE '키워드%'
-- % : 키워드를 제외한 문자들
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE 'F%';

-- 연습 4) 이름에 "M"이 포함되어 있는 사원 조회 하기
-- 사원 EMPLOYEE
-- 사원명 ENAME
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%M%';

-- 연습5) 이름이 'N' 으로 끝나는 사원 조회하기(전체 조회)
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '%N';

-- 예제 13)이름의 두번째 글자가 'A'인 사원 조회하기
-- LIKE 기호 :%(키워드를 제외한 어떤 문자열을 의미)
--           _ (키워드를 제외한 어떤 한문자를 의미)
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '_A%';

-- 연습 6)이름의 세번째 글자가 'A' 인 사원 조회하기
-- 사원 EMPLOYEE
-- 사원명 ENAME
SELECT * FROM EMPLOYEE
WHERE ENAME LIKE '__A%';

-- 예제 14) IN,BETWEEN 의 반대를 나타낼때 NOT 앞에 붙여서 사용했음
-- LIKE 의 반대를 나타낼때 똑같이 사용할 수 있음 : NOT LIKE
-- 사원 EMPLOYEE
-- 사원명 ENAME
SELECT * FROM EMPLOYEE
WHERE ENAME NOT LIKE '%A%';

-- 6) NULL 검색 (조회)
-- 예제 15) 상여금 COMMISSION 이 NULL인 사원을 조회하세요
-- NULL의 특징 : 연산/비교 모든것이 안됨 -> 결과는 NULL
-- 예약어 : NULL 조회시 : WHERE 컬럼명 IS NULL
-- 사원 EMPLOYEE
-- 상요금 COMMISSION
SELECT * FROM EMPLOYEE
WHERE COMMISSION = NULL; -- 안됨 오류
-- 수정
SELECT * FROM EMPLOYEE
WHERE COMMISSION IS NULL; -- 정상

-- IN, BETWEEN, LIKE 의 반대는 앞에 NOT
-- IS NOT NULL 있음 (NULL 값을 가지지 않은 사람)
-- 상여금(COMMISSION)에 NULL이 아닌 사람을 조회하ㅔㅅ요
SELECT * FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;

-- 7) ODERR BY : 정렬 기능
-- 예제 16) 사원테이블을(EMPLOYEE) 오름차순으로 정렬하기
-- 단 월급으로(SALARY) 정렬하세요
-- 오름차순(ASCENDING) : 작은 순부터 큰 순으로 정렬
-- 사용법)SELECT 걸럼명 FROM 테이블명 ORDER BY 정렬대상_컬럼명 ASC; -- ASC(생략가능)
-- 참고) 이 기능을 사용하면 성능이 대폭 저하
SELECT * FROM EMPLOYEE
ORDER BY SALARY ASC; -- ASC(오름차순, 생략가능)

-- 사원테이블을(EMPLOYEE) 내림차순으로 정렬하기
-- 단 월급으로(SALARY) 정렬하세요
-- 내림차순(DESCENDING) : 큰 순부터 작은순으로 정렬
-- 사용법)SELECT 걸럼명 FROM 테이블명 ORDER BY 정렬대상_컬럼명 DESC; -- DESC(생략불가)
SELECT * FROM EMPLOYEE
ORDER BY SALARY DESC; -- ASC(오름차순, 생략가능)

-- 연습 7) 사원 테이블에서(EMPLOYEE) 사원명(ENAME) 오름차순으로 정렬해서 조회하세요
-- 사원 : EMPLOYEE
SELECT * FROM EMPLOYEE
ORDER BY ENAME;
-- 연습 8 입사일(HIREDATE) 데이터로 내림차순 정렬하세요
-- 사원 : EMPLOYEE
SELECT * FROM EMPLOYEE
ORDER BY HIREDATE DESC;
-- 연습 9) 사원테이블(EMPLOYEE) 급여는(SALARY) 내림차순으로 정렬하고,
--        사원명은(ENAME) 오름차순으로 정렬하세요
-- 힌트) ORDER BY 컬럼명 DESC[ASC],컬럼명2 DESC[ASC]
SELECT *FROM EMPLOYEE
ORDER BY SALARY DESC, ENAME ASC