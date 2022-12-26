--part 1
-- create table customer (
-- 	id serial UNIQUE primary key,
-- 	first_name varchar (255) not NULL,
-- 	last_name varchar (255) not NULL
-- )

-- create table customer_profile (
-- 	id serial UNIQUE primary key,
-- 	isLoggedIn BOOLEAN DEFAULT FALSE,
-- 	customer_id INT UNIQUE,
-- 	CONSTRAINT fk_customer_id
-- 	foreign key (customer_id)
-- 	references customer (id)
-- )

-- insert into customer
-- values
-- (default, 'John', 'Doe'),
-- (default, 'Jerome', 'Lalu'),
-- (default, 'Lea', 'Rive')

-- insert into customer_profile
-- values
-- (default, true, 1),
-- (default, default, 2)

-- select first_name from customer c
-- join customer_profile p on 
-- c.id=p.customer_id
-- where isLoggedIn is TRUE

-- select first_name, p.isLoggedIn from customer c
-- left join customer_profile p on 
-- c.id=p.customer_id

-- select count(*) from customer c
-- left join customer_profile p on 
-- c.id=p.customer_id
-- where p.isLoggedIn IS NOT true



--part 2

-- create table books (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title varchar(500) NOT NULL,
-- 	author varchar(500) NOT NULL
-- )

-- insert into books
-- values
-- (default, 'Alice In Wonderland', 'Lewis Carroll'),
-- (default, 'Harry Potter', 'J.K Rowling'),
-- (default, 'To kill a mockingbird', 'Harper Lee')




-- create table students (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name varchar(500) NOT NULL Unique,
-- 	age numeric check (age <15) NOT NULL
-- )

-- insert into students
-- values
-- (default, 'John',12),
-- (default, 'Lera', 11),
-- (default, 'Patrick', 10),
-- (default, 'Bob', 14)

-- create table library (
-- 	book_fk_id int references books (book_id )ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_fk_id int references students (student_id)ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date DATE,
-- 	CONSTRAINT student_book PRIMARY KEY (book_fk_id, student_fk_id)
	
-- )
-- select * from books

-- insert into library 
-- (book_fk_id,student_fk_id, borrowed_date)
-- VALUES 
-- ((select book_id from books where title = 'Alice In Wonderland'),(select student_id from students where name = 'John'),'2022-02-15'),
-- ((select book_id from books where title = 'To kill a mockingbird'), (select student_id from students where name = 'Bob'), '2021-03-03'),
-- ((select book_id from books where title = 'Alice In Wonderland'), (select student_id from students where name = 'Lera'), '2021-05-23'),
-- ((select book_id from books where title = 'Harry Potter'),( select student_id from students where name = 'Bob'), '2021-08-12')


-- select * from library

-- select name, title from library l
-- join students s on l.student_fk_id = s.student_id
-- join books b on l.book_fk_id = book_id

-- select avg(age) from students 
-- where student_id IN (
-- 	select student_fk_id from library l
-- 	join books b on l.book_fk_id = b.book_id
-- 	where b.title = 'Alice In Wonderland'
-- )

-- delete from students where student_id=1


--will remove data of this student from library 


