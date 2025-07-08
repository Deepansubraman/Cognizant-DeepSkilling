package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    // Constructor Injection
    public BookService(String name) {
        System.out.println("📦 BookService: Constructed with name: " + name);
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("🛠 BookService: Adding book - " + title);
        bookRepository.save(title);
    }
}
