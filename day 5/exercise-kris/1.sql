CREATE DATABASE purwadhika_student;
CREATE DATABASE purwadhika_schedule; 
CREATE DATABASE purwadhika_branch;

SHOW DATABASES LIKE 'purwadhika%';

DROP DATABASE purwadhika_schedule;

USE purwadhika_student;

CREATE TABLE STUDENTS (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
last_name varchar(30) not null, 
first_name varchar(30), 
address varchar(255) not null, 
city varchar(255) not null,
PRIMARY KEY (ID)
);
CREATE INDEX idx_students ON STUDENTS (id);

ALTER TABLE STUDENTS ADD email VARCHAR(255) NOT NULL UNIQUE;
ALTER TABLE STUDENTS ADD gender ENUM('male', 'female'), ADD batch_code VARCHAR(20), ADD phone_number VARCHAR(20), ADD alternative_phone_number VARCHAR(20);

ALTER TABLE STUDENTS RENAME COLUMN alternative_phone_number TO description;

ALTER TABLE STUDENTS DROP COLUMN gender;
