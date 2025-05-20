CREATE DATABASE IF NOT EXISTS electricity;
USE electricity;

-- Create consumer table
CREATE TABLE IF NOT EXISTS consumer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Create billing table
CREATE TABLE IF NOT EXISTS billing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consumer_id INT NOT NULL,
    units INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (consumer_id) REFERENCES consumer(id)
);
