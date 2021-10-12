-- SQL Script for libnary database
CREATE TABLE users (
	id SERIAL NOT NULL,
	username varchar(50) NOT NULL,
	name varchar(50) NOT NULL,
	passhash varchar(512) NOT NULL,
	
	PRIMARY KEY (id)
);
CREATE TABLE authors (
	id SERIAL NOT NULL,
	author varchar(50) NOT NULL,

	PRIMARY KEY (id)

);
CREATE TABLE books (
	id SERIAL NOT NULL,
	author_id int NOT NULL,
	title varchar(50) NOT NULL,
	ISBN varchar(50) NOT NULL, 
    copies int, 
	
	PRIMARY KEY (id),
	FOREIGN KEY (author_id) REFERENCES authors(id)
);
CREATE TABLE loans (
	id SERIAL NOT NULL,
	user_id int NOT NULL,
	book_id int NOT NULL,
	due_date date NOT NULL,
	
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (book_id) REFERENCES books(id)
);
