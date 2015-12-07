<%@page import="java.util.Date"%>
<%@page import="com.Main"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

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
<p>
<%=Main.getTestData()%>
<br/><br/>
Time :
<%=new Date()%>
