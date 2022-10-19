<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%> <!-- entre %@ e % são diretivas da JSP -->
    <%@page import="java.util.Date" %>
<!DOCTYPE html>
<html lang = "pt-br">
<head>
<meta charset="utf-8">
<title>Hello JSP</title>
</head>
<body>
	<h1>Hello JSP</h1>
	<%out.println("Thomas Caron de Castro Deus"); %>
	<%-- Uso do elemento expressão --%>
	<p>Data de hoje: <%=new Date() %>></p>
	<p><%!int contador = 0;%></p>
	<p>visitas: <%=contador++ %></p>
</body>
</html>