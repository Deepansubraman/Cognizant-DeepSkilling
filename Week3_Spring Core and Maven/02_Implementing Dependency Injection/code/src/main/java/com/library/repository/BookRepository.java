package com.library.repository;

public class BookRepository {
    public void save(String title) {
        System.out.println("BookRepository: Saved book - " + title);
    }
}
