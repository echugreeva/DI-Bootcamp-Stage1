-- EX 1

-- select * from items order by price DESC
-- select * from items where price >= 80 order by price ASC

-- select first_name, last_name from customers order by first_name ASC limit 3

-- select  last_name from customers order by last_name DESC









-- EX 2
-- select * from customer

-- select first_name || '' || last_name as full_name from customer 

-- select distinct create_date from customer

-- select * from customer order by first_name DESC

-- select film_id, title, description, release_year, rental_rate from film
-- order by rental_rate ASC

-- select address, phone from address where district = "texas"

-- select * from film where film_id = 15  OR film_id = 150 

-- select film_id, title, description, length, rental_rate from film where title ='Harry Potter'

-- select film_id, title, description, length, rental_rate from film where title LIKE 'H%_P%'

-- select title, rental_rate from film order by rental_rate ASC limit 10
-- select title, rental_rate from film order by rental_rate ASC offset 10 rows fetch first 10 row only

-- select c.customer_id, payment_id, amount, payment_date
-- from customer c
-- inner join payment p on c.customer_id = p.customer_id
-- order by c.customer_id ASC

-- select f.film_id from film f left join inventory i on i.film_id = NULL

-- select c.city,  c.country_id, co.country
-- from city c
-- left join country co on c.country_id=co.country_id



-- select c.customer_id, first_name, last_name, amount, payment_date, staff_id
-- from customer c
-- inner join payment p on c.customer_id = p.customer_id
-- order by p.staff_id DESC



