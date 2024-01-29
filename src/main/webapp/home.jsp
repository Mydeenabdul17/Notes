<%@page import="java.util.List"%>
<%@page import="com.notesApp.dto.Note"%>
<%@page import="java.time.LocalTime"%>
<%@page import="org.json.JSONObject" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="./home.css">
</head>
<body>
<%
List<Note> notes = (List<Note>) request.getAttribute("notes");
%>
<div id="left">
        <form action="#" method="get"> 
            <label for="search">Search:</label>
            <input type="search" id="search" name="search">
        </form>
        <div id="notesLable">
        <%if(notes!=null){
        	for(Note n:notes){
        	LocalTime time = n.getLastUpdate();
        	String update = n.getLastUpdate().getHour()%12+":"+(n.getLastUpdate().getMinute()<10?"0"+n.getLastUpdate().getMinute():""+n.getLastUpdate().getMinute())+" "+(n.getLastUpdate().getHour()/12==0?"am":"pm");
        	int hour = n.getLastUpdate().getHour()%12;
        	String min = n.getLastUpdate().getMinute()<10?"0"+n.getLastUpdate().getMinute():""+n.getLastUpdate().getMinute();
        	String isNoon = n.getLastUpdate().getHour()/12==0?"am":"pm";%>
            <button class="note" onclick="loadNote('<%= n.getTitle() %>', '<%= n.getContent() %>','<%=update%>','<%= n.getId() %>')">
                <div>
                    <h3><%=n.getTitle() %></h3>
                    <h5><%=n.getContent().substring(0, 5)+"..." %></h5>
                    <h6><%="Edited"+hour+":"+min+" "+isNoon %></h6>
                </div>
            </button>
            <%}}else{ %>
            <div>no record found</div>
            <%} %>
        </div>
    </div>
    <div id="content">
    <div id="title">
        <label for="noteTitle">Title:</label>
        <input type="text" id="noteTitle" name="noteTitle">
    </div>
    <div>
        <label for="noteContent">Content:</label>
        <div id="noteContent" contenteditable="true"></div>
        <div id="modificationButtons">
                <button class="toolbar-button" onclick="document.execCommand('bold', false, null)">Bold</button>
                    <button class="toolbar-button" onclick="document.execCommand('italic', false, null)">Italic</button>
                    <button class="toolbar-button" onclick="document.execCommand('underline', false, null)">Underline</button>
                    <button class="toolbar-button" onclick="document.execCommand('strikethrough', false, null)">Strike Through</button>
        </div>
    </div>
    <button id="delete">delete</button>
    <button id="save">save</button>
</div>
<div id="info">
        <!-- <h2>Info</h2>
        <h4 id="fileName">File Name: Demo</h4>
        <h4 id="wordCount">Word Count: 30</h4>
        <h4 id="lastEdited">Last Edited: 3:30 pm</h4> -->
    </div>
    <script type="text/javascript" src="home.js"></script>
</body>
</html>