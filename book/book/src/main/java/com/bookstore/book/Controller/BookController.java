package com.bookstore.book.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.book.Entity.Book;
import com.bookstore.book.Repository.BookRepository;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:5173")
public class BookController {

    BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books")
    public List<Book> getMethodName() {
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public String postMethodName(@RequestBody Book book) {
        bookRepository.save(book);
        return "Insertion Successfull";
    }

}
