package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    public BookService(String name) {
        System.out.println("📦 BookService: Constructed with name: " + name);
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("🛠 BookService: Adding book - " + title);
        bookRepository.save(title);
    }
}
