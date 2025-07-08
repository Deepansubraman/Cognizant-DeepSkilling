package com.library.repository;

public class BookRepository {
    public void save(String bookName) {
        System.out.println("Book '" + bookName + "' saved to the database.");
    }
}
