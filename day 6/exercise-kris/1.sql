USE jcwd2902_join_table;

create table Member (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    email varchar(32) NOT NULL,
    phone_number varchar(32) NOT NULL,
    first_name varchar(32) NOT NULL,
    last_name varchar(32),
    registered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX `id_UNIQUE` (id ASC) VISIBLE)


create Table if not exists Author (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    fullname varchar(32) NOT NULL,
    firstname varchar(32) NOT NULL,
    lastname varchar(32) NOT NULL,
    UNIQUE INDEX `id_UNIQUE` (id ASC) VISIBLE) 
    ENGINE = InnoDB

create Table IF NOT EXISTS Books (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 bookname varchar(32) NOT NULL,
 author_id INTEGER NOT NULL,
 isbn VARCHAR(16) NOT NULL,
 revision_no VARCHAR(32),
 year_of_publication INTEGER NOT NULL,
 FOREIGN KEY (author_id) REFERENCES Author(id),
UNIQUE INDEX `id_UNIQUE` (id ASC) VISIBLE)
ENGINE = InnoDB;

create Table BookTransactions(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    book_id INTEGER NOT NULL,
    member_id INTEGER NOT NULL,
    borrowed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    returned_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES Books(id),
    FOREIGN KEY (member_id) REFERENCES Member(id)
) ENGINE = InnoDB;

create Table BookStocks(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    book_id INTEGER NOT NULL,
    stock INT DEFAULT 0,
)


