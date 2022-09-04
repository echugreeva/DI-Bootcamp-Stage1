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

-- OR
-- select distinct max_salary from jobs
-- order by max_salary desc
-- offset 4
-- fetch first 1 row only
--9 
-- select distinct salary from employees
-- order by salary asc
-- offset 3
-- fetch first 1 row only


--10

-- select department_name, department_id from departments
-- where department_id NOT IN 
-- (select distinct department_id from employees)
-- select *from employees order by department_id

--joins

--1
-- select department_name location_id, l.street_address, l.city, l.state_province, c.country_name from departments d
-- join locations l 
-- on d.location_id = l.location_id
-- join countries c
-- on l.country_id = c.country_id

--2 
-- select first_name, last_name, d.department_id, d.department_name from employees e
-- join departments d
-- on d.department_id = e.department_id

--3

-- select first_name || ' '  ||  last_name as name , d.department_id,  d.department_name, j.job_title from employees e
-- join departments d
-- on d.department_id=e.department_id
-- join jobs j
-- on j.job_id = e.job_id
-- join locations l
-- on d.location_id = l.location_id
-- where l.city = 'London'


--4 
-- select e1.employee_id || ' '  || e1.last_name as Employee, e2.manager_id || ' '  || e2.last_name from employees e1
-- join employees e2 on e1.manager_id = e2.employee_id

--5 

-- select employee_id, first_name, last_name, email, phone_number, hire_date, salary, job_id, manager_id department_id, d.department_name from employees e
-- join departments d
-- on d.department_id=e.department_id

--6

--this data is not in database

--7 


-- select first_name ||' '  ||  last_name as name, d.department_name, l.city from employees e 
-- join departments d
-- on d.department_id = e.department_id
-- join locations l 
-- on d.location_id = l.location_id

--8 

-- select avg(salary), j.job_title  from employees e
-- join jobs j
-- on e.job_id = j.job_id
-- group by j.job_title


--string function

--1
-- update employees
-- set phone_number = replace(phone_number, '124', '999') 
-- where phone_number LIKE '%124%';

--2
-- select * from employees
-- where length(first_name)>8

--3

-- update employees
-- set email = concat(left(first_name, 1), left(last_name, 1), '@example.com')
-- to check before changes  select concat(left(first_name,1), left(last_name,1), '@example.com') as email from employees

			  
--4 
			  
-- select employee_id, reverse(substr(reverse(email), 4)) as new_email  from employees
							
--5


-- SELECT job_title, substr(job_title, position(' ' in job_title)-1)
-- FROM jobs;
							
--6		
			
-- select first_name, length(first_name) as letterConut from employees
-- where first_name like 'A%' OR first_name like 'J%' OR first_name like 'M%'
-- order by first_name desc
							
							
--7

-- select first_name, concat('$', salary) as SALARY from employees




