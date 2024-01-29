package com.notesApp.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.time.LocalTime;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.notesApp.dao.NotesAppRepository;
import com.notesApp.dto.Note;

@WebServlet("/delete")
public class Delete extends HttpServlet{

	NotesAppRepository repository = NotesAppRepository.getInstance();
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
	        // Get JSON data from request
	        StringBuilder requestBody = new StringBuilder();
	        BufferedReader reader = req.getReader();
	        String line;
	        while ((line = reader.readLine()) != null) {
	            requestBody.append(line);
	        }
	        
	        // Parse JSON data
	        Gson gson = new Gson();
	        JsonObject jsonObject = gson.fromJson(requestBody.toString(), JsonObject.class);
	        
	        // Get title and content
	        String id = jsonObject.get("id").getAsString();
	        
	        // Create and save the note
//	        Note note = new Note();
//	        note.setTitle(title);
//	        note.setContent(content);
//	        note.setLastUpdate(LocalTime.now());
//	        repository.updateNote(id,note);
	        repository.deleteNote(Integer.parseInt(id));
	        // Redirect or send response
	        resp.sendRedirect(req.getContextPath() + "/home"); // Redirect to GET method
	    } catch (Exception e) {
	        // Handle exceptions
	        e.printStackTrace();
	        resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	        resp.getWriter().write("Internal Server Error");
	    }
	}

	
}
