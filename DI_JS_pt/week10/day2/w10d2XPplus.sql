-- CREATE DATABASE bootcamp
-- CREATE TABLE students (
-- id serial PRIMARY KEY,
-- first_name VARCHAR(22),
-- last_name VARCHAR(22),
-- birth_date DATE


-- )
-- INSERT INTO students VALUES
-- (DEFAULT, 'Marc', 'Benichou','1998-11-02'),
-- (DEFAULT,'Yoan','Cohen', '2010-12-03'),
-- (DEFAULT,'Lea',	'Benichou','1987-07-27'),
-- (DEFAULT,'Amelia','Dux','1996-04-07'),
-- (DEFAULT,'David','Grez','2003-06-14'),
-- (DEFAULT,'Omer','Simpson','1980-10-03')

-- INSERT INTO students VALUES (DEFAULT,'Elena', 'Chugreeva','1990-02-16')
-- SELECT
--     *
-- FROM
--     students

-- SELECT first_name, last_name FROM students

-- SELECT first_name, last_name FROM students WHERE id=2
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_'
-- SELECT first_name, last_name FROM students WHERE id=1 OR id=3
-- SELECT first_name, last_name FROM students WHERE birth_date >= '2000-01-01'



