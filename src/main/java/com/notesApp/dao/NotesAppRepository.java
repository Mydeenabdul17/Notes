package com.notesApp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.notesApp.dto.Note;

public class NotesAppRepository {
	private static NotesAppRepository repository;
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("mydeen");

	private NotesAppRepository() {
		
	}
	
	public static NotesAppRepository getInstance() {
		if(repository == null) {
			repository = new NotesAppRepository();
		}
		return repository;
	}

	public void addNote(Note n) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction et = em.getTransaction();
		
		et.begin();
		em.persist(n);
		et.commit();
	}

	public List getAllNotes() {
		EntityManager em = emf.createEntityManager();
		Query q = em.createQuery("select n from Note n");
		return q.getResultList();
	}

	public void updateNote(String id, Note note) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction et = em.getTransaction();
		
		Note n = em.find(Note.class, Integer.parseInt(id));
		n.setTitle(note.getTitle());
		n.setContent(note.getContent());
		n.setLastUpdate(note.getLastUpdate());
		
		et.begin();
		em.merge(n);
		et.commit();
	}

	public void deleteNote(int id) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction et = em.getTransaction();
		
		Note n = em.find(Note.class, id);
		if(n!=null) {
			et.begin();
			em.remove(n);
			et.commit();
		}
	}
}
