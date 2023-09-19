-- 05_Group_Func.sql
-- 그룹 함수 : 데이터 집계 함수들(총액, 평균, 최고, 최저액,총개수)
-- 사용법 SUM(컴럼명), AVG(컴럼명), MAX(컴럼명), MIN(컴럼명),COUNT(컴럼명)
-- 예제1) 사원들의 급여 총액, 평균액, 최고액 ,최소액 출력하기
SELECT SUM(SALARY) AS 총액
      ,ROUND(AVG(SALARY)) AS 평균
      ,MAX(SALARY) AS 최고액
      ,MIN(SALARY) AS 최저액
FROM EMPLOYEE;

--예제 1) 최근에 입사한 사원가 가장 오래전에 입사한 사원의 입사일 출력하기

SELECT MAX(HIREDATE),MIN(HIREDATE) FROM EMPLOYEE;

-- 예제2) 사원들의(EMPLOYEE) 상여금(COMMISION) 총액 출력하기
SELECT SUM(COMMISSION) FROM EMPLOYEE;

-- 예제3) 사원들의(EMPLOYEE) 총인원을 출력하세요
SELECT COUNT(*) AS 사원수
FROM EMPLOYEE;

-- 예제4) 상여금(COMMISSION)을 받는 사원의 수 계산하기
-- COMMISSION 컬럼 NULL 있음(상여금 못받음)
-- 집계함수는 자동으로 NULL 제외하고 계산
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE;

-- 예제5) NOT NULL 인 데이터만 계산하기
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;

-- 전체 집계 함수 특징 : 1) 1건이 결과로 나옴
--                     2) 일반 컬럼과 같이 사용할 수 없음 : 에러 발생

-- 예제 6) 직위의(JOB) 종류가 몇개인지 출력하기
-- 사원 : EMPLOYEE
-- DISTINCT : 중복제거 키워드
-- 사용법) COUNT(DISTINCT 컬럼명)
-- 컬럼별칭(*): 컬럼명 AS 별칭
-- 테이블별칭(*) :테이블명 별칭( 사용: 별칭.컴럼명)
SELECT COUNT(DISTINCT EMP.JOB) AS 직업개수
FROM EMPLOYEE EMP;

-- 전체 집계 함수 특징 : 1) 1건이 결과로 나옴
--                     2) 일반 컬럼과 같이 사용할 수 없음 : 에러 발생
 SELECT ENAME, MAX(SALARY)
FROM EMPLOYEE; -- 에러 ( 일반컬럼(ENAME),MAX(SALARY) 같이 사용 못함)

-- 2) 부분(컬럼별) 집계 하기 : GROUP BY (예약어)
-- 사용법) GROUP BY 컬럼명,컬럼명2...
-- 예제 7) 소속 부서별 (DNO) 평균 급여를 부서번호와 함께 출력하세요.
-- TRUNC() : 버림(==절삭)
SELECT DNO 
    ,TRUNC(AVG(SALARY)) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO; -- 부서번호 컬럼별 집계

-- 주의점1) 그룹함수와 일반컬럼은 같이 사용할 수 없음
--         (단, 컬럼별 집계에서 그 컬럼별은 그룹함수와 같이 사용할 수 있음)

SELECT DNO , ENAME
    ,TRUNC(AVG(SALARY)) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO; -- 에러: GROUP BY 대상 컬럼이 아니므로 ENAME 그룹함수와 같이 출력할 수 없음

-- 예제8) 부서번호별(DNO), 직위별(JOB) 데이터건수(COUNT) 및 급여 (SALARY) 총액(SUM) 구하기
-- 사원 : EMPLOYEE
-- 힌트 : GROUP BY 사용
SELECT DNO,JOB,SALARY,SUM(SALARY),COUNT(*) AS "데이터 건수"
FROM EMPLOYEE
GROUP BY DNO,JOB,SALARY;

-- GROUP BY 사용시 조건을 추가 : HAVING 키워드 (그룹함수에만 사용함)
-- 사용법) HAVING 그룹함수(컬럼명) > 값
-- 예제 9) 부서번호별(DNO) 최고급여가 3000 이상인 부서의 번호(DNO)와
--        최고금액 구하기
SELECT DNO,MAX(SALARY)
FROM EMPLOYEE
GROUP BY DNO
HAVING MAX(SALARY) >=  3000;

-- 연습 1) 

SELECT JOB,SUM(SALARY)
FROM EMPLOYEE
WHERE JOB <> 'MANAGER'
GROUP BY JOB
HAVING SUM(SALARY) > 5000;