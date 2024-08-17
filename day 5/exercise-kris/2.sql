USE purwadhika_branch;

CREATE TABLE BRANCHES (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
branch_name varchar(30) not null, 
pic varchar(30) not null, 
address varchar(255) not null, 
city varchar(255) not null,
province varchar(255) not null,
PRIMARY KEY (ID)
)


INSERT INTO BRANCHES (id, branch_name, pic, address, city, province)
VALUES
    (1, 'BSD', 'THOMAS', 'GREEN OFFICE PARK 9', 'TANGERANG', 'BSD'),
    (2, 'JKT', 'BUDI', 'MSIG TOWER', 'JAKARTA SELATAN | JAKARTA', 'JAKARTA'),
    (3, 'BTM', 'ANGEL', 'NONGSA', 'BATAM', 'KEP. RIAU');

UPDATE purwadhika_branch.branches SET pic = "DONO" WHERE branch_name = "BSD";
    INSERT INTO BRANCHES (branch_name, pic, address, city, province)VALUES("BLI", "Tono","Gianyar","Gianyar", "Bali")