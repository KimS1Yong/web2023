
CREATE DATABASE IF NOT EXISTS web CHARACTER SET utf8 COLLATE utf8_bin;
USE web;

CREATE TABLE user (
  id int(12) NOT NULL AUTO_INCREMENT=1 PRIMARY KEY,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL
)

INSERT INTO user (id, username, password, email) VALUES (1, 'test', 'test', 'test@test.com');
INSERT INTO user (username, password, email) VALUES ('test2', 'test2', 'test2@test.com');

CREATE TABLE web.cheer (
  post_id int NOT NULL AUTO_INCREMENT=1 PRIMARY KEY,
  content TEXT
)

INSERT INTO web.cheer (content) VALUES('손흥민 선수 화이팅!');
