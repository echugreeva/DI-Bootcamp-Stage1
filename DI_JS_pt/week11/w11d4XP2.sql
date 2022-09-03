--subquery
--1
-- select first_name, last_name, salary from employees
-- where salary > (select salary from employees where last_name = 'Bell')
--I think there was a typo "Bull " instead "Bell" in the task
--2
-- select first_name, last_name from employees
-- where manager_id IN (
-- 	select manager_id from employees 
-- 	where department_id IN (
-- 	select department_id from departments
-- 	where location_id IN (
-- 		select location_id from locations
-- 			where country_id IN 
-- 				(select country_id from countries 	
-- 				 	where country_name like 'United States%')
	
-- 	)
--  )
-- )  

--3
-- select first_name, last_name from employees
-- 	where job_id IN (
-- 	select job_id from jobs where job_title like '%Manager%'
-- 	)
	
--4

-- select first_name, last_name from employees 
-- where salary > (select avg(salary) from employees)

--5
-- select first_name, last_name, job_id, salary from employees e
-- where e.salary = (select min_salary from jobs j where e.job_id = j.job_id)


--6

-- select first_name, last_name from employees
-- where job_id NOT IN (
-- select job_id from jobs where job_title like '%Manager%'
-- )

--7

-- select first_name, last_name from employees e
-- where salary > (select avg(salary) from employees where department_id = e.department_id)

--8

-- select distinct salary from employees
-- order by salary desc
-- offset 4
-- fetch first 1 row only

OR
select distinct max_salary from jobs
order by max_salary desc
offset 4
fetch first 1 row only
--9 
-- select distinct salary from employees
-- order by salary asc
-- offset 3
-- fetch first 1 row only


--10

select * from jobs
select department_name, department_id from departments
where department_id NOT IN 
(select distinct department_id from employees)


--joins

--1
select department_name location_id, l.street_address, l.city, l.state_province, c.country_name from department d
join locations l 
on d.location_id = l.location_id
join countries c
on l.country_id = c.country_id

--2 
select first_name, last_name, department_id, d.department_name from employees e
join department d
on d.department_id=e.department_id

--3

select first_name ||  last_name as name , department_id,  d.department_name, j.job_title from employees e
join department d
on d.department_id=e.department_id
join jobs j
on j.job_id = e.job_id
join loactions l
on d.location_id = l.location_id



