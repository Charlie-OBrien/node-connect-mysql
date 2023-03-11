CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES
('My first note', 'My first note is about something'),
('Buy a new laptop', 'Need to buy a m2 macbook');