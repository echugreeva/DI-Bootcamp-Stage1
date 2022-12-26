--EX 1 
--1
-- select distinct name from language
--2
-- select title, description, name
-- from film f inner join language l
-- on f.language_id = l.language_id

-- select title, description, name
-- from film f full join language l
-- on f.language_id = l.language_id


-- select title, description, name
-- from film f right join language l
-- on f.language_id = l.language_id

--3

-- create table new_film (id serial unique, name varchar (500))

-- insert into new_film values (default, 'Norseman'), (default,'Handmaiden'), (default, 'Bbabdook')

--4

-- create table customer_review (
-- 	review_id serial not null primary key, 
-- 	title varchar(255),
-- 	score numeric check ((score <11) AND (score > 0)),
-- 	review_text varchar,
-- 	last_update date,
-- 	film_id int, 
-- 	language_id int,
-- 	CONSTRAINT fk_film
-- 	foreign key (film_id )
-- 	references new_film (id)
-- 	ON DELETE CASCADE,
	
-- 	CONSTRAINT fk_lang
-- 	foreign key (language_id )
-- 	references language (language_id)
-- 	ON DELETE SET NULL
-- 	)


--5	
	
-- 	insert into customer_review 
-- values 
-- (default, 'review1', 5, 'bhjhfgeufvgu', '2022-08-29', 1 , 3 ), 
-- (default,'review2', 10, 'bhjhfgeufvgu', '2022-08-29', 2, 2), 
-- (default,'review3', 7, 'bhjhfgeufvgu', '2022-08-29', 3, 2)

--6 
-- delete from new_film
-- where id=1

-- the review got also deleted since I set cascade on DELETE
-- select * from customer_review




-- EX 2
--1
-- update film 

-- set language_id = 6
-- where title like 'H%'

--2
-- max character input for first & last name is 30 char, if I'll try to insert longer name I'll get an error

--3
-- this table data isn't used as a foreign key in other tables so deleting it doesn't affect data in pther tables and is easy
-- drop table customer_review


--4 
-- select count(*) from rental where return_date is NULL

--5
-- select title, rental_rate, f.film_id, i.inventory_id, return_date from film f
-- left join inventory i on f.film_id = i.film_id
-- left join rental r on i.inventory_id =r.inventory_id
-- where return_date is NULL
-- order by rental_rate DESC
-- limit 30

--6
-- select title from film 
-- where LOWER(description) like '%wrestler%' and LOWER(description) like '%sumo%' and film_id IN (
-- select film_id from film_actor f
-- 	inner join actor a on f.actor_id = a.actor_id
-- 	where first_name = 'Penelope' and last_name ='Monroe'
-- )


-- select title from film f
-- left join film_category fc on f.film_id = fc.film_id
-- left join category c on fc.category_id = c.category_id
-- where 
-- length < 60 and 
-- f.rating = 'R' and
-- c.name = 'Documentory'

-- select title from film f
-- left join inventory i on f.film_id = i.film_id
-- left join rental r on i.inventory_id =r.inventory_id
-- left join customer c on c.customer_id = r.customer_id
-- where 
-- r.return_date Between '2005-07-28' and '2005-08-01' and
-- c.first_name = 'Matthew' and c.last_name ='Mahan' and
-- f.rental_rate > 4


-- select title, replacement_cost from film f
-- 	left join inventory i on f.film_id = i.film_id
-- 	left join rental r on i.inventory_id =r.inventory_id
-- 	left join customer c on c.customer_id = r.customer_id
-- where (LOWER(description) like '%boat%' OR LOWER(title) like '%boat%') 
-- and c.first_name = 'Matthew' and c.last_name ='Mahan'
-- order by replacement_cost desc

