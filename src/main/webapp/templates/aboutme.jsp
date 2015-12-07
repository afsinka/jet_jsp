<%@page import="java.util.Date"%>
<%@page import="com.Main"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>
<body>
	<h1>AboutMe</h1>

	<button id="myButton" data-bind="click: myClick">Click Me!</button>
	<div id="myDiv"></div>

	<div align="center" style="margin-top: 50px;">
		<form action="MyServlet" method="post">
			Username: <input type="text" name="username" size="20px"> <br>
			Password: <input type="text" name="password" size="20px"> <br>
			<br> <input type="submit" value="submit">
		</form>
	</div>

	Backend says:
	<br /> 
	<%=Main.getTestData()%>
	<br /> Time :
	<%=new Date()%>

</body>
</html>