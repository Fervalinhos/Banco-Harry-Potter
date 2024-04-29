CREATE DATABASE harrypottercocco;

\c harrypottercocco;

CREATE TABLE wizard (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    house VARCHAR(255) NOT NULL,
    habilities VARCHAR(255) NOT NULL,
    blood_status VARCHAR(255) NOT NULL,
    patronus VARCHAR(255) NOT NULL
);

CREATE TABLE wand (
    id SERIAL PRIMARY KEY,
    core VARCHAR(255) NOT NULL,
    wood VARCHAR(255) NOT NULL,
    length DECIMAL(10, 2) NOT NULL
);