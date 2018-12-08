-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS open_mic_db;
-- Creates the "blogger" database --
CREATE DATABASE open_mic_db;


USE open_mic_db;

CREATE TABLE presenters (

ID int NOT NULL AUTO_INCREMENT,
presenter varchar(100) NOT NULL,
type varchar(100) NOT NULL,
category varchar(100) NOT NULL,
Text text,
Audio blob,
endtime DATETIME DEFAULT NULL, 
snaps INTEGER DEFAULT 0, 
rejects INTEGER DEFAULT 0, 
createdAt DATETIME NOT NULL, 
updatedAt DATETIME NOT NULL,
Primary Key(id)
);

INSERT INTO presenters (presenter, type, category, Text, createdAt, updatedAt)
VALUES ("TestBrian", "Text", "Comedy", "Hello testing here!", "2018-12-06 12:00:00", "2018-12-06 12:00:00");

SELECT * FROM open_mic_db.presenters;