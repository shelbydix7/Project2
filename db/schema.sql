
CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE register
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(250) NOT NULL,
	gender varchar(250) NOT NULL,
	password varchar(250) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE userLogin
(
	id int NOT NULL AUTO_INCREMENT,
	password varchar(250) NOT NULL,
	PRIMARY KEY (id)
)





