-- USE open_mic_db;

-- CREATE TABLE Users( 
      
-- username varchar(100) NOT NULL,
-- presenting BOOLEAN NOT NULL,
-- category varchar(100) NOT NULL,
-- status INTEGER DEFAULT false,
-- hasPresented BOOLEAN DEFAULT false

-- )

-- USE open_mic_db;

-- INSERT INTO Users(username, presenting, category, status, hasPresented, createdAt, updatedAt )
-- VALUES
-- ("VS", 0, "Comedy", 0, 0, "2018-12-06 12:00:00", "2018-12-06 12:00:00"),
-- ("LC", 0, "Comedy", 0, 0, "2018-12-06 12:00:00", "2018-12-06 12:00:00"),
-- ("MR", 0, "Comedy", 0, 0, "2018-12-06 12:00:00", "2018-12-06 12:00:00"),
-- ("BW", 0, "Comedy", 0, 0, "2018-12-06 12:00:00", "2018-12-06 12:00:00"),
-- ("AL", 0, "Comedy", 0, 0, "2018-12-06 12:00:00", "2018-12-06 12:00:00")

-- -- Drops the blogger if it exists currently --
-- DROP DATABASE IF EXISTS open_mic_db;
-- -- Creates the "blogger" database --
-- CREATE DATABASE open_mic_db;


-- USE open_mic_db;

-- CREATE TABLE presenters (

-- ID int NOT NULL AUTO_INCREMENT,
-- presenter varchar(100) NOT NULL,
-- type varchar(100) NOT NULL,
-- category varchar(100) NOT NULL,
-- Text text,
-- Audio blob,
-- endtime DATETIME DEFAULT NULL,
-- snaps INTEGER DEFAULT 0,
-- rejects INTEGER DEFAULT 0,
-- createdAt DATETIME NOT NULL,
-- updatedAt DATETIME NOT NULL,
-- Primary Key(ID)
-- );

-- INSERT INTO presenters (presenter, type, category, Text, createdAt, updatedAt)
-- VALUES ("TestBrian", "Text", "Comedy", "Hello testing here!", "2018-12-06 12:00:00", "2018-12-06 12:00:00");

-- SELECT * FROM open_mic_db.presenters;