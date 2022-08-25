--part 1

-- select first_name as "First Name", last_name as "Last Name" from employees
-- select distinct department_id from employees
-- select * from employees order by first_name DESC

-- select first_name, last_name, salary, ((salary*15)/100) as PF from employees
-- select first_name, last_name, salary, employee_id from employees order by salary ASC
-- select sum(salary)from employees
-- select avg(salary)from employees
-- select MIN(salary)as "minimum salary", MAX(salary) as "max salary" from employees
-- select count (*) employee_id from employees
-- select distinct UPPER(first_name)from employees
-- select distinct left(first_name,3)from employees
-- select first_name || ' ' || last_name as "Full Name" from employees
-- select first_name, last_name, length(CONCAT(first_name,last_name)) as length from employees

-- select * from employees where first_name ~ '\d'
-- select * from employees order by employee_id limit 10

-- part 2

-- select first_name, last_name, salary from employees where salary between 10000 and 15000
-- select first_name, last_name, hire_date from employees where extract (YEAR from hire_date) = 1987

-- select * from employees where first_name like '%c%' and first_name like '%e%'


-- select last_name, e.job_id, salary, job_title from employees e 
-- inner join jobs j on e.job_id = j.job_id
-- where job_title not in ('Programmer', 'Shipping Clerk') and (salary != 4500 OR salary != 10000 OR salary != 15000)

-- select last_name from employees where length(last_name)=6
-- select last_name from employees where last_name like '__e%'

-- select *, job_title from employees e 
-- inner join jobs j on e.job_id = j.job_id

-- select * from employees
-- where UPPER(last_name) = 'JONES'
-- or  UPPER(last_name) = 'BLAKE'
-- or  UPPER(last_name) = 'SCOTT'
-- or  UPPER(last_name) = 'KING'
-- or  UPPER(last_name) = 'FORD'

