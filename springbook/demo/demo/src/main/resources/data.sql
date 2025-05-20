CREATE DATABASE IF NOT EXISTS bookstore_spring;
USE bookstore_spring;

CREATE TABLE IF NOT EXISTS book (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO book (title, author, price, description, image_url) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 9.99, 'A story of decadence and excess.', 'https://via.placeholder.com/200x300'),
('To Kill a Mockingbird', 'Harper Lee', 12.99, 'A classic of modern American literature.', 'https://via.placeholder.com/200x300'),
('1984', 'George Orwell', 10.99, 'A dystopian social science fiction novel.', 'https://via.placeholder.com/200x300');
