package com.bookstore.book.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookstore.book.Entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book,Integer> {
}
