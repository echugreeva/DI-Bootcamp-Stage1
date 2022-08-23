-- CREATE DATABASE public
-- CREATE TABLE items (
-- item VARCHAR(30),
-- price integer)

-- CREATE TABLE customers (
-- first_name VARCHAR(30),
-- last_name VARCHAR(30))

-- INSERT INTO items VALUES ('Small Desk' , 100 ), ('Large Desk' , 300 ), ('Fan Desk' , 80 )
-- INSERT INTO customers VALUES ('Greg' , 'Jones' ), ('Sandra' , 'Jones'), ('Scott' ,'Scott'  ),
-- ('Trevor' , 'Green'),('Melanie' , 'Johnson')
-- SELECT * FROM items
-- SELECT * FROM items WHERE price > 80
-- SELECT * FROM items WHERE price <= 300
-- SELECT * FROM customers WHERE last_name = 'Smith' //outcome column headers with no data
-- SELECT * FROM customers WHERE last_name = 'Jones'
SELECT * FROM customers WHERE first_name != 'Scott'