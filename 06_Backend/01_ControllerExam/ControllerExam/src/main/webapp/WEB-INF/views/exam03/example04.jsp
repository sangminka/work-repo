<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--TODO: jstl 표현식 사용을 위한 import --%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <%-- bootstrap css cdn   --%>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <%-- TODO: 매개변수(파라메터) 배열 전달받아 출력하기 --%>
        <h2>연습 4</h2>
        <p>${title}</p>
        <p>${kind}</p>
        <p>${color}</p>


            <div>
                <c:choose>
                    <c:when test="${title == '아반떼'}">
                        아반떼가 맞습니다.
                    </c:when>
                    <c:otherwise>
                        다른차 입니다.
                    </c:otherwise>
                </c:choose>
            </div>

            <div>
                <c:choose>
                    <c:when test="${color == 'gray'}">
                        회색 입니다
                    </c:when>
                    <c:otherwise>
                        다른색 입니다.
                    </c:otherwise>
                </c:choose>
            </div>

    </div>

</body>
</html>