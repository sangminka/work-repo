<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<%-- TODO: header.jsp --%>
<jsp:include page="../../common/header.jsp"/>

<%--TODO : 본문--%>
<div class="container">
    <h3>전달 받은 객체는 ${list} 입니다.</h3>

    <%--    TODO: 테이블 형태로 화면 출력--%>
    <table class="table">
        <thead>
        <tr>
            <th scope="row">ID</th>
            <td>name</td>
            <td>직업</td>
            <td>매니저</td>
            <td>등록일자</td>
            <td>수정일자</td>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="data" items="${list}">
            <tr>
                <td>${data.eno}</td>
                <td>${data.ename}</td>
                <td>${data.job}</td>
                <td>${data.manager}</td>
                <td>${data.insertTime}</td>
                <td>${data.updateTime}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

</div>

<script>
    let obj = "${list}";
    console.log(obj);
</script>
<%-- TODO: footer.jsp--%>
<jsp:include page="../../common/footer.jsp"/>

</body>
</html>