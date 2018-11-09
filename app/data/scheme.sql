CREATE DATABASE friendfinder_db;
USE friendfinder_db;

CREATE TABLE friends
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    profile_pic VARCHAR(255) NOT NULL,
    qOne INT(1) NOT NULL,
    qTwo INT(1) NOT NULL,
    qThree INT(1) NOT NULL,
    qFour INT(1) NOT NULL,
    qFive INT(1) NOT NULL,
    qSix INT(1) NOT NULL,
    qSeven INT(1) NOT NULL,
    qEight INT(1) NOT NULL,
    qNine INT(1) NOT NULL,
    qTen INT(1) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO friends (name, profile_pic, qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen) VALUES ("Justin Brown", "https://picsum.photos/200/400", 5, 5, 5, 1, 5, 3, 5, 2, 5, 5);